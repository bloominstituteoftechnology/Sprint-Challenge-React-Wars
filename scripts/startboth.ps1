# Start both client and server in Powershell
# root
$root = "N:\SOURCE\schoolPM\CSPT2\FSW\Javi\Sprint-Challenge-React-Wars"
# client
$client = "N:\SOURCE\schoolPM\CSPT2\FSW\Javi\Sprint-Challenge-React-Wars\client"
# server
$server = "N:\SOURCE\schoolPM\CSPT2\FSW\Javi\Sprint-Challenge-React-Wars\server"

function startboth() {
  Set-Location $root;
  Push-Location $client;
  Start-Process powershell.exe "-NoExit yarn start";
  Push-Location $server;
  Start-Process powershell.exe "-NoExit yarn start";
  Pop-Location;
  Pop-Location;
  Clear-Host
}
startboth