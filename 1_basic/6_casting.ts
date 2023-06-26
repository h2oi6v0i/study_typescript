/**
 * Casting
 *
 * 1. TS에서 Casting을 하면 JS에서는 적용이 안 된다.
 * 2. 실제 맞는 타입이 아니더라도 강제로 그 타입이라고 가정하게 만들 수 있다.
 */

// #1
const codefactory = "code factory";
const testNumber = 3;
console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

// #2
let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number
// 강제로 string이라고 해놨는데 왜 number야? 이게 바로 Casting의 첫 번째 특징(JS에서 적용 X)

// #3
let number = 5;
// console.log((number as any).toUpperCase()); 에러
