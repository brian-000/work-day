var currentDay = document.querySelector("#currentDay");
var jumbotron = document.querySelector("#jumbotron");
var timeBlock9 = document.querySelector("#time-block9");
var timeBlock10 = document.querySelector("#time-block10");
var timeBlock11 = document.querySelector("#time-block11");
var timeBlock12 = document.querySelector("#time-block12");
var timeBlock1 = document.querySelector("#time-block1");
var timeBlock2 = document.querySelector("#time-block2");
var timeBlock3 = document.querySelector("#time-block3");
var timeBlock4 = document.querySelector("#time-block4");
var timeBlock5 = document.querySelector("#time-block5");
var hour9 = document.querySelector("#hour9");
var hour10 = document.querySelector("#hour10");
var hour11 = document.querySelector("#hour11");
var hour12 = document.querySelector("#hour12");
var hour1 = document.querySelector("#hour1");
var hour2 = document.querySelector("#hour2");
var hour3 = document.querySelector("#hour3");
var hour4 = document.querySelector("#hour4");
var hour5 = document.querySelector("#hour5");
var saveBtn9 = document.querySelector("#saveBtn9");
var saveBtn10 = document.querySelector("#saveBtn10");
var saveBtn11 = document.querySelector("#saveBtn11");
var saveBtn12 = document.querySelector("#saveBtn12");
var saveBtn1 = document.querySelector("#saveBtn1");
var saveBtn2 = document.querySelector("#saveBtn2");
var saveBtn3 = document.querySelector("#saveBtn3");
var saveBtn4 = document.querySelector("#saveBtn4");
var saveBtn5 = document.querySelector("#saveBtn5");

var pageContentEl = document.querySelector("#page-content");
var textArea9 = document.querySelector("#textArea9");
var textArea10 = document.querySelector("#textArea10");
var textArea11 = document.querySelector("#textArea11");
var textArea12 = document.querySelector("#textArea12");
var textArea1 = document.querySelector("#textArea1");
var textArea2 = document.querySelector("#textArea2");
var textArea3 = document.querySelector("#textArea3");
var textArea4 = document.querySelector("#textArea4");
var textArea5 = document.querySelector("#textArea5");
var d = moment().format();
 var time = new Date;
d = moment().format("dddd, MMMM Do, YYYY");
//var currentHour = d.getHours();
var hours = time.getHours();
var storedNames = JSON.parse(localStorage.getItem("array"));
textArea9.value=storedNames[0];
textArea10.value=storedNames[1];
textArea11.value=storedNames[2];
textArea12.value=storedNames[3];
textArea1.value=storedNames[4];
textArea2.value=storedNames[5];
textArea3.value=storedNames[6];
textArea4.value=storedNames[7];
textArea5.value=storedNames[8];
console.log(storedNames);
currentDay.textContent = d;
jumbotron.appendChild(currentDay);
// //timeBlock.addClass("time-block");
// $(".time-block").hover(function () {
//     $(this).append($("<span> ***</span>"));
// }, function () {
//     $(this).find("span").last().remove();

// });

if((hours + "AM") === hour9.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("present"); 
    $(timeBlock10).addClass("future"); 
    $(timeBlock11).addClass("future"); 
    $(timeBlock12).addClass("future"); 
    $(timeBlock1).addClass("future"); 
    $(timeBlock2).addClass("future"); 
    $(timeBlock3).addClass("future"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
    
}

if((hours + "AM") === hour10.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("present"); 
    $(timeBlock11).addClass("future"); 
    $(timeBlock12).addClass("future"); 
    $(timeBlock1).addClass("future"); 
    $(timeBlock2).addClass("future"); 
    $(timeBlock3).addClass("future"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
}

if((hours + "AM") === hour11.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("present"); 
    $(timeBlock12).addClass("future"); 
    $(timeBlock1).addClass("future"); 
    $(timeBlock2).addClass("future"); 
    $(timeBlock3).addClass("future"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
}
if((hours + "PM") === hour12.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("past"); 
    $(timeBlock12).addClass("present"); 
    $(timeBlock1).addClass("future"); 
    $(timeBlock2).addClass("future"); 
    $(timeBlock3).addClass("future"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
}
if((hours + "PM") === hour1.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("past"); 
    $(timeBlock12).addClass("past"); 
    $(timeBlock1).addClass("present"); 
    $(timeBlock2).addClass("future"); 
    $(timeBlock3).addClass("future"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
}
if((hours + "PM") === hour2.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("past"); 
    $(timeBlock12).addClass("past"); 
    $(timeBlock1).addClass("past"); 
    $(timeBlock2).addClass("present"); 
    $(timeBlock3).addClass("future"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
}
if((hours + "PM") === hour3.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("past"); 
    $(timeBlock12).addClass("past"); 
    $(timeBlock1).addClass("past"); 
    $(timeBlock2).addClass("past"); 
    $(timeBlock3).addClass("present"); 
    $(timeBlock4).addClass("future"); 
    $(timeBlock5).addClass("future"); 
}
if((hours + "PM") === hour4.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("past"); 
    $(timeBlock12).addClass("past"); 
    $(timeBlock1).addClass("past"); 
    $(timeBlock2).addClass("past"); 
    $(timeBlock3).addClass("past"); 
    $(timeBlock4).addClass("present"); 
    $(timeBlock5).addClass("future"); 
}
if((hours + "PM") === hour5.textContent ){
    //$(timeBlock1).addClass("time-block"+hour);
    $(timeBlock9).addClass("past"); 
    $(timeBlock10).addClass("past"); 
    $(timeBlock11).addClass("past"); 
    $(timeBlock12).addClass("past"); 
    $(timeBlock1).addClass("past"); 
    $(timeBlock2).addClass("past"); 
    $(timeBlock3).addClass("past"); 
    $(timeBlock4).addClass("past"); 
    $(timeBlock5).addClass("present"); 
}

var editTask = function () {
    var array=["","","","","","","","",""];
    //document.getElementById('time-block9').innerHTML = 'Your content';
    array[0]=textArea9.value;
    array[1]=textArea10.value;
    array[2]=textArea11.value;
    array[3]=textArea12.value;
    array[4]=textArea1.value;
    array[5]=textArea2.value;
    array[6]=textArea3.value;
    array[7]=textArea4.value;
    array[8]=textArea5.value;
    //  console.log(array[0]);
    //  console.log(array[1]);
     localStorage.setItem('array', JSON.stringify(array));
}


saveBtn9.addEventListener("click", editTask);
saveBtn10.addEventListener("click", editTask);
saveBtn11.addEventListener("click", editTask);
saveBtn12.addEventListener("click", editTask);
saveBtn1.addEventListener("click", editTask);
saveBtn2.addEventListener("click", editTask);
saveBtn3.addEventListener("click", editTask);
saveBtn4.addEventListener("click", editTask);
saveBtn5.addEventListener("click", editTask);
// if((hours + "PM") === hour.textContent ){
//     $(timeBlock1).addClass("present"); 
//     console.log(hour);
// }





// if (moment().isAfter(time)) {
//     $(timeBlock).addClass("past");
// }
// // if (moment().diff(time, "hours") === 5) { 
// //     $(timeBlock).addClass("present"); 
// // }
// else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     $(timeBlock).addClass("future");
// }

