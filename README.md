### 50R.CN 短网址 node.js SDK
---
[![NPM version](https://img.shields.io/npm/v/url50r.svg?style=flat)](https://www.npmjs.org/package/url50r)
[![Build Status](https://travis-ci.org/wapznw/nodejs_sdk_50r.svg?branch=master)](https://travis-ci.org/wapznw/nodejs_sdk_50r)
[![Coverage Status](https://coveralls.io/repos/github/wapznw/nodejs_sdk_50r/badge.svg?branch=master)](https://coveralls.io/github/wapznw/nodejs_sdk_50r?branch=master)

使用方法

```
npm install url50r --save
```


```javascript

var url50r = require('url50r');

var ak = '57ac3816d9cb467d121dd48f'; // 替换成你自己的 App Key
var longUrl = 'https://www.google.com.hk/search?q=hello';

url50r.setAppKey(ak);
url50r.convert(longUrl).then(function (shortUrl) {
    console.log(shortUrl);
}).catch(function (err) {
    console.error(err);
});

```

[详情请去官网查看](http://50r.cn)


