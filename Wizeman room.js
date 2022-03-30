var firebaseConfig = {
    apiKey: "AIzaSyB_R0QRSVsrnHE2nQycXpSLp1qucBE4-Rw",
    authDomain: "kwitter-4c975.firebaseapp.com",
    databaseURL: "https://kwitter-4c975-default-rtdb.firebaseio.com",
    projectId: "kwitter-4c975",
    storageBucket: "kwitter-4c975.appspot.com",
    messagingSenderId: "1006491691390",
    appId: "1:1006491691390:web:dd8f8e7899384246e3ab2f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME to the website"+user_name;
function add_room()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding_room"
});
localStorage.setItem("room_name",room_name)
window.location="Wizeman room page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirect_to_room_name(this.id)'"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function log_out() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html";
}
function redirect_to_room_name(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="Wizeman room page.html";
}