@echo off

for /f %%i in ('git symbolic-ref --short HEAD') do set current_branch=%%i

if %current_branch%==master (
	git subtree push -P public_html origin gh-pages
)

if not %current_branch%==master (
	echo Switch to master branch before pushing to gh-pages!
	echo.
	pause
)