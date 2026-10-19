@echo off
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Apply-Portfolio-Flow-Update.ps1"
if errorlevel 1 goto failed
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Apply-Borderless-Carousel.ps1"
if errorlevel 1 goto failed
echo.
echo Both carousel updates are applied. Commit and Push origin in GitHub Desktop.
pause
exit /b 0
:failed
echo.
echo The update stopped. Please send me the error text shown above.
pause
exit /b 1
