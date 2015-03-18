var path, value, menuEntryId;

function getDefaultTheme(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4)
            callback(xhr.responseText);
    };
    xhr.open("GET", "jsonview.css", true);
    xhr.send(null);
}

function refreshMenuEntry() {
    var options = localStorage.options ? JSON.parse(localStorage.options) : {};
    if (options.addContextMenu && !menuEntryId) {

        menuEntryId = chrome.contextMenus.create({
            title: '翻译',
            contexts: ['all'],
            onclick: function(a) {
                var b;
                chrome.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, function(a) {
                    b = a[0]
                    alert('' + JSON.stringify(b));
                    translate.getTranslateManager().attach(b.id);
                });
            }
        });
    }
    if (!options.addContextMenu && menuEntryId) {
        chrome.contextMenus.remove(menuEntryId);
        menuEntryId = null;
    }
}

function init() {
    
    refreshMenuEntry();
}

var options = {};
if (localStorage.options)
    options = JSON.parse(localStorage.options);
if (typeof options.addContextMenu == "undefined") {
    options.addContextMenu = true;
    localStorage.options = JSON.stringify(options);
}

// if (!localStorage.theme)
//     getDefaultTheme(function(theme) {
//         localStorage.theme = theme;
//         init();
//     });
// else
    init();
