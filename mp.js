let valuePilihan = 0 ;
let templates = [
    '<img src="../website code/template1.png" alt="" class="">',
    '<img src="../website code/template2.png" alt="" class="">',
    '<img src="../website code/template3.png" alt="" class="">',
    '<img src="../website code/template4.png" alt="" class="">',
    '<img src="../website code/template5.png" alt="" class="">',
    '<img src="../website code/template6.png" alt="" class="">',
];


let templates2 = [
    '<img src="../website code/template1.png" alt="" class="">',
    '<img src="../website code/template2.png" alt="" class="">',
    '<img src="../website code/template3.png" alt="" class="">',
    '<img src="../website code/template4.png" alt="" class="">',
    '<img src="../website code/template5.png" alt="" class="">',
    '<img src="../website code/template6.png" alt="" class="">',
];

function writeToContentEditor (indexOfTemplate) {
    document.getElementById("editor-content")
        .innerHTML = templates[indexOfTemplate];
}

function ChooseTemplate () {
    let pertanyaan = "Choose Template: (1-" + templates.length + ")";

    let pilihan = prompt(pertanyaan);
    if (pilihan < 1 || pilihan > templates.length) {
        alert("Out of range");
    } else {
        // writeToContentEditor(pilihan - 1);
        valuePilihan = pilihan;
        tampilkanTemplate();
    }
}

function tampilkanTemplate(){
    

    if(valuePilihan == 1){
        var str="";
        for(var i=0;i<templates.length;i++){
            str+=templates[i];
        }
        document.getElementById("templateList").innerHTML=str;
    }else if(valuePilihan == 2){
        var str="";
        for(var i=0;i<templates2.length;i++){
            str+=templates2[i];
        }
        document.getElementById("templateList").innerHTML=str;
    }
}

tampilkanTemplate();


//2
// function changeImage() {
//     if (document.getElementById("t1").src == "" ) 
//     {
//         document.getElementById("imgClickAndChange").src = "template2.png";
//     }
//     else if(document.getElementById("imgClickAndChange").src == "/website code/template1.png") 
//     {
//         document.getElementById("imgClickAndChange").src = "../website code/template2.png";
//     }
// }



//canvas
var canvas = document.getElementById("canvas");
canvas.width = 1067;
canvas.height = 600;

var context = canvas.getContext("2d");
let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);


let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

//coba coba
let t =0;


//let draggable
let counter = 0;

let restore_array = [];
let index = -1;
function change_color(element){
    draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event){
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
                    event.clientY - canvas.offsetTop);
    event.preventDefault();
    
}

function draw(event){
    if(is_drawing){
        context.lineTo(event.clientX - canvas.offsetLeft,
                        event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
}

function stop(event){
    if(is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();

    if(event.type !='mouseout'){
        restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
    
}

function clear_canvas(){
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);


    restore_array = [];
    index = -1;
    
    if(t==1){
        changeImage();
    }else if(t==2){
        changeImage2();
    }else if(t==3){
        changeImage3();
    }else if(t==4){
        changeImage4();
    }else if(t==5){
        changeImage5();
    }else if(t==6){
        changeImage6();
    }else if(t==7){
      changeImage7();
    }else if(t==8){
        changeImage8();
    }else if(t==9){
        changeImage9();
    }else if(t==10){
        changeImage10();
    }else if(t==11){
        changeImage11();
    }else if(t==12){
      changeImage12();
    }else if(t==13){
        changeImage13();
    }else if(t==14){
        changeImage14();
    }else if(t==15){
        changeImage15();
    }else if(t==16){
        changeImage16();
    }
}

//img in canvas 
function changeImage() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("t1");
    ctx.drawImage(img, 1, 1);
    t=1;
    
};

function changeImage2() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("t2");
    ctx.drawImage(img, 1, 1);
    t=2;
  
};

function changeImage3() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("t3");
    ctx.drawImage(img, 1, 1);
    t=3;
};

function changeImage4() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("t4");
    ctx.drawImage(img, 1, 1);
    t=4;
};

function changeImage5() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("t5");
    ctx.drawImage(img, 1, 1);
    t=5;
};

function changeImage6() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("t6");
    ctx.drawImage(img, 1, 1);
    t=6;
};

function changeImage7() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t7");
  ctx.drawImage(img, 1, 1);
  t=7;
  
};

function changeImage8() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t8");
  ctx.drawImage(img, 1, 1);
  t=8;

};

function changeImage9() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t9");
  ctx.drawImage(img, 1, 1);
  t=9;
};

function changeImage10() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t10");
  ctx.drawImage(img, 1, 1);
  t=10;
};

function changeImage11() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t11");
  ctx.drawImage(img, 1, 1);
  t=11;
};

function changeImage12() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t12");
  ctx.drawImage(img, 1, 1);
  t=12;
};
function changeImage13() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t13");
  ctx.drawImage(img, 1, 1);
  t=13;
  
};

function changeImage14() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t14");
  ctx.drawImage(img, 1, 1);
  t=14;

};

function changeImage15() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t15");
  ctx.drawImage(img, 1, 1);
  t=15;
};

function changeImage16() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("t16");
  ctx.drawImage(img, 1, 1);
  t=16;
};

//  //upload image
//  window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             }
  
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
//   });

//Dragable div
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"));



// let templates = [
//     '<h1>t1</h1><img src="../website code/template1.png" alt="" class="">',
//     '<h2>t2</h2><img src="../website code/template2.png" alt="" class="">',
//     '<h3>t3</h3><img src="../website code/template3.png" alt="" class="">',
//     '<h4>t4</h4><img src="../website code/template4.png" alt="" class="">',
//     '<h5>t5</h5><img src="../website code/template5.png" alt="" class="">',
//     '<h6>t6</h6><img src="../website code/template6.png" alt="" class="">',
// ];

