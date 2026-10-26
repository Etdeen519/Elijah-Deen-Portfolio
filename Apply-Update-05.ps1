$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root 'package.json'))) {
  throw 'Put both updater files and the Update-05-files folder in the main Elijah-Deen-Portfolio folder, beside package.json.'
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
  @{ Path = 'app/globals.css'; Original = '3577B55B86E81AEC19C84FC4DD2B691EF3CD88A83E71931D60293660B45A0D9B' },
  @{ Path = 'app/page.tsx'; Original = 'E0E3F0AE81F77EFE9FAD965A5CF804595C1134E62CAC1A471EF1E94325356C59' },
  @{ Path = 'app/section-rail.tsx'; Original = '956AD826947B504F548D2912C95BAA6269792B5CF8A376E87C1E747A2C93CD3E' }
)

foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-05-files') $relative
  $target = Join-Path $root $relative
  if (-not (Test-Path $source) -or -not (Test-Path $target)) {
    throw "Missing $($item.Path) or its update file. No files were changed."
  }
  $current = NormalizedHash $target
  $updated = NormalizedHash $source
  if ($current -ne $updated -and $current -ne $item.Original) {
    throw "Your $($item.Path) has other changes. No files were changed. Send me that file so I can merge safely."
  }
}

foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  Copy-Item -LiteralPath (Join-Path (Join-Path $root 'Update-05-files') $relative) -Destination (Join-Path $root $relative) -Force
}
Write-Host 'Update 05 applied. Review the three changed source files in GitHub Desktop, then Commit and Push origin.' -ForegroundColor Green
