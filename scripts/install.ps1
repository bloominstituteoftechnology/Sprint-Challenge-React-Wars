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

# Character array for our arguments
# Pre filled in with '+' to avoid parsing and adding it
$chars = @("Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars", "Beru Whitesun lars", "R5-D4", "Biggs Darklighter", "Obi-Wan Kenobi")

# Google's search query URL
$url = "https://www.google.com/search?q="

# The part after the query that specifies it as an image.
$image = "&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQypLD2d_dAhVJ11MKHe-AA_wQ_AUIDigB&biw=1030&bih=748"

function quicksearchimage($Query) {
$Url= "www.google.com/search?q=";
$Image = "&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQypLD2d_dAhVJ11MKHe-AA_wQ_AUIDigB&biw=1030&bih=748"
$Browser= "chrome.exe";
$BrowserArgs= '--profile-directory="Default"';
$SearchTerm= $Query.replace(' ', '+');
$SearchQuery= $Url+$SearchTerm+$Image;
start-process "$Browser" "$SearchQuery", "$BrowserArgs"}
# Character array for our arguments
# Pre filled in with '+' to avoid parsing and adding it
$chars = @("Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars", "Beru Whitesun lars", "R5-D4", "Biggs Darklighter", "Obi-Wan Kenobi")

# Google's search query URL
$url = "https://www.google.com/search?q="

# The part after the query that specifies it as an image.
$image = "&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQypLD2d_dAhVJ11MKHe-AA_wQ_AUIDigB&biw=1030&bih=748"

function quicksearch() {$chars | % {$_.replace(' ', '+')} | % {start-process "chrome.exe" "$url+$_+$image", '--profile-directory="Default"'}}

quicksearch