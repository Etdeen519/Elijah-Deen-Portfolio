$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root 'package.json'))) {
  throw 'Put both updater files and the Update-03-files folder in the main Elijah-Deen-Portfolio folder, beside package.json.'
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
  @{ Path = 'app/globals.css'; Original = 'E9469443A8D4E321DB00851D99A2D8DECB52D6C052DD1AF7B07892CB8F0F2FCE' },
  @{ Path = 'app/page.tsx'; Original = '45B28CD266DC08EE791C0E42B2810BFAC990CB1907F3AA402FC960013E9F5E49' },
  @{ Path = 'app/projects/page.tsx'; Original = 'B7877083C311FBFEDAA73CD52068B0BBA44376C900B3E259D22D7DBDF6DBCB2E' },
  @{ Path = 'app/projects/project-carousel.tsx'; Original = '2CD13436E42C91903088EDD9CF4A2C60FC8B278F4907E66A4558548117811E18' },
  @{ Path = 'app/projects/project-grid.tsx'; Original = '4AF2DE8D7C3C2DD75D1FF0C9EFC3E32293D0A07DBB8558C4FDA2AFC0D677EBC6' }
)

foreach ($item in $files) {
  $relative = $item.Path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $source = Join-Path (Join-Path $root 'Update-03-files') $relative
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
  Copy-Item -LiteralPath (Join-Path (Join-Path $root 'Update-03-files') $relative) -Destination (Join-Path $root $relative) -Force
}
Write-Host 'Update 03 applied. Review the five changed source files in GitHub Desktop, then Commit and Push origin.' -ForegroundColor Green
