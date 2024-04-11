export default function appendToEachArrayValue(array, appendString) {
  const New = [];
  for (const val of array) {
    New.push(appendString + val);
  }

  return New;
}
