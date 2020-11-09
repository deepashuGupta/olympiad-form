const radio1 = document.querySelector('#schlradio');
const radio2 = document.querySelector('#cllgradio');

var button = document.querySelector('#btn')
var schoolform = document.querySelector("#student");
var collegeform = document.querySelector("#college");

window.onload = function() {
    document.getElementById('student').style.display = 'none';
    document.getElementById('college').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
};

radio1.addEventListener('click',function(){
    collegeform.style.display = "none";
    schoolform.style.display = "";
    button.style.display = "";
});

radio2.addEventListener('click',function(){
    schoolform.style.display = "none";
    collegeform.style.display = "";
    button.style.display = "";
});

