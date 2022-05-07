function loadScript(url, callback) {
    let s = document.createElement('script');
    s.src = url;
    s.type = "text/javascript";
    
    s.onload = function() {
        this.remove();
        callback(s);
    };

    (document.head || document.documentElement).appendChild(s);
}

// call the function...
loadScript(chrome.runtime.getURL('[FILE]'), function(script) {
    /*const searchValue = "c=a(8139),";
    const replaceValue = "c=a(8139);c.sendReactionsEnabled=function(){return true;};var "

    script.innerHTML = script.innerHTML.replace(searchValue, replaceValue);*/
});
