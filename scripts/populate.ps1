# Echos out Get data into a json doc
# NOTE: I have the real cUrl not Invoke-Webrequest running
$url = 'https://swapi.co/api/people'
curl $url -XGET >> ../data/API.json
# Populate directory list when in root folder
Get-Location >> .\data\directorylist.txt
# Client
Get-Location | Add-Content ..\data\directorylist.txt
# Server
Get-Location | Add-Content ..\data\directorylist.txt