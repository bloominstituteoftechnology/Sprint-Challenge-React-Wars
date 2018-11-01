# Start both client and server in Powershell
# root
## Alternatively you can hard code these
$root = ".\Sprint-Challenge-React-Wars\"
# client
$client = ".\client\"
# server
$server = ".\server\"


function install() {
  # Set-Location $root;
  Push-Location $client;
  Start-Process powershell.exe "-WindowStyle hidden -noexit yarn install";
  if ($?) {
    Pop-Location; New-Item SuccessInstall.txt 
  } 
  Push-Location $server;
  Start-Process powershell.exe "-WindowStyle hidden -noexit yarn install";
  Pop-Location;
  Clear-Host;
  Write-Host Installed!
}
install