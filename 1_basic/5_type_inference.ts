/**
 * Type Inference
 *
 * 타입 추론
 */

let stringType = "string";
let booleanType = true;
let numberType = 10;

booleanType = false;

// booleanType = "false"; (X)

// const를 사용해서 선언하면 더 구체적인 타입 추론이 가능하다.
const constStringType = "const string";
const constBooleanType = true;

/**
 * 📝 Object
 */
let yuJin = {
    name: "안유진",
    age: 2003,
};

const yuJin2 = {
    name: "안유진",
    age: 2003,
};

// 구체적으로 선언되지 않았기 때문에 프로퍼티의 값을 변경할 수 있다.
yuJin2.name = "전개리";
console.log(yuJin2.name);

// 그렇다면 객체에서 각각의 프로퍼티를 구체화된 타입으로 추론되도록 하는 방법은?
// 특정 타입으로 지정하는 캐스팅을 해준다! (as const)
const yuJin3 = {
    name: "안유진" as const,
    age: 2003 as const,
};
// yuJin3.name = "전개리"; (X)

/**
 * 📝 Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];
// numbers.push("6"); (X)

const number = numbers[0]; // const number: number
const nos = numbersAndString[0]; // const nos: string | number
const nos2 = numbersAndString[100]; // const nos2: string | number -> 에러 안 나지만 버그 발생!

/**
 * 📝 Tuple
 */
const twoNumbers = [1, 3] as const;
// twoNumbers[0] = 10; (X)
// twoNumbers.push(100); (X)
const first = twoNumbers[0]; // const first: 1
// const first2 = twoNumbers[100]; 바로 에러남
