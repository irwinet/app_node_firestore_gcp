const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('Task/sampleTask1');

  // Enter new data into the document.
  await document.set({
    creado: new Date(),
    description: 'Liverpool 7 - MUN: 0',
    done: true,
  });
  console.log('Entered new data into the document');

//   // Update an existing document.
//   await document.update({
//     body: 'My first Firestore app',
//   });
//   console.log('Updated an existing document');

//   // Read the document.
//   const doc = await document.get();
//   console.log('Read the document');

//   // Delete the document.
//   await document.delete();
//   console.log('Deleted the document');
}
quickstart();