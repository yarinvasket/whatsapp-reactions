chrome.webNavigation.onCompleted.addListener(inject, {
    url: [
        {urlPrefix: 'https://web.whatsapp.com/'}
    ]
})

function inject(e) {
    const tabId = e.tabId;
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['inject.js']
        });
}
