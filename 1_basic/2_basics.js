"use strict";
/**
 * JS에 존재하는 7개의 타입
 */
const stringVar = 'String';
const numberVar = 3;
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 * - any, unknown, never
 */
/** 1️⃣ any : 아무 타입이나 입력할 수 있는 치트키 타입 */
let anyVar;
anyVar = 100;
anyVar = '전개리';
anyVar = true;
// 다른 타입에 any 타입의 값을 할당할 수 있다.
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
/** 2️⃣ unknown : 알 수 없는 타입 */
let unknownType;
unknownType = 100;
unknownType = '전개리';
unknownType = true;
// 다른 타입에 unknown 타입의 값을 할당할 수 없다.
// unknown, any 타입 외의 타입의 변수에는 할당할 수 없다.
// let testNumber2: number = unknownType; (X)
// let testString2: string = unknownType; (X)
// let testBoolean2: boolean = unknownType; (X)
let unknownType2 = unknownType;
let anyType2 = unknownType;
/** 3️⃣ never : 어떤 타입값도 저장되거나 반환되지 않을 때 사용하는 타입 */
// let neverType: never = null; (X)
// let neverType: never = undefined; (X)
// let neverType: never = 'test'; (X)
/**
 * 리스트 타입
 */
const koreanBoyGroup = ['비투비', '세븐틴', '몬스타엑스'];
const booleanList = [true, false, false, true];
