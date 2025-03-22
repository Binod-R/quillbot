// ==UserScript==
// @name         Quillbot by Binod Rijal
// @version      3.0
// @description  Unlocks Quillbot Premium. For Educational Purpose Only
// @author       Binod Rijal
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://raw.githubusercontent.com/Binod-R/quillbot/refs/heads/main/script.js
// @run-at       document-start
// @grant        none
// @license      none
// ==/UserScript==

(function() {
    'use strict';

    // How's it going filthy code looker
    ajaxHooker.hook(request => {
        if (request.url.endsWith('get-account-details')) {
            request.response = res => {
                const json = JSON.parse(res.responseText);
                const a = "data" in json ? json.data : json;
                a.profile.accepted_premium_modes_tnc = true;
                a.profile.premium = true;
                res.responseText = JSON.stringify("data" in json ? (json.data = a, json) : a);
            };
        }
    });

    // Add the text and link to bottom right corner
    const linkText = document.createElement('div');
    linkText.textContent = 'Created by Binod Rijal';
    linkText.style.position = 'fixed';
    linkText.style.bottom = '10px';
    linkText.style.right = '10px';
    linkText.style.color = 'white';
    linkText.style.backgroundColor = 'black';
    linkText.style.padding = '5px';
    linkText.style.borderRadius = '5px';
    linkText.style.cursor = 'pointer';
    linkText.style.zIndex = '9999';
    document.body.appendChild(linkText);

    // Redirect when the text is clicked
    linkText.addEventListener('click', () => {
        window.location.href = 'https://binod-rijal.com.np/';
    });
})();
