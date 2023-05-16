Array1 = ["Dieguito", "Anita", "Alexa", "Mouses"];
Array2 = ["Josefina", "Roberta", Array1, "Ana"];
Bucle:
for (let array in Array2) {
    if (array == 2) {
        for (let array of Array1) {
            if ( array == "Dieguito") {
                continue Bucle;
            }
            document.write(array + "<br>")
        }
    }
    else{
        document.write(Array2[array] + "<br>")
    }
}