$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root 'package.json'))) {
  throw 'Place both update files and the Update-02-files folder in the main Elijah-Deen-Portfolio folder (beside package.json).'
}

function NormalizedHash([string]$path) {
  $content = [System.IO.File]::ReadAllText($path).Replace("`r`n", "`n").Replace("`r", "`n")
  $sha = [System.Security.Cryptography.SHA256]::Create()
  try {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($content)
    return [System.BitConverter]::ToString($sha.ComputeHash($bytes)).Replace('-', '')
  } finally { $sha.Dispose() }
}

$files = @(
  @{ Path = 'app/globals.css'; Original = '4A791981656ACE2F6EBA050C690E210A2C7ADE6D69B8A6A21FB8252918593CAB' },
  @{ Path = 'app/page.tsx'; Original = 'B4B2A213FFB573F71B0C793C58EE438DD1F9D6F49145AAE01F6F5D36C27B95E3' },
  @{ Path = 'app/projects/page.tsx'; Original = '116BD69009986ED6CB904A9B5FA2070173CB54F5F0DFF751FC783DEF6702E952' },
  @{ Path = 'src/main.tsx'; Original = 'E92A8B7AD5394F210C5A554CEAC23350738F381417ABF9B306A9135A275AC884' },
  @{ Path = 'app/projects/project-grid.tsx'; Original = $null }
)

# Validate every file before changing any of them.
foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-02-files') $relative
  $target = Join-Path $root $relative
  if (-not (Test-Path $source)) { throw "Missing $source. No files were changed." }
  if (Test-Path $target) {
    $current = NormalizedHash $target
    $updated = NormalizedHash $source
    if ($current -ne $updated -and $current -ne $item.Original) {
      throw "Your $($item.Path) has other changes. No files were changed. Send me that file so I can merge it safely."
    }
  } elseif ($item.Original) {
    throw "Missing $($item.Path). No files were changed."
  }
}

foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-02-files') $relative
  $target = Join-Path $root $relative
  $parent = Split-Path -Parent $target
  if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Path $parent | Out-Null }
  Copy-Item -LiteralPath $source -Destination $target -Force
}
Write-Host 'Update 02 applied. Review five source files in GitHub Desktop, then Commit and Push origin.' -ForegroundColor Green
