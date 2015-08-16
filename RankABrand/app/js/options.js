//https://developer.chrome.com/extensions/optionsV2
function save_options() {
    var language = document.getElementById('language').value;
    chrome.storage.sync.set({
        language: language
        
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    console.log("restore_options")
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        language: 'en'
        
    }, function (items) {
        document.getElementById('language').value = items.language;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);