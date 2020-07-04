var db = firebase.firestore();

countMembers()

function countMembers() { // display members
    db.collection("members").doc("count").onSnapshot(function (doc) {
        document.getElementById("member-count").innerHTML = 'Current Members: '+ doc.data().memberCount;
    });
}

function join() { // join
    var memberCount = db.collection('members').doc('count');
    memberCount.update({
        memberCount: firebase.firestore.FieldValue.increment(1)
    });
    document.getElementById("join-message").innerHTML = 'Welcome to the Church of Chiko';
}