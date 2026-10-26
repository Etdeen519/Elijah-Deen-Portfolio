$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root 'package.json'))) {
  throw 'Put both updater files and the Update-04-files folder in the main Elijah-Deen-Portfolio folder, beside package.json.'
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
  @{ Path = 'app/globals.css'; Original = '64EF72A9D44133C3EE71C209899CADC2F131BEB6C3A1D16CB0F8D98CA02C6407' },
  @{ Path = 'app/page.tsx'; Original = '8DB732F277F69E1E0A8C1C19F61A019301E50F315E3639C5DBA18B944356716E' },
  @{ Path = 'app/projects/page.tsx'; Original = '85118C704AF7B7110674B95F255F42C796C18F71106762AD053236A455424A08' },
  @{ Path = 'app/section-rail.tsx'; Original = $null }
)

# Check every file before writing any changes.
foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-04-files') $relative
  $target = Join-Path $root $relative
  if (-not (Test-Path $source)) { throw "Missing $source. No files were changed." }
  if (Test-Path $target) {
    $current = NormalizedHash $target
    $updated = NormalizedHash $source
    if ($current -ne $updated -and $current -ne $item.Original) {
      throw "Your $($item.Path) has other changes. No files were changed. Send me that file so I can merge safely."
    }
  } elseif ($item.Original) {
    throw "Missing $($item.Path). No files were changed."
  }
}

foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-04-files') $relative
  $target = Join-Path $root $relative
  Copy-Item -LiteralPath $source -Destination $target -Force
}
Write-Host 'Update 04 applied. Review the four changed source files in GitHub Desktop, then Commit and Push origin.' -ForegroundColor Green
