let menu = document.querySelector('#menu_bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
var downloadLink = document.getElementById('Download-link');
downloadLink.addEventListener('click', function() {
  var url = window.location.href;
  var filename = document.title + '.html';
  var link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});