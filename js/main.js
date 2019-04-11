var config = {
    animation: {
        enable: true
    },
    controls: {
        toggleLogic: 'or'
    }
};

var mixer = mixitup('#catalog-container', config);

setTimeout( function() {
    document.getElementsByTagName( "input" )[0].click();
}, 1000 );