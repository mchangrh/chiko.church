var db = firebase.firestore();

countMembers()

var memberCount = 10
 
function countMembers() { // display members
    db.collection("members").doc("count").onSnapshot(function (doc) {
        document.getElementById("member-count").innerHTML = 'Current Members: '+ memberCount;
    });
}

function join() { // join
    var memberCount = db.collection('members').doc('count');
    memberCount.update({
        memberCount: firebase.firestore.FieldValue.increment(1)
    });
    document.getElementById("join-message").innerHTML = 'Welcome to the Church of Chiko';
}