export default function uploadPhoto(filename) {
  const send = Promise.reject(new Error(`${filename} cannot be processed`));
  return send;
}
