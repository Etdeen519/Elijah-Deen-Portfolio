$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectsFile = Join-Path $root 'app/projects/page.tsx'
$homeSourceFile = Join-Path $root 'app/page.tsx'
$cssFile = Join-Path $root 'app/globals.css'
foreach ($file in @($projectsFile, $homeSourceFile, $cssFile)) {
  if (-not (Test-Path $file)) {
    Write-Host "Missing $file. Put both updater files in the main Elijah-Deen-Portfolio folder." -ForegroundColor Red
    exit 1
  }
}
$utf8 = New-Object System.Text.UTF8Encoding($false)
$projects = [System.IO.File]::ReadAllText($projectsFile)
$homeSource = [System.IO.File]::ReadAllText($homeSourceFile)
$css = [System.IO.File]::ReadAllText($cssFile)

function Get-ProjectMatch([string]$text, [string]$title) {
  $pattern = '(?ms)^  \{\r?\n    title: "' + [regex]::Escape($title) + '",[\s\S]*?^  \},'
  return [regex]::Match($text, $pattern)
}

if (-not $projects.Contains('/* video-first-projects */')) {
  foreach ($title in @('Automated Nailer Clamp', 'Bandsaw Dust Collection', 'Integrated Motor Conveyor', 'Scissor Lift')) {
    $projectMatch = Get-ProjectMatch $projects $title
    if (-not $projectMatch.Success) { throw "Could not find $title. No files were changed." }
    $block = $projectMatch.Value
    $mediaMatch = [regex]::Match($block, 'images:\s*\[[\s\S]*?\]')
    if (-not $mediaMatch.Success) { throw "Could not find media for $title. No files were changed." }
    $entries = @([regex]::Matches($mediaMatch.Value, '\{src:[^}]*\}') | ForEach-Object { $_.Value })
    $target = $null
    foreach ($entry in $entries) {
      if ($title -eq 'Automated Nailer Clamp') {
        if ($entry.Contains('clamp-first-video.mp4')) { $target = $entry; break }
      } elseif ($entry.Contains('video:true')) {
        $target = $entry
        break
      }
    }
    if (-not $target) { throw "Could not find the requested video for $title. No files were changed." }
    $ordered = New-Object 'System.Collections.Generic.List[string]'
    $ordered.Add($target)
    foreach ($entry in $entries) { if ($entry -ne $target) { $ordered.Add($entry) } }
    $block = $block.Replace($mediaMatch.Value, 'images: [' + [string]::Join(',', $ordered.ToArray()) + ']')
    $projects = $projects.Replace($projectMatch.Value, $block)
  }
  $conveyor = Get-ProjectMatch $projects 'Integrated Motor Conveyor'
  if (-not $conveyor.Success) { throw 'Could not move the integrated motor conveyor.' }
  $conveyorBlock = $conveyor.Value
  $projects = $projects.Remove($conveyor.Index, $conveyor.Length)
  $clamp = Get-ProjectMatch $projects 'Automated Nailer Clamp'
  if (-not $clamp.Success) { throw 'Could not find the clamp to place the conveyor after it.' }
  $projects = $projects.Insert($clamp.Index + $clamp.Length, [Environment]::NewLine + $conveyorBlock)
  $projects = $projects.Replace('export const projects = [', 'export const projects = [ /* video-first-projects */')
}

if (-not $homeSource.Contains('<h2>Experience.</h2>')) {
  $experiencePattern = '<div className="section-heading compact"><p className="section-index">02 / EXPERIENCE</p><h2>Learning by<br/>building.</h2></div>'
  if (-not $homeSource.Contains($experiencePattern)) { throw 'Could not find the Experience heading. No files were changed.' }
  $homeSource = $homeSource.Replace($experiencePattern, '<div className="section-heading compact"><h2>Experience.</h2></div>')
}
if (-not $homeSource.Contains('<h2>How I work.</h2>')) {
  $aboutPattern = '<p className="section-index">03 / HOW I WORK</p><h2>Curious enough to ask why.<br/>Hands-on enough to find out.</h2>'
  if (-not $homeSource.Contains($aboutPattern)) { throw 'Could not find the How I Work heading. No files were changed.' }
  $homeSource = $homeSource.Replace($aboutPattern, '<h2>How I work.</h2>')
}

if (-not $css.Contains('/* Larger headings and experience type */')) {
  $css += @'

/* Larger headings and experience type */
.project-rail button .project-tab-label{
  border:0;
  background:var(--paper);
  box-shadow:none;
  padding:9px 12px;
  font:700 clamp(.95rem,1.1vw,1.18rem)/1.25 "Courier New",monospace;
  max-width:min(320px,85vw);
}
.project-carousel-kicker{font-size:clamp(1.12rem,1.7vw,1.55rem);letter-spacing:.055em}
.project-navigation .project-carousel-heading p{font-size:clamp(1.55rem,2vw,2rem)}
.archive-meta{font-size:.9rem;line-height:1.4}
.project-feature-copy h2{font-size:clamp(2.4rem,3.3vw,4rem)}
.project-feature-copy>p{font-size:1.08rem}
.experience .section-heading.compact{display:block;margin-bottom:48px}
.experience .section-heading h2,.about h2{font-size:clamp(3.2rem,5.5vw,6rem)}
.timeline-row{grid-template-columns:110px minmax(240px,430px) minmax(220px,1fr);gap:clamp(16px,2vw,30px)}
.timeline-year{font-size:1.08rem;line-height:1.3}
.timeline-row h3{font-size:1.42rem}
.timeline-row p{font-size:1rem}
.timeline-row>strong{text-align:left;font-size:1.06rem;line-height:1.4}
@media(max-width:900px){
  .timeline-row{grid-template-columns:95px minmax(0,1fr);gap:14px}
  .timeline-row>strong{grid-column:2;text-align:left}
}
@media(max-width:640px){
  .timeline-row{grid-template-columns:72px minmax(0,1fr)}
  .timeline-year{font-size:1rem}
}
'@
}

[System.IO.File]::WriteAllText($projectsFile, $projects, $utf8)
[System.IO.File]::WriteAllText($homeSourceFile, $homeSource, $utf8)
[System.IO.File]::WriteAllText($cssFile, $css, $utf8)
Write-Host 'Portfolio content and typography update applied. Commit and Push origin in GitHub Desktop.' -ForegroundColor Green
