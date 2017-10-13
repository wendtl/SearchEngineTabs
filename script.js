function switchToGoogle() {
    console.log(getSearchInfo());
}

function switchToDDG() {

}

function switchToBing() {

}

// Extract search type and search terms
function getSearchInfo() {
    chrome.tabs.getCurrent(function(tab){
        console.log(tab.url);
    });
}

var body = document.getElementsByTagName('body');
var headerDiv = document.createElement('div');
headerDiv.innerHTML = "<header>\n" +
    "<ul id=\"searchTabs\">\n" +
        "<li><button id=\"googleBtn\">Google</button>" +
        "<li><button id=\"ddgBtn\">DuckDuckGo</button></li>\n" +
        "<li><button id=\"bingBtn\">Bing</button></li>\n" +
    "</ul>\n" +
"</header>";
document.body.innerHTML = headerDiv.innerHTML + document.body.innerHTML;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("googleBtn").addEventListener("click", switchToGoogle);
    document.getElementById("ddgBtn").addEventListener("click", switchToGoogle);
    document.getElementById("bingBtn").addEventListener("click", switchToGoogle);
    document.querySelector('button').addEventListener('click', clickHandler);
    main();
  });