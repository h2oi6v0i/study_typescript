/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE    : 요청 완료 상태
 * ERROR   : 에러가 생긴 상태
 * LOADING : 로딩 상태
 * INITIAL : 초기 상태
 */

function runWork() {
    let state = "INITIAL";

    try {
        state = "LOADING";
        // 작업을 한다.

        state = "DONE";
    } catch (e) {
        state = "ERROR";
    } finally {
        return state;
    }
}

console.log(runWork() === "DONE"); // true
// 이렇게 하면 틀린 건 아니지만, 오타가 날 가능성이 있음 그래서 아래처럼 변수에 담아서 작업한다.

const doneState = "DONE";
const loadingState = "LOADING";
const errorState = "ERROR";
const initialState = "INITIAL";

function runWork2() {
    let state = initialState;

    try {
        state = loadingState;
        // 작업을 한다.

        state = doneState;
    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}

console.log(runWork2() === doneState); // true
// 이렇게 하면 변수명에서 오타나면 바로 오류 발견 가능하지만, 여기에서 한 단계 더 나아간 게 enum

enum State {
    DONE = "DONE",
    LOADING = "LOADING",
    INITIAL = "INITIAL",
    ERROR = "ERROR", // 이렇게 안 해주면 0~3 순서대로 번호 부여됨
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // 작업을 한다.

        state = State.DONE;
    } catch (e) {
        state = State.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork3() === State.DONE); // true
console.log(runWork3()); // DONE
