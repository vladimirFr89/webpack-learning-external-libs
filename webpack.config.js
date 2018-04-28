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
        }],

        noParse: /angular\/angular\.js/

    },

    /*
    * для подключения библиотек, которых не установлено через npm
    * !!!ключ должен совпадать со значением в require!!!
     */
    externals: [{
        jquery: '$'
    }]
};