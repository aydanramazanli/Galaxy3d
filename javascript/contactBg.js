//okpt("Galaxy Progress Loader");
for (var i = 0; i < 100; i++) {
    var radius = rnd(1600, 3400) / 10
    var modifier = radius / 160
    $('.loader').append(
        '<div class="spinner" style="animation: bar ' +
        4 * modifier +
        's linear infinite; height: ' +
        radius +
        'px; animation-delay: -' +
        rnd(100, 80) / 10 +
        's"></div>'
    )
}

var loaded = 0

function loader() {
    if (rnd(0, 1) == 1) {
        loaded++
        $('.spinner:nth-child(' + Math.floor(loaded / 2.5) + ')').css(
            'height',
            '0px'
        )
        $('.loaded').css('width', loaded + '%')
    }
    if (loader >= 100) {
        clearInterval(runloader)
    }
}
var runloader = setInterval(loader, 50)

function rnd(m, n) {
    m = parseInt(m)
    n = parseInt(n)
    return Math.floor(Math.random() * (n - m + 1)) + m
}