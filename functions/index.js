// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
});

exports.firestoreEmail = functions.firestore
.document('users/{userId}')
.onCreate(event => {
    //const userId = event.params.userId;
    // console.log(event.params);
    console.log(event);
    const db=admin.firestore();
    return db.collection('users').doc('GXOw2sRCqXNeR0qr3ZOb')
    .get()
    .then(doc => {
        const user = doc.data()
        const msg = {
            // to: user.email,
            to: 'albordignon@gmail.com',
            from: 'albordignon@gmail.com',
            subject: 'Novo parceiro(a)',
            templateId: 'd-fcc6a21e08e04d918bd5814b50a7e22b',
            substitutionWrappers: ['{{', '}}'],
            substitutions: {
                name: 'André' 
            }
        };
        return sgMail.send(msg);
    })
    .then(() => console.log('Message sent.'))
    .catch(err => console.log('Erro', err))
});