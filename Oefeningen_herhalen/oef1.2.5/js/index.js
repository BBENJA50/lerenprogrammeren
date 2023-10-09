for (let i = 0; i<= 99; i++) {
    if (i < 10) {
        document.write("0" + i + ",");
    } else if (i === 99) {
        document.write(i);
        } else {
            document.write(i + ",");
        }
    }