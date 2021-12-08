type Mytype = string | number;
let 이름: string = 'kim';
let 이름2: Mytype = 123;
let 결혼했니: boolean = true;
let 이름들: string[] = ['kim', 'park'];
let 오브젝트: { name: string } = { name: 'kim' };

// union
let 회원: number | string = 12;
let 어레이: (number | string)[] = [1,'2',3]
let 오브젝트2: { data : (number | string) } = { data : '123' }
// 회원 + 1; 안됨(typescript는 엄격하므로 string+1, number+1만 가능하고 union은 안됨)

// any: 모든 자료형 허용, 타입 실드 해제 문법
let 이름3: any;
이름3 = 123;
이름3 = [];

// unknown: 모든 자료형 허용, any 보다 안전
let 이름4: unknown;
이름4 = 123;

// tuple
type Member = [number, boolean];
let john: Member = [123, true];

type Members = {
  [key: string] :string, // [key: string]는 모든 오브젝트 속성, 글자로 된 모든 object 속성의 타입은 string
}
let johes: Members = { name: 'kim', age: '12' };