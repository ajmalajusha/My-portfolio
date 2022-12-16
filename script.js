var bodyElm=document.getElementById("mybody");
var sideElm=document.getElementById("sideBar");
var changeThemeElm=document.getElementById("changeTheme");
function randomColor(){
  return Math.floor(Math.random()*365)
}

setInterval(function(){
changeThemeElm.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`
},2000)

 function changeTheme(){  
  bodyElm.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
  sideElm.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
 }

function downloadCv(){
  window.open("https://docs.google.com/document/d/1D83zUSCVai2iMf59HwN9eKiU-mUSjr3i/edit?usp=share_link&ouid=103473137939873937750&rtpof=true&sd=true")
}