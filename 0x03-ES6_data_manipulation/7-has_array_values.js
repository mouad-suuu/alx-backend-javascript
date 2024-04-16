export default function hasValuesFromArray(Set, array) {
  return array.every((item) => Set.has(item));
}
