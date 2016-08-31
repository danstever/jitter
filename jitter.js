chrome.webNavigation.onBeforeNavigate.addListener(function(){
    chrome.windows.getCurrent(function(win){
        var wQty = Math.round(Math.random()*5) + 1;
        wQty *= Math.round(Math.random()) == 1 ? 1 : -1;

        var hQty = Math.round(Math.random()*5) + 1;
        hQty *= Math.round(Math.random()) == 1 ? 1 : -1;

        var width = win.width + wQty;
        var height = win.height + hQty;

        chrome.windows.update(win.id, {'width': width, 'height': height }, function(){});
    });
});
