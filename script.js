var curr_bg  = document.getElementsByClassName('curr_bg')[0];
var left_color = document.getElementById("left");
var right_color = document.getElementById('right');
var body  = document.querySelector('#background')


left_color.addEventListener('input', function(){
    body.style.background = "linear-gradient(to right,"+left_color.value+","+right_color.value+")";
    curr_bg.textContent = body.style.background;
})

right_color.addEventListener('input', function(){
    body.style.background = "linear-gradient(to right,"+left_color.value+","+right_color.value+")";
    curr_bg.textContent = body.style.background;
})


