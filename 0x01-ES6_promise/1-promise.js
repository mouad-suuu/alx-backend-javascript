export default function getFullResponseFromAPI(success) {
  return new Promise((done, done2) => {
    if (success) {
      done({
        status: 200,
        body: 'Success',
      });
    } else {
      done2(new Error('The fake API is not working currently'));
    }
  });
}
