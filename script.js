/* Task 1 */
var heading = document.getElementById('heading')
heading.innerText = "This is New"
console.log(heading.innerText)


/* Task 2 using plain JavaScript */

//Task 2a
var textBtn = document.getElementById('addText1')
textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = 'Hello World'
    task2.appendChild(paragraph)
})

//Task 2b
function changeBGColor(event){
    //console.log(event.target.innerText)
    var body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = event.target.innerText.toLowerCase()
}

//Task 2c
function redirectToGoogle(event){
window.location.assign('https://www.google.com')
}

/* Task 4 using jQuery */

//Task 4a
$(document).ready(function(){
    $("#addText2").click(function(){
        $("#task4a").append("<p>Hello World</p>");
    });
});

//Task 4b
$(document).ready(function(){
    $("#red").click(function(){
        $("body").css(“background-color”, “blue”); 
    });
});

//Task 4c
$(document).ready(function(){
    $("#add").on(click, function(){
        var x = $(input[name = "number1"]) + $(input[name = "number2"]);
        
        $("#task4c").append("<p>The sum is </p>" + val(x));
    });
});