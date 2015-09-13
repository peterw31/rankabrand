
chrome.contextMenus.create({
    "title": "Get this Rank",
    "contexts": [ "selection"],
    "onclick" : clickHandler()
  });

function clickHandler(){ return function(e) {
        console.log("sending " + e.selectionText);
        chrome.windows.create({ 'url': 'rank.html?q=' + encodeURIComponent(e.selectionText), 'type': 'popup' }, function (window) {
            window.onload = function(e)
            {
                window.document.getElementById("brand-search-input").value = e.selectionText;
            }
        });
    };
    };
