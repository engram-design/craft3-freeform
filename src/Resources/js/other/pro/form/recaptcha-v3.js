"use strict";!function(){var e="https://www.google.com/recaptcha/api.js?render={siteKey}",r="{formAnchor}",o=document.querySelector('form[data-id="'.concat(r,'"]'));if(!o)return void console.error('reCAPTCHA could not find form by ID "'.concat(r,'"'));if(!o.freeform)return void console.error("Form is not a Freeform form");var t=!1;if(o.freeform.addOnSubmitCallback(function(){return t?(t=!1,!0):void grecaptcha.ready(function(){grecaptcha.execute("{siteKey}",{action:"{action}"}).then(function(e){for(var r=document.querySelectorAll('*[name="g-recaptcha-response"]'),c=0;c<r.length;c++)r[c].value=e;t=!0,o.freeform.triggerSubmit()})})}),!Freeform.recaptchaV3Script){var c=document.createElement("script");c.src=e,c.async=!0,c.defer=!0,document.body.appendChild(c),Freeform.recaptchaV3Script=c}}();