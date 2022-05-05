function main() {
    let inter = setInterval(function() {
        let idx = find12285();
        console.log(idx);
        if (!idx) {
                return;
        }

        clearInterval(inter);
        // The function to be replaced
        const func12285 = self.webpackChunkwhatsapp_web_client[idx][1][12285];
    
        const searchValue = "c=a(8139),",
        replaceValue = "c=a(8139);c.sendReactionsEnabled=function(){return true;};var ";
    
        // The new injected function
        const injectedFuncString = func12285.toString().replace(searchValue, replaceValue);
        // Using eval here is safe, because we are accessing a local variable
        const injectedFunc = eval(injectedFuncString);
    
        // Replace the old function with the injected function
        self.webpackChunkwhatsapp_web_client[idx][1][12285] = injectedFunc;
    }, 0);

    function find12285() {
        if (!self.webpackChunkwhatsapp_web_client) return false;

        for (let i = 0; i < 15; i++) {
            if (self.webpackChunkwhatsapp_web_client[i][1][12285]) return i;
        }

        return false;
    }
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);