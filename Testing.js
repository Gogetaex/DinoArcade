document.addEventListener('keypress', function(e)
 {
   console.log(e);
  if (e.keyCode === 27) {
    e.preventDefault();
    closeModal();
  }
});

window.onclick = function(event) {
  if (event.target == modal) {
      modalCloseFunctionHere()
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
      closeModal();
  }
}
// Get the modal
var modal = document.getElementById('myModal');

// Array of videos
var vidUrls = ["https://www.youtube.com/embed/l_gWDl_f6V8","https://www.youtube.com/embed/ev7M8PycSYs", "https://www.youtube.com/embed/u6dhNTorxuM", "https://www.youtube.com/embed/wC1Lx9JPVi8", "https://www.youtube.com/embed/d41K3wTVrNk", "https://www.youtube.com/embed/LVzrRI688WU", "https://www.youtube.com/embed/ImbhUHhWmSM", "https://www.youtube.com/embed/a7WGH7XKkXI", "https://www.youtube.com/embed/fZ1VAQO4Mno", "https://www.youtube.com/embed/ClXzw3dNBqY", "https://www.youtube.com/embed/nPb6XoJN9KQ", "https://www.youtube.com/embed/HutkoM0_QeI", "https://www.youtube.com/embed/jP0NDgwxSc8", "https://www.youtube.com/embed/SGC1RTIo5sE", "https://www.youtube.com/embed/X22qJmqVE6w", "https://www.youtube.com/embed/HelwPuR2cuk", "https://www.youtube.com/embed/ASVku-48N8Q", "https://www.youtube.com/embed/onxDA2j2c9A", "https://www.youtube.com/embed/xqs6PHI3KsI", "https://www.youtube.com/embed/zuAx-fbIE_A"];

let vidObj = [
  {"title":"Arizona Sunshine", "video":"https://www.youtube.com/embed/l_gWDl_f6V8", "synop":"I could never find the right way to tell you, have you noticed I've been gone, 'cause I left behind the home that you made me but I will carry it along. And it's a long way forward, so trust in me, I'll give them shelter like you've done for me, and I know, I'm not, alone, you'll be watchin' over us until you're gone."},
  {"title":"Bullets and More", "video":"https://www.youtube.com/embed/ev7M8PycSYs", "synop":"Long time no, see I know, what'cha got on your plate today, do you want to run away. We'll make it, no breakin', awake and ready to escape, no stoppin' 'til all the way. Don't count me out, chasin' disaster, I'm goin' faster, free, my feet, I'll be unleashed. Keep ya there, I'll dare ya to come through, in the air, we'll dance like we used to, nanananana, nanananana, ya givin' me a little mania, in a dance, we'll crash down the party, I can taste the race of your heart beat, nananana, nanananana, you're givin' me a little mania.Long time no, see I know, what'cha got on your plate today, do you want to run away. We'll make it, no breakin', awake and ready to escape, no stoppin' 'til all the way. Don't count me out, chasin' disaster, I'm goin' faster, free, my feet, I'll be unleashed. Keep ya there, I'll dare ya to come through, in the air, we'll dance like we used to, nanananana, nanananana, ya givin' me a little mania, in a dance, we'll crash down the party, I can taste the race of your heart beat, nananana, nanananana, you're givin' me a little mania."},
  {"title":"Blasters of the Universe", "video":"https://www.youtube.com/embed/u6dhNTorxuM", "synop":"Welcome to the Jungle, we've got fun and games, we've got everything you want, honey we know the names, we are the people that can find whatever you may need, if you want the money, honey, we've got your disease in the jungle, welcome to the jungle, watch me bring to your knees, knees."},
  {"title":"Crowe: the Drowned Armory", "video":"https://www.youtube.com/embed/wC1Lx9JPVi8", "synop":"Placeholder for Crow"},
  {"title":"The Iota Project", "video":"https://www.youtube.com/embed/d41K3wTVrNk", "synop":"Placeholder for Iota"},
  {"title":"Lightsaber VR", "video":"https://www.youtube.com/embed/LVzrRI688WU", "synop":"Placeholder for Lightsaber"},
  {"title":"Richie's Plank Experience", "video":"https://www.youtube.com/embed/ImbhUHhWmSM", "synop":"Placeholder for Plank"},
  {"title":"Portal Stories", "video":"https://www.youtube.com/embed/a7WGH7XKkXI", "synop":"Placeholder for Portal"},
  {"title":"QuiVR", "video":"https://www.youtube.com/embed/fZ1VAQO4Mno", "synop":"Placeholder for QuiVR"},
  {"title":"Raw Data", "video":"https://www.youtube.com/embed/ClXzw3dNBqY", "synop":"Placeholder for Raw Data"},
  {"title":"Rec Room", "video":"https://www.youtube.com/embed/nPb6XoJN9KQ", "synop":"Placeholder for Rec Room"},
  {"title":"Skyfront", "video":"https://www.youtube.com/embed/HutkoM0_QeI", "synop":"Placeholder for Skyfront"},
  {"title":"Smashbox Arena", "video":"https://www.youtube.com/embed/jP0NDgwxSc8", "synop":"Placeholder for Smashbox Arena"},
  {"title":"Sophie's Guardian", "video":"https://www.youtube.com/embed/SGC1RTIo5sE", "synop":"Placeholder for Sophie's Guardian"},
  {"title":"Sprint Vector", "video":"https://www.youtube.com/embed/X22qJmqVE6w", "synop":"Placeholder for Sprint"},
  {"title":"Surgeon Simulator", "video":"https://www.youtube.com/embed/HelwPuR2cuk", "synop":"Placeholder for Surg"},
  {"title":"The Lab", "video":"https://www.youtube.com/embed/ASVku-48N8Q", "synop":"Placeholder for The Lab"},
  {"title":"Trickster", "video":"https://www.youtube.com/embed/onxDA2j2c9A", "synop":"Placeholder for Trickster"},
  {"title":"Operation Warcade", "video":"https://www.youtube.com/embed/xqs6PHI3KsI", "synop":"Placeholder for Warcade"},
  {"title":"The Wizards", "video":"https://www.youtube.com/embed/zuAx-fbIE_A", "synop":"Placeholder for The Wizards"},
];

function showVideo(x)
{
  modal.innerHTML='<div class="modalPopup"><span class="close" onclick="closeModal()">X</span><div class="content"><div class="infoTitle">'+vidObj[x].title+'</div><div class="vidSyn"><object id="video" width="420" height="315" data="'+vidObj[x].video+'"></object><div class="infoSynop">'+vidObj[x].synop+'</div></div></div></div></div>';
  modal.style.display = "flex";
}


document.getElementById("modal").textContent = 'Arizona Sunshine';
// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("thumbnail");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// var vidObject = document.getElementById("video");
//
//

function closeModal()
{
  modal.style.display ="none";
  modal.innerHTML=null;
}



// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
// var clickable = document.getElementsByClassName("close")[0];
//
// // When the user clicks on <span> (x), close the modal
// clickable.onclick = function() {
//     modal.style.display = "none";
//     vidObject.data="https://www.youtube.com/embed/ASVku-48N8Q";
// }

console.log("TestingLog")