function createDiv(){
    
      let newDiv = document.createElement('div');
      newDiv.setAttribute('id', "mydiv"+counter);
      newDiv.setAttribute('class', "bisa-pindah");
      newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/1.png"></div>';
    
    counter++;
    document.body.append(newDiv);
    dragElement(newDiv);
    change_text();
}

function createDiv2(){
    
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', "mydiv"+counter);
  newDiv.setAttribute('class', "bisa-pindah");
  newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/2.png"></div>';

  counter++;
  document.body.append(newDiv);
  dragElement(newDiv);
  change_text();
}


function createDiv3(){
    
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', "mydiv"+counter);
  newDiv.setAttribute('class', "bisa-pindah");
  newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/3.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
}

function createDiv4(){
    
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', "mydiv"+counter);
  newDiv.setAttribute('class', "bisa-pindah");
  newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/4.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}

function createDiv5(){
    
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', "mydiv"+counter);
  newDiv.setAttribute('class', "bisa-pindah");
  newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/5.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}


function createDiv6(){
    
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', "mydiv"+counter);
  newDiv.setAttribute('class', "bisa-pindah");
  newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/6.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}

//for poeple
function createDiv11(){
    
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', "mydiv"+counter);
  newDiv.setAttribute('class', "bisa-pindah");
  newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/People/1.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}

function createDiv12(){

let newDiv = document.createElement('div');
newDiv.setAttribute('id', "mydiv"+counter);
newDiv.setAttribute('class', "bisa-pindah");
newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/People/2.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}


function createDiv13(){

let newDiv = document.createElement('div');
newDiv.setAttribute('id', "mydiv"+counter);
newDiv.setAttribute('class', "bisa-pindah");
newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/People/3.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}

function createDiv14(){

let newDiv = document.createElement('div');
newDiv.setAttribute('id', "mydiv"+counter);
newDiv.setAttribute('class', "bisa-pindah");
newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/People/4.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}

function createDiv15(){

let newDiv = document.createElement('div');
newDiv.setAttribute('id', "mydiv"+counter);
newDiv.setAttribute('class', "bisa-pindah");
newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/People/5.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}


function createDiv16(){

let newDiv = document.createElement('div');
newDiv.setAttribute('id', "mydiv"+counter);
newDiv.setAttribute('class', "bisa-pindah");
newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/People/6.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// filterable element
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//untuk active class
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//for name
// var input;
// function goToHome() {
//   input = document.getElementById("userInput").value;
//   location.href="mpf.html";
//   input.innerHTML = "ML";
//   var element = document.getElementById("id01");
//   element.innerHTML = "New Heading";
  
// }

// function goToHome2() {
//   input = document.getElementById("userInput").value;
//   location.href="mpf.html";
//   input.innerHTML = "ML";
//   var element = document.getElementById("id01");
//   element.innerHTML = "New Heading";
// }

// window.onload = function(){
//   console.log("test");
//   document.getElementById("myButton2").onclick = function () {
//     input = document.getElementById("userInput").value;
//     window.location.href = "mpf.html";
//   };
// };

// window.onload = function(){
//   var element = document.getElementById("id01");
//   element.innerHTML = "New Heading";
// };

//change text
function change_text(){
  document.getElementById("demo").innerHTML = "You can get the asset below";
}


function createText(){
    
  let newDiv = document.createElement('input');
  newDiv.setAttribute('type', "text");
  newDiv.setAttribute('class', "bisa-pindah");
  // newDiv.innerHTML = '<div><img width="60" height="60" src="../website code/iconForPresent/1.png"></div>';

counter++;
document.body.append(newDiv);
dragElement(newDiv);
change_text();
}


//text di canvas
// var mouseX= 0;
// var mouseY = 0;
// var startingX = 0;

// //funtion di canvas kalau di klik
// canvas2.addEventListener("click", function(e){
//   mouseX = e.pageX - canvas2.offsetLeft;
//   mouseY = e.pageY - canvas2.offsetTop;
//   startingX = mouseX;

//   return false;
// }, false);

// document.addEventListener("keydown", function(e){

//   // mouseX = e.pageX - canvas.offsetLeft;
//   // mouseY = e.pageY - canvas.offsetTop;
//   // startingX = mouseX;

//   context.font = "16px Arial";

//   if(e.keyCode === 13){
//     //enter
//     mouseX = startingX;
//     mouseY += 20; 
//   } else  {
//     context.fillText(e.key, mouseX, mouseY);

//     mouseX += context.measureText(e.key).width;
//   }
 
// }, false);

//text in canvas
// var canvas2 = document.getElementById("canvas2");
//         var context = canvas2.getContext("2d");
//         canvas2.width = 300;
// canvas2.height = 300;

//     var mouseX= 0;
// var mouseY = 0;
// var startingX = 0;

// canvas2.addEventListener("click", function(e){
//   mouseX = e.pageX - canvas2.offsetLeft;
//   mouseY = e.pageY - canvas2.offsetTop;
//   startingX = mouseX;

//   return false;
// }, false);

// canvas2.addEventListener("keydown", function(e){
//   context.font = "16px Arial";


//   if(e.keyCode === 13){
//     //enter
//     mouseX = startingX;
//     mouseY += 20; 
//   } else  {
//     context.fillText(e.key, mouseX, mouseY);

//     mouseX += context.measureText(e.key).width;
//   }
//   // saveState();
//   recentWords.push(e.key);


// }, false);