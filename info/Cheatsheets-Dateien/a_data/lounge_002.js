!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.18c4267a4d585909fef7e8cafdbb96c0.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.ce893a7af36d1c9f3570dceb08d3faaa.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.2c6acda0dd869fe148f8552f9d8b63cb.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.daedd146972fc7d8dffd9be34c404865.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.037f55c32651d22255e90738c195e946.js",a.body.appendChild(c)}();