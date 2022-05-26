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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_room.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;



      //End code
});});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="kwitter.js";
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

 