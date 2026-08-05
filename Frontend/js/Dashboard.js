const user = JSON.parse(localStorage.getItem("user"));

if(user){

document.getElementById("userName").innerHTML="Welcome, "+user.name;

document.getElementById("userEmail").innerHTML=user.email;

}

const item = JSON.parse(localStorage.getItem("selectedItem"));

if(item){

document.getElementById("item").innerHTML=item.name;

}

document.getElementById("days").innerHTML=localStorage.getItem("bookingDays");

document.getElementById("amount").innerHTML=localStorage.getItem("bookingTotal");

document.getElementById("spent").innerHTML=localStorage.getItem("bookingTotal");

document.getElementById("logoutBtn").addEventListener("click",()=>{

localStorage.removeItem("user");

alert("Logged Out Successfully");

window.location="Login.html";

});