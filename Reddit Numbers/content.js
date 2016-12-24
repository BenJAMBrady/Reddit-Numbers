// content.js
// by: Benjamin Brady
document.querySelectorAll('[id^=siteTable_t3] > div:not(.stickied):not(.clearleft) > div.entry > p.tagline').forEach((itm, idx) => {var span = document.createElement('span');span.innerHTML = '<span style=\"font-size:20px;font-weight:bold;\">' + (idx + 1) + '</span>';itm.insertBefore(span, itm.firstChild);})﻿