const fs = require("fs").promises;

// read a file
fs.readFile("./file.txt", "utf-8")
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); // 파일을 버퍼형식으로 읽는다 -> 엔코딩 유형을 넣게되면 파일을 정상적으로 읽을 수 있다.

// writing a file
fs.writeFile("./file.txt", "goooood") //
  .catch((err) => console.error(err)); // 파일에 글을 내용을 작성한다.

// append
fs.appendFile("./file.txt", "bbbaaaadddd") //
  .catch((err) => console.error(err)); // 파일에 글을 내용뒤에 이어서 작성한다

// copy
fs.copyFile("./file.txt", "./file2.txt") //
  .catch((err) => console.error(err)); // 파일내용을 복사한다.

//folder
fs.mkdir("sub-folder").catch((err) => console.error(err)); //폴더를 생성한다.

fs.readdir("./")
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); // 경로의 파일목록을 가져온다
