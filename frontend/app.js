'use strict';

import angular from 'angular';
//import vendorLib from '../vendors/vendorsLib/dist/vendorScript';
/*
* или, если в конфиге добавить resolve.alias, то можно написать удобнее
*/
//import vendorLib from 'vendorScript';

/*
* Должен быть установлен exports-loader, чтобы экспортировать из подключенного модуля
 */
//import vendorLib from 'exports-loader?getModuleInfo!vendorScript';
/*
* а также если в конфиге прописать лоадер, то импорт напишется проще
 */
import vendorLib from 'vendorScript';

alert("Welcome to new angular app!");

let app = angular.module('app', []);

alert(vendorLib());