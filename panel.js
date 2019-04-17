// This creates and maintains the communication channel between
// the inspectedPage and the dev tools panel.
//
// In this example, messages are JSON objects
// {
//   action: ['code'|'script'|'message'], // What action to perform on the inspected page
//   content: [String|Path to script|Object], // data to be passed through
//   tabId: [Automatically added]
// }

// Create a port with background page for continous message communication
var port = chrome.extension.connect({ name: "Sample Communication" });

// Listen to messages from the background page
port.onMessage.addListener(function (message) {
  document.querySelector('#insertmessagebutton').innerHTML = message.content;
});

// This sends an object to the background page 
// where it can be relayed to the inspected page
function sendObjectToInspectedPage(message) {
    message.tabId = chrome.devtools.inspectedWindow.tabId;
    chrome.extension.sendMessage(message);
}


//----------------------------------------------------------------------


// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*

// sendObjectToInspectedPage({action: "code", content: "document.body.innerHTML='<button>Send message to DevTools</button>'"});
sendObjectToInspectedPage({ action: "script", content: "messageback-script.js" });
