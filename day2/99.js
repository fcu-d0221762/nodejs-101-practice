for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        process.stdout.write(i + "*" + j + "=" + i * j);
    }
    process.stdout.write("\n");
}
