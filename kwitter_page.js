function  Logout(){
      localStorage.removeItem("username");
      window.location = "index.html"
     }
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB_3PCVki2QvCe9IxICIRBHg7B2T34fez4",
      authDomain: "let-s-chat-web.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web",
      storageBucket: "let-s-chat-web.appspot.com",
      messagingSenderId: "681408095361",
      appId: "1:681408095361:web:ceffaadc216aa343ec1980"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  var room_name = localStorage.getItem("roomName");
  document.getElementById("DisplayRoomName").innerHTML = room_name;
  var user_name = localStorage.getItem("username");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("Messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         console.log(firebase_message_id);
         message_data = childData;
         name_html=message_data["name"];
         console.log(name_html);
         message_html=message_data["message"];
         console.log(message_html);
         like_html=message_data["like"];
         console.log(like_html);
         Element1 = "<h4>" + name_html + "   <img class='user_tick' src='tick.png'></h4>";
         Element2 = "<h4>" + message_html + "</h4>";
         Element3 = "<button id='"+firebase_message_id+"' onclick='updateLike(this.id)' class='btn btn-warning' value='"+like_html+"' >";
         Element4 = " <span class='glyphicon glyphicon-thumbs-up'></span>  Like " + like_html + "</button><hr>";
         document.getElementById("Messages").innerHTML += Element1 + Element2 + Element3 + Element4;
//Start code

//End code
      } });  }); }
getData();

function send(){
      var message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:message,
         like: 0
      });
      document.getElementById("message").value = "";
}
function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLike = Number(likes)+1;
      console.log(updatedLike);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLike
      });
}