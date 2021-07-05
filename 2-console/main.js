console.log("logging....");
console.clear();

//log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert
// 앞에 전달된 인자값이 false경우에만 콘솔을 출력하게 한다.
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "juno", age: 27, company: { name: "BAEGOFDA" } };

console.log(student);
console.table(student); // 테이블형식으로 보여준다.
console.dir(student, { showHidden: true, colors: false, depth: 0 }); // 옵션에 따라서 보여지는 결과값을 달리 할 수 있다.

// measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop"); // for 의 성능을 확인할때 사용이 가능하다

// counting
function a() {
  console.count("a function"); // 함수 호출의 카운트가 가능하다.
}

a();
console.countReset("a function"); //호출 카운트를 리셋시킨다
a();

// trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace(); // f3() 라는 함수가 호출되기까지의 이력을 알 수 있음
}

f1();
