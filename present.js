
var to = 'Em!';
var gift_url = 'http://nodemy.vn';
var gift_image_url = 'pic2.png';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

  var _giftLink,
      _giftImg;


  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);



  nametag.innerText = to;
}

init();

