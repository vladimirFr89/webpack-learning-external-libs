'use strict';

//для подключения JQuery используем
/*
* Будет ошибка, если в конфиг не добавить externals, либо пока не установить jquery через npm*/
let $ = require('jquery');

$(function() {
    console.log( "ready!" );
    alert('Welcome to webpack learning with using external libs!');
});