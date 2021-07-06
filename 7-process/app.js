const process = require("process");

console.log(process.execPath); // 노드위치
console.log(process.version); // 버전
console.log(process.pid); // 프로세스아이디
console.log(process.ppid); // 프로세스부모아이디
console.log(process.platform); // 플랫폼정보
console.log(process.env); // 환경변수
console.log(process.uptime()); // 얼마나 실행됬는지
console.log(process.cwd()); // 실행폴더위치
console.log(process.cpuUsage()); // cpu 사용량

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  console.log("nextTick");
}); // task queue에 콜백함수가 등록되어있어도 콜스택이 비어지면  task queue에 이친구를 제일앞에 넣는다.

for (let i = 0; i < 100; i++) {
  console.log(i);
}
