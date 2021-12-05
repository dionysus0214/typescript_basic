type Mytype = string | number;
let 이름: string = 'kim';
let 이름2: Mytype = 123;
let 결혼했니: boolean = true;
let 이름들: string[] = ['kim', 'park'];
let 오브젝트: { name: string } = { name: 'kim' };

function 함수(x: number): number {
  return x * 2;
}

// tuple
type Member = [number, boolean];
let john: Member = [123, true];

type Members = {
  [key: string] :string, // [key: string]는 모든 오브젝트 속성, 글자로 된 모든 object 속성의 타입은 string
}
let johes: Members = { name: 'kim', age: '12' };

// class
class Person {
  name;
  constructor(name :string){
    this.name = name;
  }
}