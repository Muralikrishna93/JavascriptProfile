const user = {
  username: "Sam",
  img: "https://images.pexels.com/photos/15668048/pexels-photo-15668048.jpeg",
  location: "Hyderabad, India",
  bloodGroup: "B+",
  phone: "8074563694"
};

const card = document.querySelector("#profileCard");

card.innerHTML = `
  <img src="${user.img}" alt="ProfilePic">
  <h2> <strong>UserName:</strong>  ${user.username} </h2>
  <div class="info"> <strong>Location:</strong> ${user.location} </div>
  <div class="info"> <strong>Blood Group:</strong> ${user.bloodGroup} </div>
  <div class="info"> <strong>Phone Number:</strong> ${user.phone} </div> 
  <button id="btn"> click me </button>`;


const btn = document.querySelector("#btn");

// btn.addEventListener("click", ()=>{
//   card.style.backgroundColor = "lightblue";
// }
// );

btn.addEventListener("mouseover", ()=>{
  if(card.style.backgroundColor === "lightblue"){
    card.style.backgroundColor = "pink";
  }else{
    card.style.backgroundColor = "lightblue";
  }
}
);
