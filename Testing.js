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
  {"title":"Arizona Sunshine", "video":"https://www.youtube.com/embed/l_gWDl_f6V8", "synop":"Built exclusively for VR, Arizona Sunshine puts you in the midst of a zombie apocalypse. Handle weapons with real-life movements, freely explore a post-apocalyptic world, and put your survival skills to the test in VR - putting the undead back to rest is more thrilling than ever before."},
  {"title":"Bullets and More", "video":"https://www.youtube.com/embed/ev7M8PycSYs", "synop":"Jump into an action packed multiplayer experience with up to 12 players and respawns without boring downtime. Featuring more than 40 unique maps and various game modes (BAM Royale, Deathmatch, Team Deathmatch, Capture The Flag, Virus Infection, Gun Game and Classic Deathmatch)."},
  {"title":"Blasters of the Universe", "video":"https://www.youtube.com/embed/u6dhNTorxuM", "synop":"Blasters of the Universe is the first of its kind, bringing the bullet hell genre into first person VR. Intense gameplay is heavily reliant on physical movement, requiring the player to duck, dodge, twist, turn, and maneuver their way through tons of enemies and hundreds of bullets."},
  {"title":"Crowe: the Drowned Armory", "video":"https://www.youtube.com/embed/wC1Lx9JPVi8", "synop":"Welcome to the vibrant and mysterious world of Crowe in VR now updated with a NEW BONUS MODE, Survival Arena! Room scale puzzles, tactical bow & shield combat, damage dealing magical cross-pistols and gorgeous cinematic visuals that will sweep you to an alien world where science fiction meets reality."},
  {"title":"The Iota Project", "video":"https://www.youtube.com/embed/d41K3wTVrNk", "synop":"The IOTA Project is a VR game where you are thrown into the cockpit of a giant mech. Pilot IOTA as you destroy the enemies who have taken over the city using your two giant robot fists and an array of powerful weapons."},
  {"title":"Lightblade VR", "video":"https://www.youtube.com/embed/LVzrRI688WU", "synop":"Lightblade VR is a virtual reality training simulation for self-illumintated plasma blades. This is a childhood dream come true! Get trained by your personal robot and deflect all incoming laser beams!"},
  {"title":"Richie's Plank Experience", "video":"https://www.youtube.com/embed/ImbhUHhWmSM", "synop":"Are you afraid of heights? Take an elevator to Richie's plank that's sits 80 floors above the ground, then dare to walk to the end! Customise the settings to add a physical plank to your playing space! Richie's Plank Experience was made to demonstrate virtual reality to friends and family. It's a short experience which will suck you into the world of VR."},
  {"title":"Portal Stories", "video":"https://www.youtube.com/embed/a7WGH7XKkXI", "synop":"Portal Stories: VR builds on the foundations of the award winning Portal 2 modification Portal Stories: Mel.Portal Stories: VR has a brand new mini story set in the Portal Universe. It features 10 brand new puzzles, specifically designed to work using the 360 degrees room scale that SteamVR offers."},
  {"title":"QuiVR", "video":"https://www.youtube.com/embed/fZ1VAQO4Mno", "synop":"QuiVr is the defining archery experience, made from the ground up for Virtual Reality. Grab your bow, arrows, and some friends to fight the enemy onslaught."},
  {"title":"Raw Data", "video":"https://www.youtube.com/embed/ClXzw3dNBqY", "synop":"Built from the ground up for VR, Raw Data’s action gameplay, intuitive controls, challenging enemies, and sci-fi atmosphere will completely immerse you within the surreal world of Eden Corp. Go solo or team up and become the adrenaline-charged heroes of your own futuristic technothriller."},
  {"title":"Rec Room", "video":"https://www.youtube.com/embed/nPb6XoJN9KQ", "synop":"Welcome to Rec Room, the virtual reality social club where you play active games with friends from all around the world. Customize your appearance, then party up to play multiplayer games like Paintball, 3D Charades, and even co-op adventures. Come and join the fun for free!"},
  {"title":"Skyfront", "video":"https://www.youtube.com/embed/HutkoM0_QeI", "synop":"Skyfront is a fast-paced multiplayer FPS built exclusively for VR. The game launches you into mesmerising zero-G arenas. But not before equipping you with an array of awesome weapons and impressive special abilities."},
  {"title":"Smashbox Arena", "video":"https://www.youtube.com/embed/jP0NDgwxSc8", "synop":"Team-based action game with insane physics-driven power-ups. Shoot, duck behind cover, and coordinate with teammates...all in glorious VR! Play both Singleplayer Story Mode and Online Multiplayer!"},
  {"title":"Sophie's Guardian", "video":"https://www.youtube.com/embed/SGC1RTIo5sE", "synop":"A little girl’s nightmares and fears represented on this VR title will take you to a mysterious room trying to break the scoreboards and playing with other friends locally… using just one VR headset! Attention: This video game is modding friendly."},
  {"title":"Sprint Vector", "video":"https://www.youtube.com/embed/X22qJmqVE6w", "synop":"Welcome to Sprint Vector Championship Intergalactica, where the physical thrill of extreme sports meets the unhinged energy of a zany game show! Run, jump, climb, drift, and fly at extreme velocity as you race up to 8 players and battle obstacles in this frenetic VR adrenaline platformer!"},
  {"title":"Surgeon Simulator", "video":"https://www.youtube.com/embed/HelwPuR2cuk", "synop":"Surgeon Simulator is an over-the-top operation sim, stitching together pitch-black humour with life-saving surgery. Become Dr. Burke, a would-be surgeon with a less than conventional toolkit, as he performs procedures on patients including none other than Donald Trump, himself! ...is that a hammer?"},
  {"title":"The Lab", "video":"https://www.youtube.com/embed/ASVku-48N8Q", "synop":"Welcome to The Lab, a compilation of Valve’s room-scale VR experiments set in a pocket universe within Aperture Science. Fix a robot, defend a castle, adopt a mechanical dog, and more. Still not sold? It’s free!"},
  {"title":"Trickster", "video":"https://www.youtube.com/embed/onxDA2j2c9A", "synop":"A procedurally generated fantasy adventure, starring floating islands, epic loot and a horde of orcs! Try your skills against orcish combat expertise, ancient magic and ragtag airships!"},
  {"title":"Operation Warcade", "video":"https://www.youtube.com/embed/xqs6PHI3KsI", "synop":"Relive the experience of playing the classic war arcade in a totally amazing way, thanks to virtual reality and the innovative immersion system that will make it possible for you to travel inside the video game."},
  {"title":"The Wizards", "video":"https://www.youtube.com/embed/zuAx-fbIE_A", "synop":"Relive the experience of playing the classic war arcade in a totally amazing way, thanks to virtual reality and the innovative immersion system that will make it possible for you to travel inside the video game."},
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
