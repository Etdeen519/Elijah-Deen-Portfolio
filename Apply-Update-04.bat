@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0Apply-Update-04.ps1"
pause
