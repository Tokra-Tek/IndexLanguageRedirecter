# Index Language Redirecter

```js
bower install @tokratek/indexLanguageRedirecter --save
```

This small module automatically redirects traffic from a page to a language prefixed version of the page, using localStorage to read the preferred language and callng a redirect to that page ie /index.html=>/en/index.html 

The default langauge is English , ie "en" . This is specifically written to be included only on the index page.

Language setting is assumed to be at location.host + '/language' in the local Storage 