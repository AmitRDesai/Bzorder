var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyAeaih3MuZwomQ2VUbVI3rOiYV9RVNd0P0",
      authDomain: "bzorder07.firebaseio.com",
      databaseURL: 'bzorder07.firebaseio.com'
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
