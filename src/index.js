
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.reduce((res, innerArray, index) => {
    const reversedArray = index % 2 != 0 ? innerArray.reverse() : innerArray;
    return [...res, ...reversedArray];
  }, []);
}
