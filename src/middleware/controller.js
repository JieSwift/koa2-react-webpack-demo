const fs = require('fs');

let path = require('path');
let SRC_PATH = path.resolve(__dirname,'../../src');

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var src = url.substring(4);
            router.get(src, mapping[url]);
            console.log(`register URL mapping: GET ${src}`);
        } else if (url.startsWith('POST ')) {
            var src = url.substring(5);
            router.post(src, mapping[url]);
            console.log(`register URL mapping: POST ${src}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router,dir) {
    var files = fs.readdirSync(SRC_PATH + '/' +dir);
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(SRC_PATH + '\\' +dir + '\\' + f);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'routes', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};
