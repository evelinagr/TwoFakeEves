let answer1 = parseInt(this.prompt("Please enter the 1st number"));
console.log(answer1);

let operator = this.prompt("Please enter the operator");
console.log(operator);

let answer2 = parseInt(this.prompt("Please enter the 2nd number"));
console.log(answer2);


if (operator == "+")
    this.alert(answer1 + answer2);
else if (operator == "-")
    this.alert(answer1 - answer2);
else if (operator == "*")
    this.alert(answer1 * answer2);
else if (operator == "/" || ":")
    this.alert(answer1 / answer2);
else
    this.alert("error");