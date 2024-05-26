
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

window.onscroll = function() {
    // Set the height to check for
  var appear = height/1.8
  if (window.pageYOffset >= appear) {
    // If more show the element
    document.getElementById("bottomtop").style.opacity = '1'
    document.getElementById("bottomtop").style.pointerEvents = 'all'
  } else {
    // Else hide it
    document.getElementById("bottomtop").style.opacity = '0'
    document.getElementById("bottomtop").style.pointerEvents = 'none'
  }
}