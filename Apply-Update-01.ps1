$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Join-Path $root 'app\projects\page.tsx'
$replacement = Join-Path $root 'Update-01-projects-page.tsx'
$expectedHash = 'E441940A7E3F43834A42A10C8B2FF7B90D932C9AAB60F4C5E3F6A614F77342EF'

if (-not (Test-Path $target) -or -not (Test-Path (Join-Path $root 'package.json'))) {
  throw 'Put the three Update 01 files in the main Elijah-Deen-Portfolio folder, then run this file again.'
}
if (-not (Test-Path $replacement)) { throw 'Update-01-projects-page.tsx is missing.' }

$currentHash = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash
$replacementHash = (Get-FileHash -LiteralPath $replacement -Algorithm SHA256).Hash
if ($currentHash -eq $replacementHash) {
  Write-Host 'Update 01 is already applied.' -ForegroundColor Green
  exit 0
}
if ($currentHash -ne $expectedHash) {
  throw 'Your project page differs from the version used for Update 01. No changes were made. Send me the current app/projects/page.tsx so I can merge safely.'
}

Copy-Item -LiteralPath $replacement -Destination $target -Force
Write-Host 'Update 01 applied. Review the descriptions, then Commit and Push origin in GitHub Desktop.' -ForegroundColor Green
