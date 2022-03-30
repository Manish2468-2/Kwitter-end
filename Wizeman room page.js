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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

  }

  function send() {
    msg=document.getElementById("msg").Value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg")="";  
  };

  function getdata(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          childData=childSnapshot().val();
          if (childKey!="purpose"){
              firebase_message_id=childKey;
              message_data=childData;
              console.log(firebase_message_id);
              console.log(message_data);
              name=message_data['name'];
              message=message_data['message'];
              like=message_data['like'];
              name_with_tag="<h3>"+ name + "<img class'user_tick'src='tick.png'></h3>";
              message_with_tag="<h3 class='message_h4'>"+ message + "</h3>";
              like_button="<button class='btn btn-primary' id="+ firebase_message_id +" value="+ like +" onclick'update_like(this.id)'"
              span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +" </span></button><hr>"
              row=name_with_tag+message_with_tag+like_button+span_with_tag
              document.getElementById("output").innerHTML+=row;
          }});
      
      });}
 