import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

export const yada = functions.https.onCall(() => {
  return { time: new Date().getTime() };
});
