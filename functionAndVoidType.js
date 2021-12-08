function 함수(x) {
    return x * 2;
}
함수(10);
function 함수2(x) {
    1 + 1;
}
함수2(5); // 타입 지정된 파라미터 필수
function 함수3(x) {
    1 + 1;
}
// 변수?: number는 변수: number|undefined와 같음
// class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
