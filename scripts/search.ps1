# Character array for our arguments
$chars = @("Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars", "Beru Whitesun lars", "R5-D4", "Biggs Darklighter", "Obi-Wan Kenobi")

# ------------------------------------------
# Google's search query URL
# $url = "https://www.google.com/search?q="

# The part after the query that specifies it as an image.
# $image = "&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQypLD2d_dAhVJ11MKHe-AA_wQ_AUIDigB&biw=1030&bih=748"

# First iteration of the search with Google
# function quicksearch() {$chars | % {$_.replace(' ', '+')} | % {start-process "chrome.exe" "$url+$_+$image", '--profile-directory="Default"'}}
# ------------------------------------------

# Star wars wikia for better images
# Template: http://starwars.wikia.com/wiki/Luke_Skywalker/Legends

# Validate and correct data
# $validate = "$_.replace(' ', '_')"
$siteUrl = "http://starwars.wikia.com/wiki/"
$legends = "/Legends"
# $url = "$url, $_, $legends -join"
# $chromeWithArgs = start-process "chrome.exe" "$url+$_+$legends", '--profile-directory="Default"'
# $chromeArgs = 

# New iteration
function quicksearch() {$chars | ForEach-Object {$_.replace(' ', '_')} | ForEach-Object {start-process "chrome.exe" "$siteUrl$_ -join", '--profile-directory="Default"'}}

quicksearch