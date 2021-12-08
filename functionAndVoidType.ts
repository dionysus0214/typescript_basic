function 함수(x: number): number {
  return x * 2;
}
함수(10);

function 함수2(x: number): void { // void는 return을 막아줌
  1 + 1;
}
함수2(5); // 타입 지정된 파라미터 필수

function 함수3(x?: number): void { // 파라미터가 옵션일 경우 변수 뒤에 ? 붙임
  1 + 1;
}
// 변수?: number는 변수: number|undefined와 같음

// class
class Person {
  name;
  constructor(name :string){
    this.name = name;
  }
}