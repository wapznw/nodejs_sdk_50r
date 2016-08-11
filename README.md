### 50R.CN 短网址 node.js SDK

使用方法

```
npm install url50r
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


