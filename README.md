# Home
Custom mod menu for Chrome Dino.

# GoDino
Includes:
- Increase Speed
- Decrease Speed
- Bhop
- Auto Player

Coming up:
- ESP
- Sandbox Horizion Editor (No Obstacles Add Cloud)

# Installation
1) Go to [Chrome Dino](chrome://dino)
2) Press F12 and go to the Console tab
3) Paste the code from [Here](https://github.com/nonumbershere/GoDino-Chrome-Dino/blob/main/godino.min.js) or copy the first version here:
```js
/**
 * Made by Lapide
 * Some code was taken from other websites. I will leave them in here so you can check them out. 
 
 Auto Player Code: https://github.com/danielapushkinsky/t-rex-game-bot <-- Credits to the original author.
*/


var style = document.createElement("style");
style.innerHTML = `.cheatmenu { 
   outline: none;
top: 0px;
    position: absolute;
    width: 1518px;
    height: 108px;
    background: #2e2e2e;
    left: 0px;
    border-radius: 10px;
}
.checkbox_ {
    margin-top: 10px;
    border: 1px solid blue;
    background: #1b1919;
    border-radius: 0px;
    width: 26px;
    height: 26px;
    padding: 0px;
    float: left;
    outline: none;
    cursor: pointer;
    transition: ease 200ms;
}
button.main_button:hover {
   outline: none;
    background: #1a1a1a;
    transition: ease 200ms;
}
button.main_button:active {
   outline: none;
    background: #272727;
}
.main_button .bad-clock button, .captive-portal button, .insecure-form button, .lookalike-url button, .main-frame-blocked button, .neterror button, .offline button, .pdf button, .ssl button, .safe-browsing-billing button {
   outline: none;

    padding: 10px;
    border-radius: 11px;
    color: white;
    background: #222222;
    cursor: pointer;
    padding-left: 28px;
    padding-right: 28px;
    transition: ease 200ms;
    margin: 5px;
    float: left;
}
input[type=checkbox] {
opacity: 1;
}
input {
opacity: 1;
}

.checkmark {
    position: absolute;
    width: 26px;
    height: 33px;
    border-radius: 50%;
    display: block;
    stroke-width: 4px;
    stroke: #0048f6;
    stroke-miterlimit: 10;
    stroke-dashoffset: 0;
    margin: auto;
}
.noselect {
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}
`;
document.body.prepend(style);
var HUD = {
  CheatMenu: document.createElement("div")
}
var Client = {
   clientplayer: Runner.instance_,
   Player: {
      speed: Runner.instance_.currentSpeed,
      IncreaseSpeed: function(by) {
         Runner.instance_.currentSpeed = this.speed + by;
      },
      DecreaseSpeed: function(by) {
         Runner.instance_.currentSpeed = this.speed - by;
      }
   }
}
var num = 0;
var modules = {
 bot: false,
 bhop: false
}
var hudMaker = {
   makeCheckbox: function(text) {
      ++num;
      return `<button style="background:#1b1b1b
    " id="checkbox${num}">${text} [OFF]</button>`;
   }
}
HUD.CheatMenu.className = 'cheatmenu';
HUD.CheatMenu.innerHTML=`<button class="main_button" onclick="Client.Player.IncreaseSpeed(10)">Increase Speed</button><button class="main_button" onclick="Client.Player.DecreaseSpeed(10)">Decrease Speed</button>${hudMaker.makeCheckbox("Bhop")}${hudMaker.makeCheckbox("Auto Player")}`
document.body.append(HUD.CheatMenu);
setInterval(()=>{
  Client.Player.speed = Client.clientplayer.currentSpeed;
},1);
function duck() {
Runner.instance_.tRex.setDuck(true);
}
function endDuck() {
Runner.instance_.tRex.setDuck(false);
}
function setText(id, text) {
   document.getElementById(id).innerText = text;
}
function jump() {
Runner.instance_.tRex.startJump(Runner.instance_.currentSpeed);
}
document.getElementById("checkbox1").addEventListener("click", function() {
  modules.bhop = !modules.bhop;
  if (modules.bhop) {
      document.getElementById("checkbox1").innerText = 'Bhop [ON]'
  } else {document.getElementById("checkbox1").innerText = 'Bhop [OFF]'}
});
document.getElementById("checkbox2").addEventListener("click", function() {
  modules.bot = !modules.bot;
  if (modules.bot) {
      document.getElementById("checkbox2").innerText = 'Auto Player [ON]'
  } else {document.getElementById("checkbox2").innerText = 'Auto Player [OFF]'}

});
function keyDown(e){Podium={};var n=document.createEvent("KeyboardEvent");Object.defineProperty(n,"keyCode",{get:function(){return this.keyCodeVal}}),n.initKeyboardEvent?n.initKeyboardEvent("keydown",!0,!0,document.defaultView,e,e,"","",!1,""):n.initKeyEvent("keydown",!0,!0,document.defaultView,!1,!1,!1,!1,e,0),n.keyCodeVal=e,document.body.dispatchEvent(n)}function keyUp(e){Podium={};var n=document.createEvent("KeyboardEvent");Object.defineProperty(n,"keyCode",{get:function(){return this.keyCodeVal}}),n.initKeyboardEvent?n.initKeyboardEvent("keyup",!0,!0,document.defaultView,e,e,"","",!1,""):n.initKeyEvent("keyup",!0,!0,document.defaultView,!1,!1,!1,!1,e,0),n.keyCodeVal=e,document.body.dispatchEvent(n)}setInterval(function(){if(modules.bot){Runner.instance_.horizon.obstacles.length>0&&(Runner.instance_.horizon.obstacles[0].xPos<20*Runner.instance_.currentSpeed-Runner.instance_.horizon.obstacles[0].width/2&&Runner.instance_.horizon.obstacles[0].yPos>75&&(keyUp(40),keyDown(38)),Runner.instance_.horizon.obstacles[0].xPos<20*Runner.instance_.currentSpeed-Runner.instance_.horizon.obstacles[0].width/2&&Runner.instance_.horizon.obstacles[0].yPos<=75&&keyDown(40))}},5);

setInterval(()=>{if(modules.bhop){jump()}},100);
```
5) Done!
