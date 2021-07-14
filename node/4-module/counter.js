let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
// 위에서 module를 사용했을경우엔 module를 참조해서 바로 exports를 사용가능하다
// 하지만 exports 에 다른값을 할당하게되면 module를 참조하지 못하게된다.
exports = {};
exports.increase = increase;
console.log(module);
