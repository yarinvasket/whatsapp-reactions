function replaceFunction() {
    // The function to be replaced
    const func12285 = self.webpackChunkwhatsappweb_client[8][1][12285];

    const searchValue = "c=a(8139),",
    replaceValue = "c=a(8139);c.sendReactionsEnabled=function(){return true;};var ";

    // The new injected function
    const injectedFuncString = func12285.toString().replace(searchValue, replaceValue);
    // Using eval here is safe, because we are accessing a local variable
    const injectedFunc = eval(injectedFuncString);

    //Replace the old function with the injected function
    self.webpackChunkwhatsappweb_client[8][1][12285] = injectedFunc;
};

const rules = [{
    id: "replace 12285 function",
    priority: 100,
    conditions: [self.webpackChunkwhatsappweb_client &&
                 self.webpackChunkwhatsappweb_client[8][1][12285]],
    actions: [replaceFunction()]
}];

addRules(rules);