function showAlert() {
    var answer1 = parseFloat(document.getElementById("answer1").value.replace(",", "."));
    var answer2 = parseFloat(document.getElementById("answer2").value.replace(",", "."));
    var operator = document.getElementById("operator").value;

    if (operator == "+")
        this.alert(document.getElementById.value = answer1 + answer2);
    else if (operator == "-")
        this.alert(document.getElementById.value = answer1 - answer2);
    else if (operator == "*")
        this.alert(document.getElementById.value = answer1 * answer2);
    else if (operator == "/" || ":")
        this.alert(document.getElementById.value = answer1 / answer2);
    else
        this.alert("Error");
    }