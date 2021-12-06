var 이름 = 'kim';
var 이름2 = 123;
var 결혼했니 = true;
var 이름들 = ['kim', 'park'];
var 오브젝트 = { name: 'kim' };
function 함수(x) {
    return x * 2;
}
// union
var 회원 = 12;
var 어레이 = [1, '2', 3];
var 오브젝트2 = { data: '123' };
// any: 모든 자료형 허용, 타입 실드 해제 문법
var 이름3;
이름3 = 123;
이름3 = [];
// unknown: 모든 자료형 허용, any 보다 안전
var 이름4;
이름4 = 123;
var john = [123, true];
var johes = { name: 'kim', age: '12' };
// class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
