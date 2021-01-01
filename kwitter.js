function login(){
  var user_name = document.getElementById("Login").value;
  localStorage.setItem("username",user_name);
  window.location = "kwitter_room.html";
}