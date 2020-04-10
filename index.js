console.log("conected");

var images = document.getElementsByClassName("img-style");

var leftBtn = document.querySelector(".leftButton");
var rightBtn = document.querySelector(".rightButton");
var stat = 1;

imageArr(stat);
function change(n) {
  stat = stat + n;
  imageArr(stat);
}
rightBtn.addEventListener("click", function (e) {
  e.preventDefault();
  change(-1);
  
});
leftBtn.addEventListener("click", function (e) {
  e.preventDefault();
  change(1);
});

function imageArr(index) {
    if(index >  images.length){
        stat = 1;
    }
    if( index < 1){
        stat = images.length
    }
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[stat-1].style.display = "block";
   
}
// --------------------------------------------------------------------------------------------------
// i, j, index2
//---------------------
// i = j = 0
// index2 = j +1
//---------------------
//i = j = 1
// index2 = j + 1
//---------------------
//i = j = 2
//index2 = j+1
//--------------------
// i = j = 3
//index2  = j + 1
//--------------------
// i = j = 4    // i = j = ArrImage.length-1
// index2 = 0

//-----------------------------------------------------------------
//var i=0;
//var ArrImage=[]
//ArrImage[0]='ArrImage'

/*function chnageimgL(){
  document.screen2.style.background = ArrImage[i]
  if(i < ArrImage.length - 1){
    print{ArrImage[i]}
    i++;
  }
  else{
    i = 0;
  }
}

function changeimgR(){
  if(i < ArrImage.length ){
    print(ArrImage[i-1])
  }
}*/




console.log("connected");
//id
var leftBtn2Id = document.querySelector("#leftBtn2");
var rightBtn2Id = document.querySelector("#rightBtn2");
//class
var toggleButtons2 = document.querySelector(".toggleButtons2");
var leftButton2 = document.querySelector(".leftButton2");
var rightButton2 = document.querySelector(".rightButton2");
var img = document.querySelector(".img-style2");
var screen2 = document.querySelector(".screen2")
var i = j = index2 = 0;
var ArrImage = [];
for (let i = 0; i < 5; i++) {
  ArrImage[i] = document.querySelector(`.img2${i}`);
  console.log(ArrImage[i]);
}
var a = ArrImage.length
//Event Listner
toggleButtons2.addEventListener("click", function (extraInfo) {
  
  while(i == j){
    console.log(`length ${ArrImage.length} index2${index2} i${i}`)
    
    if(extraInfo.target.id == 'leftBtn2'){
      screen2.innerHTML = "";
      
      // console.log(extraInfo.target.id)
      if(i == j){
        if(i == a - 1){
        index2 = 0;
        }
        index2 = j + 1;
        console.log("L click",index2 + 1);
        screen2.insertAdjacentHTML('beforeend',
        `<div class="img2${i} img-style2 translateTop"></div>
        <div class="img2${index2} img-style2 translateTop"></div>`)
        
      }
    }
    
    else if (extraInfo.target.id == "rightBtn2") {
      console.log("R Click");
      if(i == j){
        if(i == a - 1){
        index2 = 0;
        }
        index2 = j + 1;
        console.log("L click",index2 + 1);
        screen2.insertAdjacentHTML('beforeend',
        `<div class="img2${i - 1} img-style2 translateTop"></div>
        <div class="img2${index2 - 1} img-style2 translateTop"></div>`)
        i--;
        index2 --;
        j--;
      }

    } 
    i++;
  }
  j++;
  if(i == ArrImage.length -1 ){
    i = j = 0;
  }
 
});
