let inter = setInterval(function() {
    let idx;
    if (!(idx = find12285())) {
            console.log('sad');
            return;
    }

    alert('success');
    clearInterval(inter);
    // The function to be replaced
    const func12285 = self.webpackChunkwhatsappweb_client[idx][1][12285];
  
    const searchValue = "c=a(8139),",
    replaceValue = "c=a(8139);c.sendReactionsEnabled=function(){return true;};var ";
  
    // The new injected function
    const injectedFuncString = func12285.toString().replace(searchValue, replaceValue);
    // Using eval here is safe, because we are accessing a local variable
    const injectedFunc = eval(injectedFuncString);
  
    // Replace the old function with the injected function
    self.webpackChunkwhatsappweb_client[idx][1][12285] = injectedFunc;
}, 0);

function find12285() {
    if (!self.webpackChunkwhatsappweb_client) return false;

    for (let i = 0; i < 15; i++) {
        if (self.webpackChunkwhatsappweb_client[i][1][12285]) return i;
    }

    return false;
}