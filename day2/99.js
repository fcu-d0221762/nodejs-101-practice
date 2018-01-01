for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        (function (numi, numj) {
            setTimeout(function () {
                console.log(numi + "*" + numj + "=" + numi * numj);
            }, 1000 * (i + 1));
        })(i, j);
    }
}
