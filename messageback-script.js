// This runs in the context of the inspected web page!
// Will maybe have to add an event listener to the window, it looks like we can access the DOM here but not globals like 'window'
//document.querySelector('#some-page-button').addEventListener('click', function() {
//    chrome.extension.sendMessage({ content: "Changed by the page!!!!" }, function(message){});
//});

window.addEventListener('mistreevous_tree_update', function(event) {
    chrome.extension.sendMessage({ content: "Mistreevous tree update: " + event.detail.name }, function(message){});
});