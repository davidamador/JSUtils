// declare "da" namespace
var da = window.da || {};

!function(){
    // iPad detection
    var ua =        navigator.userAgent;
    da.isiPad =     ua.match(/iPad/i) != null;
    da.isiPod =     ua.match(/iPod/i) != null;
    da.isiPhone =   ua.match(/iPhone/i) != null;
}(da);