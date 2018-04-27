module.exports = {

    //содержит абсолютный путь для директории frontend
    context: __dirname + "/frontend",

    entry: {
        app: './app'
    },

    output:{
        path: __dirname + '/public',
        filename: 'app.js'
    }
};