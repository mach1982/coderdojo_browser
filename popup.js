function clickHandler1(e) {
    window.open("https://coderdojo.com/");
}

function clickHandler2(e) {
    window.open("http://kata.coderdojo.com/wiki/Main_Page");
}

function find(e) {
    window.open("https://zen.coderdojo.com/");
}

function tweets(e) {
   
 $('body').css('width:300px,height: 150px');  
        
$("#frameDiv").html("<iframe src='http://portkey.dyndns.info/cdtweets.html'></iframe>");  
   
 }

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me').addEventListener('click', clickHandler1);
})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me2').addEventListener('click', clickHandler2);
   
})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('show').addEventListener('click', tweets);
   
})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('find').addEventListener('click', find);
   
})


