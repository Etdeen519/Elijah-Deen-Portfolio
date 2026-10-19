$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$component = Join-Path $root 'app/projects/project-carousel.tsx'
$cssFile = Join-Path $root 'app/globals.css'
foreach ($file in @($component, $cssFile)) {
  if (-not (Test-Path $file)) {
    Write-Host "Missing $file. Put both updater files in the main Elijah-Deen-Portfolio folder." -ForegroundColor Red
    exit 1
  }
}
$utf8 = New-Object System.Text.UTF8Encoding($false)
$source = [System.IO.File]::ReadAllText($component)
if (-not $source.Contains('className="project-navigation"')) {
  $headingMatch = [regex]::Match($source, '    <div className="project-carousel-heading">[\s\S]*?\r?\n    </div>')
  $arrowsMatch = [regex]::Match($source, '      <div className="project-switcher project-feature-switcher"[^>]*>[\s\S]*?\r?\n      </div>')
  $railStart = '    <div className="project-rail" aria-label="Choose a project">'
  $hintStart = '    <p className="project-rail-hint">'
  if (-not $headingMatch.Success -or -not $arrowsMatch.Success -or -not $source.Contains($railStart) -or -not $source.Contains($hintStart)) {
    throw 'Could not locate the project controls. The previous carousel updates must be applied first. No files were changed.'
  }
  $heading = $headingMatch.Value
  $arrows = $arrowsMatch.Value.Replace('project-switcher project-feature-switcher', 'project-switcher')
  $source = $source.Replace($headingMatch.Value, '')
  $source = $source.Replace($arrowsMatch.Value, '')
  $newline = [Environment]::NewLine
  $source = $source.Replace($railStart, '    <div className="project-navigation">' + $newline + $heading + $newline + $arrows + $newline + $railStart)
  $source = $source.Replace($hintStart, '    </div>' + $newline + $hintStart)
  [System.IO.File]::WriteAllText($component, $source, $utf8)
}

$css = [System.IO.File]::ReadAllText($cssFile)
if (-not $css.Contains('/* Project navigation row and open spacing */')) {
  $css += @'

/* Project navigation row and open spacing */
.home-projects .project-feature{height:clamp(460px,calc(100svh - 190px),800px)}
.project-navigation{
  max-width:1400px;
  margin:18px auto 0;
  display:grid;
  grid-template-columns:110px 64px minmax(0,1fr) 64px;
  align-items:center;
  column-gap:14px;
}
.project-navigation .project-carousel-heading{
  grid-column:1;
  margin:0;
  display:block;
  max-width:none;
}
.project-navigation .project-carousel-heading p{margin:5px 0 0}
.project-navigation .project-switcher{display:contents}
.project-navigation .project-switcher button{
  position:static;
  top:auto;
  width:64px;
  height:60px;
  transform:none;
  border:0;
  background:none;
  box-shadow:none;
  color:var(--ink);
  pointer-events:auto;
}
.project-navigation .project-switcher button:first-child{grid-column:2}
.project-navigation .project-switcher button:last-child{grid-column:4}
.project-navigation .project-switcher button:hover{transform:scale(1.12);background:none;color:var(--maroon-soft)}
.project-navigation .project-rail{
  grid-column:3;
  grid-row:1;
  width:100%;
  max-width:none;
  margin:0;
  padding:0;
}
.project-rail-hint{display:none}
@media(max-width:900px){
  .home-projects .project-feature{height:auto}
  .project-navigation{grid-template-columns:52px minmax(0,1fr) 52px;row-gap:8px;margin-top:12px}
  .project-navigation .project-carousel-heading{grid-column:1 / -1;grid-row:1}
  .project-navigation .project-switcher button{width:52px;height:48px}
  .project-navigation .project-switcher button:first-child{grid-column:1;grid-row:2}
  .project-navigation .project-switcher button:last-child{grid-column:3;grid-row:2}
  .project-navigation .project-rail{grid-column:2;grid-row:2}
}
/* Use breathing room instead of repeated dividing rules. */
.site-header{border-bottom:0}
.hero-meta{border-top:0;padding-top:32px}
.hero-meta div,.hero-meta div+div,.hero-meta div:last-child{border:0}
.experience{border-top:0;border-bottom:0}
.timeline,[data-theme=light] .timeline{border-top:0}
.timeline-row,[data-theme=light] .timeline-row{border-bottom:0;padding:22px 0}
.timeline-row+.timeline-row{margin-top:16px}
.skill-grid,[data-theme=light] .skill-grid{border-top:0}
.skill{border-bottom:0;padding:18px 0}
.skill+.skill{margin-top:14px}
.footer-bottom{border-top:0;padding-top:0}
.project-feature .tag-row span+span:before{content:"\00B7"}
@media(max-width:640px){
  .hero-meta div,.hero-meta div+div{border:0;padding:14px 0}
  .hero-meta div+div{margin-top:8px}
}
'@
  [System.IO.File]::WriteAllText($cssFile, $css, $utf8)
}
Write-Host 'Project navigation and spacing update applied. Commit and Push origin in GitHub Desktop.' -ForegroundColor Green
