window.jQuery = require('jquery')
window.$ = window.jQuery
require('@chenfengyuan/datepicker')

$(document).ready(function () {
  $('.js-datepicker').datepicker({
    format: 'yyyy/mm',
    date: new Date(),
    autoHide: true
  });
})