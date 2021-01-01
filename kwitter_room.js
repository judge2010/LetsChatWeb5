
  var firebaseConfig = {
    apiKey: "AIzaSyCWHD3gSeIJ0DnWnwdV0uK1oV1JJDDAD6M",
    authDomain: "kwitter-2353a.firebaseapp.com",
    databaseURL: "https://kwitter-2353a-default-rtdb.firebaseio.com",
    projectId: "kwitter-2353a",
    storageBucket: "kwitter-2353a.appspot.com",
    messagingSenderId: "739827289988",
    appId: "1:739827289988:web:021a6d8adb8046998d97d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var username = localStorage.getItem("username");
  function  Logout(){
   localStorage.removeItem("username");
   window.location = "index.html"
  }
  document.getElementById("welcome").innerHTML="Welcome " + username +" !"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       var row = "<div class='room_name' id='"+ Room_names + "' onclick = 'redirect_to_room_name(this.id)'>" + Room_names + "</div>";
       document.getElementById("output").innerHTML += row + "<hr>";
      //End code
      });});}
getData();

function add_room(){
 var room_name = document.getElementById("addRoomName").value;
 firebase.database().ref("/").child(room_name).update({
   purpose:"addingRoomName"
 });
 localStorage.setItem("roomName",room_name);
 window.location="kwitter_room.html";
};
function redirect_to_room_name(name){
 console.log(name);
 localStorage.setItem("roomName",name);
 window.location = "kwitter_page.html"

}