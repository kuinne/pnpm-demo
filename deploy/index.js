import { last } from "lodash-es";
import isOdd from "is-odd";
console.log("is odd", isOdd(2));
console.log("a2");
export default () => {
  return last([3, 2, 1]);
};
