// This runs in the context of the inspected web page!
// Will maybe have to add an event listener to the window, it looks like we can access the DOM here but not globals like 'window'
document.querySelector('#some-page-button').addEventListener('click', function() {
    chrome.extension.sendMessage({ content: "Changed by the page!!!!" }, function(message){});
});