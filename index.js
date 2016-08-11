/**
 * Created by wdj on 16/8/11.
 * index
 */
var http = require('http');
var url = require('url');
var Promise = require('promise');

var url50r = {
    ak: '',

    setAppKey: function (ak) {
        this.ak = ak;
        return this;
    },

    convert: function (url) {
        var reqUrl = 'http://50r.cn/urls/add.json?' + ( this.ak ? 'ak=' + this.ak + '&' : '') + 'url=' + encodeURIComponent(url);
        
        return new Promise(function (resolve, reject) {
            url50r.httpRequest(reqUrl).then(function (data) {
                if(typeof data === 'string'){
                    data = JSON.parse(data);
                    if(data.error){
                        reject(Error(data.error));
                    }else{
                        resolve(data.url);
                    }
                }else{
                    reject(Error(data));
                }
            }).catch(reject);
        })
    },
    
    httpRequest: function (reqUrl) {
        var uri = url.parse(reqUrl);

        var httpOpt = {
            host: uri.host,
            port: uri.port,
            path: uri.path
        };
        
        return new Promise(function (resolve, reject) {
            var req = http.request(httpOpt, function (res) {
                if(typeof res.setEncoding === 'function'){
                    res.setEncoding('utf8');
                }
                var chunks = [];
                res.on('data', function(chunk){
                    chunks.push(chunk);
                });
                res.on('end', function(){
                    resolve(chunks.join(''));
                });
                res.on('error', function(err){
                    reject(err);
                });
            });

            req.on('error', function (err) {
                reject(err);
            });

            req.end();
        })
    }
};

module.exports = url50r;
