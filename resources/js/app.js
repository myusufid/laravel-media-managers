require('./bootstrap');

window.Vue = require('vue')

// Laravel < v5.7
// require('../vendor/MediaManager/js/manager')
// Laravel > v5.7
require('../assets/vendor/MediaManager/js/manager')

new Vue({
  el: '#app'
})