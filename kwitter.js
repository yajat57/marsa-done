function adduser(){
    if(document.getElementById("user_name")!=""){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location="kwitter_room.html";
    }
    
   else
   {
       document.getElementById("user_name").value="please add a username";
   }
}