// 함수안에서의 this는 최상위 객체 global과 같다
function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

// 클래스에서의 this는 자기자신을 뜻한다.
class A {
  constructor(num) {
    this.num = num;
  }
  memberF() {
    console.log("---------class-----------");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);

a.memberF();

console.log("--------------");
console.log(this);
// 함수내부, 클래스도 아닌 외부에서의 this는 module.exports와 같다.
console.log(this === module.exports);
