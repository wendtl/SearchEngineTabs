var body = document.getElementsByTagName('body');
var header = document.createElement('header');
header.innerHTML = "<header>" +
    "<ul id=\"searchTabs\">" +
        "<li>Google</li>" +
        "<li>DuckDuckGo</li>" +
        "<li>Bing</li>" +
    "</ul>" +
"</header>";
document.body.innerHTML = header.innerHTML + document.body.innerHTML;