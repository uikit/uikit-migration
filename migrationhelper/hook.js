
// inject and remove script to detect UIkit version
// runs on 'document_idle' to make sure document has been loaded and to have the least performance impact
const script = document.createElement('script');
script.textContent = `;(function (window) {
    if (window.UIkit && Number(window.UIkit.version.substr(0, 1)) === 3) {
        document.querySelector('html').dataset.uk_version = window.UIkit.version;
    }
})(window)`;
document.documentElement.appendChild(script);
script.parentNode.removeChild(script);

//trigger loading in background.js
chrome.runtime.sendMessage({});
