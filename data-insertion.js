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

let ids = [];

for(let i=0; i<10;i++){
    rootRef.child('vendors').push({
        "name": "vendor " + i,
        "description": "vendor "+ i +" description",
        "loaction": 'abc' + i,
        "category_id": i % 4,
        "image": "defualt-vendor.jpg"
    });
}

rootRef.child('vendors').once('value').then((data)=>
{
    let vendors = data.val();
    let ids = Object.keys(vendors);
    for(let i=0; i<25;i++){
        rootRef.child('items').push({
            "name": "Item " + i,
            "description": "Item "+ i +" description",
            "price": 10 + i,
            "vendor_id": ids[i % ids.length],
            "image": "defualt-item.jpg"
        });
    }
});
