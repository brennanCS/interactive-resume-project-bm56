var firs = document.getElementById("first");
firs.addEventListener("mouseenter",function(){
    console.log("Mouse entered the element!");  // Check if the event is being triggered
    var names = document.createElement("h2");
    names.classList.add('name');
    names.innerHTML="Daniel Carmona & Chance Lively ";
    firs.appendChild(names);
})
firs.addEventListener("mouseleave",function(){
    var names = firs.querySelector("h2");  // Get the <h2> element
    if (names) {
        firs.removeChild(names);  // Remove it from the container
    }
})
var second = document.getElementById("second");
second.addEventListener("mouseenter",function(){
    console.log("Mouse entered the element!");  // Check if the event is being triggered
    var school = document.createElement("h2");
    school.innerHTML="Brennan High School diploma";
    second.appendChild(school);
})
second.addEventListener("mouseleave",function(){
    var school = second.querySelector("h2");  // Get the <h2> element
    if (school) {
        second.removeChild(school);  // Remove it from the container
    }
})
var third = document.getElementById("third");
third.addEventListener("mouseenter",function(){
    console.log("Mouse entered the element!");  // Check if the event is being triggered
    var work = document.createElement("h2");
    work.innerHTML="SeaWorld San Antonio & Bill Miller Bar B Q";
    third.appendChild(work);
})
third.addEventListener("mouseleave",function(){
    var work = third.querySelector("h2");  // Get the <h2> element
    if (work) {
        third.removeChild(work);  // Remove it from the container
    }
})
var fourth = document.getElementById("fourth");
fourth.addEventListener("mouseenter",function(){
    console.log("Mouse entered the element!");  // Check if the event is being triggered
    var language = document.createElement("h2");
    language.innerHTML="Our programming languages known Java,Python,JavaScript,HTML,CSS";
    fourth.appendChild(language);
})
fourth.addEventListener("mouseleave",function(){
    var language = fourth.querySelector("h2");  // Get the <h2> element
    if (language) {
        fourth.removeChild(language);  // Remove it from the container
    }
})
var fifth = document.getElementById("fifth");
fifth.addEventListener("mouseenter",function(){
    console.log("Mouse entered the element!");  // Check if the event is being triggered
    var contact = document.createElement("h2");
    contact.innerHTML="210-760-6177 & 210-973-8226";
    fifth.appendChild(contact);
})
fifth.addEventListener("mouseleave",function(){
    var contact = fifth.querySelector("h2");  // Get the <h2> element
    if (contact) {
        fifth.removeChild(contact);  // Remove it from the container
    }
})

var btn = document.getElementById("switch");
btn.addEventListener("click", colorSwitch)
function colorSwitch(){
    var body = document.body;
    if(body.style.backgroundColor=="white"){
        body.style.backgroundColor="black";
        document.body.style.color = "white";
        document.body.style.borderColor = "white";
        
    }else{
        body.style.backgroundColor="white";
        document.body.style.color = "black";
        document.body.style.borderColor = "black";
    }
}




function changeMode(){
    var button = document.getElementById("mode");
    button.textContent = "Dark";
    
}



var rainContent = $('.raindrop').text();
var rainArray = rainContent.split("");
var rainReturn = "";
$('.raindrop').empty();
$.each(rainArray, function(i, v) {
  if (v !== " ") {
    rainReturn = rainReturn + '<span class="rd-anim-' + (Math.floor(Math.random() * 8) + 1) + '">' + v + '</span>';
  } else {
    rainReturn = rainReturn + v;
  }
});
var rainHTML = $.parseHTML(rainReturn);
$('.raindrop').append(rainHTML);        /**   FROM CODEPEN */



















