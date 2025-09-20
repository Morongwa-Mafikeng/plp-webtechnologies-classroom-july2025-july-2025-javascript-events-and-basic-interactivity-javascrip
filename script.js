var element = document.getElementById('color')
element.onclick = function(){
    document.body.style.backgroundColor = 'lavender'
}


const hover = document.getElementById('hover')
hover.onmouseover = function(){
hover.style.color = "blue";
}
hover.onmouseout = function(){
    hover.style.color = 'purple'
}

var valid = document.getElementById('name')

valid.oninput = function(){
    if(valid.ariaValueMax.length < 10){
        valid.setCustomValididty('username must be 10 or more characters')
    }else{
        valid.setCustomValididty(' ')
    }
}



