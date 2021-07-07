// Fixed-size chuck of memory
// arry of integers, byte of data

const buf = Buffer.from("Hi");
console.log(buf); // 유니코드형식으로 보여짐
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]); // 배열로 접근하면 아스키코드로 접근한다.
console.log(buf.toString("utf-8"));

//create
const buf2 = Buffer.alloc(2); // 사이즈가 2개인 버퍼를 만든다 메모리에서 사용가능한 덩어리를 찾아서 덩어리를 초기화 시킨다.
const buf3 = Buffer.allocUnsafe(2); // 초기화를 시키지않는다.
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
