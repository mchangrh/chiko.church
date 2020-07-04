// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyA9hs3jO0zXGNX6m4iZ-dFbPbADtZEkqQ4",
    authDomain: "church-chiko.firebaseapp.com",
    projectId: "church-chiko",
});

var db = firebase.firestore();

// view
countMembers()
// display members
function countMembers() {
    db.collection("members").doc("count")
        .onSnapshot(function (doc) {
            document.getElementById("member-count").innerHTML = `Current Members: ${doc.data().memberCount}`;
            return doc.data().memberCount;
        });
}

// join
function join() {
    var memberCount = db.collection('members').doc('count');
    memberCount.update({
        memberCount: firebase.firestore.FieldValue.increment(1)
    });
    document.getElementById("join-message").innerHTML = 'Welcome to the Church of Chiko';
}