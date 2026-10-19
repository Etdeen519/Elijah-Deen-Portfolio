$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$css = Join-Path $root 'app/globals.css'
if (-not (Test-Path $css)) {
  Write-Host 'Put both updater files in the main Elijah-Deen-Portfolio folder.' -ForegroundColor Red
  exit 1
}
$content = [System.IO.File]::ReadAllText($css)
if (-not $content.Contains('/* Borderless project carousel */')) {
  $content += @'

/* Borderless project carousel */
.home-projects .project-feature,
.project-feature{
  border:0;
  background:transparent;
  box-shadow:none;
}
.home-projects .project-feature-media,
.project-feature-media{
  border:0;
  background:transparent;
}
.project-feature-copy{
  border:0;
  background:transparent;
  box-shadow:none;
}
.project-feature .tag-row span,
[data-theme=light] .project-feature .tag-row span{
  border:0;
  background:none;
  padding:0;
  color:var(--muted);
}
.project-feature .tag-row span+span:before{content:"·";margin-right:7px;color:var(--maroon-soft)}
[data-theme=light] .project-feature-media{background:transparent}
.project-switcher button,
.project-feature-switcher button,
.project-photo-controls>button,
[data-theme=light] .project-photo-controls>button{
  width:64px;
  height:72px;
  padding:0;
  border:0;
  background:none;
  box-shadow:none;
  color:var(--ink);
  cursor:pointer;
  transition:transform .2s ease,color .2s ease;
}
.project-switcher button svg,
.project-photo-controls>button svg{
  width:44px;
  height:44px;
  filter:drop-shadow(0 2px 4px rgba(0,0,0,.4));
}
.project-switcher button:hover,
.project-photo-controls>button:hover,
[data-theme=light] .project-photo-controls>button:hover{
  border:0;
  background:none;
  color:var(--maroon-soft);
}
.project-feature-switcher button:hover{transform:translateY(-50%) scale(1.12)}
.project-photo-controls>button:hover{transform:scale(1.12)}
.project-switcher button:focus-visible,
.project-photo-controls>button:focus-visible{
  outline:2px solid var(--maroon-soft);
  outline-offset:2px;
}
.project-photo-controls{bottom:9px}
.project-photo-controls>button{width:44px;height:52px}
.project-photo-controls>button svg{width:32px;height:32px}
@media(max-width:640px){
  .project-feature-switcher button{width:44px;height:52px}
  .project-feature-switcher button svg{width:32px;height:32px}
}
'@
  $utf8 = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($css, $content, $utf8)
}
Write-Host 'Borderless carousel update applied. Commit and Push origin in GitHub Desktop.' -ForegroundColor Green
