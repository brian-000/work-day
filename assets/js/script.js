var currentDay = document.querySelector("#currentDay");
var jumbotron = document.querySelector("#jumbotron");
var timeBlock = document.querySelector("#time-block");
var d = moment().format();
var time = moment().set("hour", 10);
d = moment().format("dddd, MMMM Do, YYYY");


currentDay.textContent = d;
jumbotron.appendChild(currentDay);
//timeBlock.addClass("time-block");
$(".time-block").hover(function () {
    $(this).append($("<span> ***</span>"));
}, function () {
    $(this).find("span").last().remove();

});

if (moment().isAfter(time)) {
    $(timeBlock).addClass("past");
}
// if (moment().diff(time, "hours") === 5) { 
//     $(timeBlock).addClass("present"); 
// }
else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(timeBlock).addClass("future");
}

