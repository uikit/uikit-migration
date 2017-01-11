// ==UserScript==
// @name         UIkit 3 migration helper
// @namespace    http://getuikit.com/
// @version      0.1
// @description  This extension helps you to migrate your site to UIkit 3. (output in browser console)
// @author       YOOtheme Gmbh
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const MIGRATION_URL = 'https://getuikit.com/migrate.min.js';

    if (window.UIkit && Number(window.UIkit.version.substr(0, 1)) === 3)  {
        var script = document.createElement('script');
        script.setAttribute('src', MIGRATION_URL);
        document.body.appendChild(script);
    }
})();