$root = ".\Sprint-Challenge-React-Wars\"
# client
$client = ".\client\"
# server
$server = ".\server\"
function first() {
  # Set-Location $root;
  # Push-Location $client;
  Start-Process powershell.exe "-WindowStyle hidden yarn test";
  if ($?) {
    New-Item SuccessInstall.txt
  } 
  # Push-Location $server;
  Start-Process powershell.exe "-noexit yarn install yarn start";
  # Pop-Location;
  Clear-Host;
  Write-Host Installed!
}

# function startboth() {
#   # Set-Location $root;
#   Push-Location $client;
#   Start-Process powershell.exe "-NoExit yarn start";
#   Pop-Location
#   Push-Location $server;
#   Start-Process powershell.exe "-NoExit yarn start";
#   Pop-Location;
#   Pop-Location;
#   Clear-Host
# }
# install

# startboth
first
