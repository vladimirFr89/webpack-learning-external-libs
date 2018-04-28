module.exports = {

    //содержит абсолютный путь для директории frontend
    context: __dirname + "/frontend",

    entry: {
        app: './app'
    },

    output:{
        path: __dirname + '/public',
        filename: 'app.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            include: /(frontend)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },{//лоадер будет добавлять module.exports = getModuleInfo в файл vendorScript.js
            test: /vendorScript\.js$/,
            use: 'exports-loader?getModuleInfo'
        }],

        noParse: /angular\/angular\.js/

    },

    resolve: {
        alias: {
            vendorScript: __dirname + '/vendors/vendorsLib/dist/vendorScript'
        }
    },

    /*
    * для подключения библиотек, которых не установлено через npm
    * !!!ключ должен совпадать со значением в require!!!
     */
    externals: [{
        jquery: '$'
    }]
};