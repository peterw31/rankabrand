
chrome.contextMenus.create({
    "title": "Get this Rank",
    "contexts": [ "selection"],
    "onclick" : clickHandler()
  });

function clickHandler(){ return function(e) {

chrome.tabs.executeScript( 
    {  code: "window.getSelection().toString();"}, 
    function(selection) {
        console.log("sending " + selection[0]);
        chrome.windows.create({'url': 'rank.html?q='+encodeURIComponent(selection[0]), 'type': 'popup'}, function(window) {
        window.onload = function(e)
{
alert('ok');
 window.document.getElementById("brand-search-input").value = selection[0];
}
   });

});










    
};};
