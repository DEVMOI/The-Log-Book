import Vue from 'nativescript-vue';

import App from './App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(App)])
    

}).$start();
