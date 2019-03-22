// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Trang'));
console.log(echo(24));
console.log(echo({name: 'Trang', age: 24}));

//Better Generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho('Trang').length);
console.log(betterEcho<number>(24));


//Built-in Generic
const testResults: Array<number> = [1.94, 2.33] 
testResults.push(-3);
// testResults.push('cannot be done';)

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element))
}
printAll<string>(['Apple', 'Banana', 'Cherry']);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Something'));

//Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());