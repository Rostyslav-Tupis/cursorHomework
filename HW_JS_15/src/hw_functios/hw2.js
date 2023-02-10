export function getSum(conf, f1, f2) {
    let result = 0;
    for (let i = f1; i <= f2; i++) {
      if (conf) {
        result += i % 2 === 0 ? 0 : i;
      } else {
        result += i;
      }
    }
    return result;
  }