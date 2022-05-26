var firebaseConfig = {
    apiKey: "AIzaSyCwCFGHhWEHXZTph5d59kLe0QCsNNsTfag",
    authDomain: "marsa-7ed3c.firebaseapp.com",
    databaseURL: "https://marsa-7ed3c-default-rtdb.firebaseio.com",
    projectId: "marsa-7ed3c",
    storageBucket: "marsa-7ed3c.appspot.com",
    messagingSenderId: "1029563668895",
    appId: "1:1029563668895:web:cb60dd9822f71b083705aa"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location="kwitter.html";
}
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}