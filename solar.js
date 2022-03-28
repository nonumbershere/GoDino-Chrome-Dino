var author = "Lapide";

var i = document.createElement('div');
i.innerHTML = `<div id="menu" style="
    z-index: 100000;
    position: absolute;
    border-radius: 22px;
    width: 506px;
    height: 278px;
    background: #161616;
 -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;"><center><img src="https://github.com/nonumbershere/nonumbershere/blob/main/solar-1-62422c8683929.png?raw=true" style="
    width: 307px;
    pointer-events: none;
    margin-top: -39px;
z-index:1;
">
<button style="
    background: #489b5ecc;
    padding: 21px;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    font-size: 18px;
    margin-top:-73px;
    margin-right: 24%;
    border-radius: 8px;
    padding-right: 98px;
    padding-left: 98px;
    pointer-events:all;
z-index:10000;
    transition:0.1s;
" id="btu">inject</button><b style="
    margin-top: 6px;
    color: white;
    font-weight: initial;
    float: left;
    margin-left: 13px;
">v0.0.1</b></center></div>`;
document.body.prepend(i);
dragElement(document.getElementById("menu"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById('btu').addEventListener('mouseover',function() {
    this.style.transform = 'scale(1.1)'
});
document.getElementById('btu').addEventListener('mouseout',function() {
       this.style.transform = ''
});
var simulated = false;
var injected = false;
        function start() {
            if (simulated && !injected) {
        setTimeout(()=>{if (simulated && document.getElementById('menu') && !injected) document.getElementById('btu').innerText = 'injecting.';},0);
        setTimeout(()=>{if (simulated && document.getElementById('menu') && !injected) document.getElementById('btu').innerText = 'injecting..';},1000);
        setTimeout(()=>{if (simulated && document.getElementById('menu') && !injected) document.getElementById('btu').innerText = 'injecting...';},2000);
        setTimeout(()=>{if (simulated && document.getElementById('menu') && !injected) start()},3000);
            } else if (injected) {
                if (document.getElementById('menu') && injected) document.getElementById('btu').innerText = 'injected!'
            }
            }
setInterval(function() {
    start();
}, 100);

function attach() {
    setTimeout(()=>{
    document.getElementById('menu').style.transition = '1s';
    document.getElementById('menu').style.filter = 'opacity(0)'
        
    setTimeout(()=>{
            document.getElementById('menu').remove();
            
        },4000);
    },2000);
    injected = true;
    simulated = false;
}
document.getElementById('btu').addEventListener('click',function() {
    simulated = true;
    attach();
});

var i = ['test', 'test'];
var n = [function() {console.log("Selected!")}, '']

var select = 0;

function get(f) {
    var b = '';
    for (var c = 0; c < i.length; ++c) {
       if (c == f) {b += '[x] '+i[c]+'\n'}else{b+= '[o] '+i[c]+"\n"}
}
}

function godown() {
    if (i.length-1 > select) {
        select += 1;
    }
        get(select);
}

function goup() {
    if (!select == 0) {
        select -= 1
    };
        get(select);
}
function sel() {
    if (n[select] && n[select] instanceof Function) n[select]();
}
get(select);
document.onkeydown=function(e) {
   /* if (e.key == 'ArrowUp') {
      goup();
    }
    if (e.key == 'ArrowDown') {
        godown();
    }
    if (e.key == 'Enter') {
       sel();
    }
*/
}
