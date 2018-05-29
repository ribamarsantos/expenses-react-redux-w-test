import * as firebase from 'firebase'

  // Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, database as default };

// firebase.database().ref().set({
//     name: 'Ribamar',
//     age: 28,
//     levelStress: 5,
//     job: {
//         title: 'Software developer',
//         company: 'bank system'
//     },
//     location: {
//         city: 'Recife',
//         state: 'PE'
//     }
// })
// const db = firebase.database();

// db.ref('expenses').on('child_changed', snapshot => console.log('changed', snapshot.val()));

// db.ref('expenses').on('value', snapshot => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// db.ref('expenses').push({
//     description: 'gas bill',
//     amount:5000,
//     createdAt: 1234,
//     note:'april/2018'
// });

// db.ref('expenses').push({
//     description: 'energy bill',
//     amount:15000,
//     createdAt: 4232,
//     note:'april/2018'
// });

// db.ref('expenses').push({
//     description: 'water bill',
//     amount:4000,
//     createdAt: 4444,
//     note:'april/2018'
// });
// db.ref().on('value',snapshot =>  console.log(snapshot.child('age').val()));

// firebase.database().ref('age').set(29);
// firebase.database().goOnline();

// firebase.database().ref('atributes').set( {
//     height: 185,
//     weight: 98
// }).then(() => {
//     console.log('atributes saved')
// }).catch((e) => {
//     console.log('pan',e)
// })

// // firebase.database().ref('location/city').set('Winnipeg')
//  firebase.database().ref('atributes').remove(() => console.log('ok '))

//  const db = firebase.database();

//  db.ref().update({
//      levelStress: 9,
//      'location/city': 'Winnipeg',
//      'location/state': 'Manitoba',
//      'job/company':'Skip The Dishes'
//  })

