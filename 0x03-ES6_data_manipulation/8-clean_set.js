export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const filteredStrings = Array.from(set).reduce((acc, item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      acc.push(item.substring(startString.length));
    }
    return acc;
  }, []);
  return filteredStrings.join('-');
}
