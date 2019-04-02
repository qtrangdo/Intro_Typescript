"use strict";
// declare var $: any;
// TS does not know what $ is. Declare var is not a good practice
// --> use the .d.ts file && definitivetype (look up)
$('button').click(function () {
    alert('Button was clicked');
});
