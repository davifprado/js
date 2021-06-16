function kid(AlturaMenor, TaxaMenor, AlturaMaior, TaxaMaior) {
    if (AlturaMenor == AlturaMaior) {
        if (TaxaMenor > TaxaMaior) {
            console.log("A Criança menor ultrapassa a maior em 1 ano")
        } else if (TaxaMaior > TaxaMenor) {
            console.log("A Criança maior ultrapassa a menor em 1 ano")
        } else {
            console.log("As crianas tem a mesma altura e crescimento")
        }
    } else {

    }
}


kid(130, 10, 130, 10)