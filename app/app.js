import Vue from 'nativescript-vue';

import ListApp from './components/ListApp';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(ListApp)])
    

}).$start();
