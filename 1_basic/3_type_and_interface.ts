/**
 * Type and Interface
 */

/** 1️⃣ Type : 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다. */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'mael' | 'female'; // 이 두 가지 중 하나만 들어갈 수 있는 타입

const stringVar: NewStringType = 'test';

type IdolType = {
    name: string;
    year: number;
}

const yuJin: { // 콜론 뒤에 오는 것은 타입
    name: string;
    year: number;
} = {
    name: '안유진',
    year: 2002
}

const wonYoung: IdolType = {
    name: '장원영',
    year: 2004
}


/** 2️⃣ Interface */

interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2: IdolInterface = {
    name: '안유진',
    year: 2002
}

interface IdolInterface2{
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolInterface2 = {
    name: '안유진',
    year: 2002
}

interface IdolOptional {
    name: string;
    year?: number;
}

const yuJin4: IdolOptional = {
    name: '안유진',
}

/**
 * 차이점
 * 1. interface는 premitive를 나열할 수 없다. (ex. type NewNumberType = number; 이렇게 못 씀)
 * 2. interface는 기본적으로 객체 형태로 들어가기 때문에 함수, 일반 객체 선언할 수 있다.
 */