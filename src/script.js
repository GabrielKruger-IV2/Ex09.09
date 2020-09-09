$("#i1").change(function () {
    if (this.value != "A" && this.value != "a" && this.value !="C" && this.value != "c" && this.value != "G" && this.value != "G" && this.value !="T" && this.value != "t") {
        $("#p1").text("")
        $("#p1").append("Digite uma proteina valida")
    }
    if (this.value == "A" || this.value == "a") {
        $("#p1").text("")
        $("#p1").append("Resultado: U")
    } else if (this.value == "C" || this.value == "c") {
        $("#p1").text("")
        $("#p1").append("Resultado: G")
    } else if (this.value == "G" || this.value == "G") {
        $("#p1").text("")
        $("#p1").append("Resultado: C")
    } else if (this.value == "T" || this.value == "t") {
        $("#p1").text("")
        $("#p1").append("Resultado: A")
    }

})

$("#i2").change(function () {
    if (this.value != "A" && this.value!= "a" && this.value !="C" && this.value != "c" && this.value != "G" && this.value != "G" && this.value != "T" && this.value != "t") {
        $("#p2").text("")
        $("#p2").append("Digite uma proteina valida")
    }
    if (this.value == "A" || this.value == "a") {
        $("#p2").text("")
        $("#p2").append("Resultado: U")
    } else if (this.value == "C" || this.value == "c") {
        $("#p2").text("")
        $("#p2").append("Resultado: G")
    } else if (this.value == "G" || this.value == "G") {
        $("#p2").text("")
        $("#p2").append("Resultado: C")
    } else if (this.value == "T" || this.value == "t") {
        $("#p2").text("")
        $("#p2").append("Resultado: A")
    }

})

$("#i3").change(function () {
    if (this.value != "A" && this.value != "a" && this.value != "C" && this.value !="c" && this.value != "G" && this.value != "G" && this.value != "T" && this.value != "t") {
        $("#p3").text("")
        $("#p3").append("Digite uma proteina valida")
    }
    if (this.value == "A" || this.value == "a") {
        $("#p3").text("")
        $("#p3").append("Resultado: U")
    } else if (this.value == "C" || this.value == "c") {
        $("#p3").text("")
        $("#p3").append("Resultado: G")
    } else if (this.value == "G" || this.value == "G") {
        $("#p3").text("")
        $("#p3").append("Resultado: C")
    } else if (this.value == "T" || this.value == "t") {
        $("#p3").text("")
        $("#p3").append("Resultado: A")
    }

})

$("#i4").change(function () {
    if (this.value != "A" && this.value != "a" && this.value != "C" && this.value!="c" && this.value !="G" && this.value != "G" && this.value != "T" && this.value!= "t") {
        $("#p4").text("")
        $("#p4").append("Digite uma proteina valida")
    }
    if (this.value == "A" || this.value == "a") {
        $("#p4").text("")
        $("#p4").append("Resultado: U")
    } else if (this.value == "C" || this.value == "c") {
        $("#p4").text("")
        $("#p4").append("Resultado: G")
    } else if (this.value == "G" || this.value == "G") {
        $("#p4").text("")
        $("#p4").append("Resultado: C")
    } else if (this.value == "T" || this.value == "t") {
        $("#p4").text("")
        $("#p4").append("Resultado: A")
    }

})