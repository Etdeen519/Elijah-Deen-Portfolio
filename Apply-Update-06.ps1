$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root 'package.json'))) {
  throw 'Put both updater files and the Update-06-files folder in the main Elijah-Deen-Portfolio folder, beside package.json.'
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
  @{ Path = 'app/globals.css'; Original = '85257B745CBAE4B8B1D8F45CCE9AD8D0F84E56F39C3B308CD1D6A1C8421A0EDD' },
  @{ Path = 'app/page.tsx'; Original = '5EAF93A4F5DC38164C7583F8BE85F953B129AEB4C1EC7303EE36EF30986CD422' },
  @{ Path = 'app/section-rail.tsx'; Original = '2E03478DDABA6D1B64E6451D524AA3BA38189C0544CFF9F3BFCB6D4EC5A7368B' }
)

foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-06-files') $relative
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
  Copy-Item -LiteralPath (Join-Path (Join-Path $root 'Update-06-files') $relative) -Destination (Join-Path $root $relative) -Force
}
Write-Host 'Update 06 applied. Review the three changed source files in GitHub Desktop, then Commit and Push origin.' -ForegroundColor Green
