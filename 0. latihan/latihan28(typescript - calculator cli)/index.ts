import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter operator (+ or - or * or /):\n");
  const secondStr: string = question("Enter second number:\n");

  const firstNum: number | boolean = checkNumber(firstStr);
  const secondNum: number | boolean = checkNumber(secondStr);

  if (!firstNum || !secondNum) {
    console.log("INVALID NUMBER\n");
    return main();
  }

  const result = calculate(
    firstNum as number,
    operator as Operator,
    secondNum as number
  );

  console.log(result);
}

function calculate(first: number, operator: Operator, second: number) {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default: {
      console.log(operator + " IS NOT VALID OPERATOR\n");
      return main();
    }
  }
}

function checkNumber(str: string): number | boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);

  return isNum ? maybeNum : isNum;
}

main();
