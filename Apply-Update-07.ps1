$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root 'package.json'))) { throw 'Put both updater files and the Update-07-files folder beside package.json.' }
function NormalizedHash([string]$path) {
  $content = [System.IO.File]::ReadAllText($path).Replace("`r`n", "`n").Replace("`r", "`n")
  $sha = [System.Security.Cryptography.SHA256]::Create()
  try { return [System.BitConverter]::ToString($sha.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($content))).Replace('-', '') }
  finally { $sha.Dispose() }
}
$files = @(
  @{ Path = 'app/globals.css'; Allowed = @('85257B745CBAE4B8B1D8F45CCE9AD8D0F84E56F39C3B308CD1D6A1C8421A0EDD', '51C8FEC9F2AF4A20128EDAB65AEFEA2C9BD22C807677DE396D794D5B7A22784B') },
  @{ Path = 'app/page.tsx'; Allowed = @('5EAF93A4F5DC38164C7583F8BE85F953B129AEB4C1EC7303EE36EF30986CD422', 'BE34E2B83C366FFE41726BC29B448EB89703CFF6A70ABD986A9A3F11D3ED7307') },
  @{ Path = 'app/theme-toggle.tsx'; Allowed = @('DAC3EF178D4D189A5C9C6372D708E10C62C03D1645B66386CFC48A5F59BC91F5') }
 )
foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-07-files') $relative
  $target = Join-Path $root $relative
  if (-not (Test-Path $source) -or -not (Test-Path $target)) { throw "Missing $($item.Path) or its update file. No files were changed." }
  $current = NormalizedHash $target
  if ($current -ne (NormalizedHash $source) -and $current -notin $item.Allowed) { throw "Your $($item.Path) has other changes. No files were changed. Send me that file to merge safely." }
}
foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  Copy-Item -LiteralPath (Join-Path (Join-Path $root 'Update-07-files') $relative) -Destination (Join-Path $root $relative) -Force
}
Write-Host 'Update 07 applied. Commit the changed app files and Push origin in GitHub Desktop.' -ForegroundColor Green
