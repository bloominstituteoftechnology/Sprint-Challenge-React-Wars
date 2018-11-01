# Start both client and server in Powershell
# root
## Alternatively you can hard code these
$root = ".\Sprint-Challenge-React-Wars\"
# client
$client = ".\client\"
# server
$server = ".\server\"

function startboth() {
  # Set-Location $root;
  Push-Location $client;
  Start-Process powershell.exe "-NoExit yarn start";
  Pop-Location
  Push-Location $server;
  Start-Process powershell.exe "-NoExit yarn start";
  Pop-Location;
  Pop-Location;
  Clear-Host
}
startboth