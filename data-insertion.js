var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyAK3W-9RTSSVJw579ZJaC0F7ZkxJZo7x2Y",
    authDomain: "bzorder01.firebaseapp.com",
    databaseURL: "https://bzorder01.firebaseio.com",
    projectId: "bzorder01",
    storageBucket: "bzorder01.appspot.com",
    messagingSenderId: "1032338270823"
})

let rootRef  = firebase.database().ref();

rootRef.child('categories').set({
    "0": "Food",
    "1": "Bakery Item",
    "2": "Grocey",
    "3": "Sweets"
})

for(let i=0; i<10;i++){
    rootRef.child('items').push({
        "name": "Item" + i,
        "description": "Item "+ i +" description",
        "price": 10 + i,
        "category": i % 4,
        "image": ""
    });
}
