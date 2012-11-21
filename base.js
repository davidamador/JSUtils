(function(window){
    // iPad detection
    var ua =        navigator.userAgent;
    window.isiPad =     ua.match(/iPad/i) != null;
    window.isiPod =     ua.match(/iPod/i) != null;
    window.isiPhone =   ua.match(/iPhone/i) != null;
})(window);