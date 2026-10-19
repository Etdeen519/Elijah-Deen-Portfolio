$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$carousel = Join-Path $root 'app/projects/project-carousel.tsx'
$css = Join-Path $root 'app/globals.css'
foreach ($file in @($carousel, $css)) {
  if (-not (Test-Path $file)) {
    Write-Host "Missing $file. Put both updater files in the main Elijah-Deen-Portfolio folder." -ForegroundColor Red
    exit 1
  }
}
$utf8 = New-Object System.Text.UTF8Encoding($false)
$content = [System.IO.File]::ReadAllText($carousel)
if (-not $content.Contains('className="project-feature-switcher"')) {
  $controls = @'
      <div className="project-switcher" aria-label="Project controls">
        <button type="button" onClick={() => changeProject(-1)} aria-label="Previous project"><ChevronLeft size={26}/></button>
        <button type="button" onClick={() => changeProject(1)} aria-label="Next project"><ChevronRight size={26}/></button>
      </div>
'@
  if (-not $content.Contains($controls)) { throw 'Could not find the current project arrow controls. No files were changed.' }
  $content = $content.Replace($controls, '')
  $article = '<article className="project-feature" key={project.title}>'
  if (-not $content.Contains($article)) { throw 'Could not find the project card.' }
  $moved = $controls.Replace('className="project-switcher"', 'className="project-switcher project-feature-switcher"')
  $content = $content.Replace($article, $article + "`r`n" + $moved)
  [System.IO.File]::WriteAllText($carousel, $content, $utf8)
}

$content = [System.IO.File]::ReadAllText($css)
if (-not $content.Contains('/* Portfolio flow and side arrows update */')) {
  $content += @'

/* Portfolio flow and side arrows update */
body,.hero,.home-projects,.home-projects .project-carousel-section,.experience,.about,footer{background:var(--paper);color:var(--ink)}
[data-theme=light] .experience{background:var(--paper);color:var(--ink)}
footer:after{color:rgba(197,139,147,.055)}
footer .section-index{color:var(--maroon-soft)}
footer .footer-copy,[data-theme=light] footer .footer-copy{color:var(--muted)}
footer .footer-link,[data-theme=light] footer .footer-link{color:var(--ink)}
footer h2 em{color:var(--maroon-soft)}
footer .button-light{background:var(--surface);color:var(--ink);border-color:var(--line)}
footer .button-light:hover{background:var(--surface-2)}
footer .footer-bottom{border-top-color:var(--line)}
.project-feature{position:relative}
.project-feature-switcher{position:absolute;inset:0;z-index:5;display:block;pointer-events:none}
.project-feature-switcher button{position:absolute;top:50%;transform:translateY(-50%);pointer-events:auto;background:var(--surface);border-color:var(--line);box-shadow:0 5px 20px rgba(0,0,0,.25)}
.project-feature-switcher button:first-child{left:14px}
.project-feature-switcher button:last-child{right:14px}
@media(max-width:900px){
  .project-feature-switcher{height:clamp(280px,48vw,400px)}
}
@media(max-width:640px){
  .project-feature-switcher{height:clamp(270px,78vw,360px)}
  .project-feature-switcher button:first-child{left:8px}
  .project-feature-switcher button:last-child{right:8px}
}
'@
  [System.IO.File]::WriteAllText($css, $content, $utf8)
}
Write-Host 'Portfolio flow update applied. Commit and Push origin in GitHub Desktop.' -ForegroundColor Green
