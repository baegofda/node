const path = require("path");

// 운영제체마다 경로표기가 다르다.
// POSIX (Unix: Mac, Linux) : 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // 디렉토리 이름
console.log(__filename); // 파일이름

console.log(path.sep); // 파일경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename)); // 파일 경로에서 파일 이름만 추출할때
console.log(path.basename(__filename, ".js")); // 파일 경로에서 파일 이름에 확장자도 제거하고 추출할때
console.log(path.basename(__dirname)); // 파일 경로에서 디렉토리 이름만 추출할때

// dirname
console.log(path.dirname(__filename)); // 파일 경로에서 파일이름을 제외한 디렉토리 이름들만 추출

// extension
console.log(path.extname(__filename)); // 파일경로에서 확장자만 추출할때

// parse
const parsed = path.parse(__filename); // 경로를 파싱해서 추출할때
console.log(parsed);

const str = path.format(parsed); // 파싱된 경로를 다시 문자열로
console.log(str);

// isAbsolute -> 절대 경로인지 판단
console.log("isAbsolute?", path.isAbsolute(__dirname)); // 절대경로
console.log("isAbsolute?", path.isAbsolute("../")); // 상대경로

// normalize -> 경로를 수정해준다.
console.log(path.normalize("./folder/////sub"));

// join
console.log(__dirname + path.sep + "image"); // 경로에 다른 경로를 추가하고싶을때
console.log(path.join(__dirname, "image")); // 직접 하기보다는 join을 이용하여 쉽게 가능하다
