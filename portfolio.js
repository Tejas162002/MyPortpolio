window.onload = function() {
    var navHeight = document.querySelector('.nav').offsetHeight;
    document.querySelector('.profile').style.height = navHeight + 'px';
};

window.onresize = function() {
    var navHeight = document.querySelector('.nav').offsetHeight;
    document.querySelector('.profile').style.height = navHeight + 'px';
};


