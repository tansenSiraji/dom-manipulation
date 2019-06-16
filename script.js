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
$('#addText2').click(function(event){
    var paragraph = $('<P>').text('Hello World')
    $('#task4a').append(paragraph)
})

//Task 4b
function changeBG(event){
    var color = event.target.innerText.toLowerCase()
    $('body').css('background-color', color)
}

//Task 4c
$('#add').click(function(event){
    var sum = Number($('#num1').val()) + Number($('#num2').val())
    $('#sum').text(sum)
})
