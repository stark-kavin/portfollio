
var cursor = document.querySelector(".cursor-circle");

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+ (e.pageY-(cursor.clientHeight/2)-0.6)+"px;left: "+ (e.pageX-(cursor.clientHeight/2)-0.6)+"px;") 
});

document.addEventListener("click",e=>{
    cursor.classList.add("mouseClick");
    setTimeout(()=>{
        cursor.classList.remove("mouseClick");
    },300)

});

var item = document.querySelectorAll("a");
item.forEach(addLister1)
function addLister1(i){
    i.addEventListener("mouseover", mover, false);
    i.addEventListener("mouseout", mout, false);
}

function mover()
{  
    cursor.classList.add('big-cursor-circle');
    cursor.classList.remove('cursor-circle');
}

function mout()
{  
    cursor.classList.add('cursor-circle');
    cursor.classList.remove('big-cursor-circle');
}

var item1 = document.querySelectorAll(".mode");

item1.forEach(addListener2)
function addListener2(x){
    x.addEventListener("mouseover", func, false);
    x.addEventListener("mouseout", func1, false);
}

function func()
{  
    cursor.classList.add('big-cursor-circle-mode');
    cursor.classList.remove('cursor-circle');
    document.getElementById("dt").classList.add('dark-txt');
    document.getElementById("dt").classList.remove('hidden');
}

function func1()
{  
    cursor.classList.add('cursor-circle');
    cursor.classList.remove('big-cursor-circle-mode');
    document.getElementById("dt").classList.remove('dark-txt');
    document.getElementById("dt").classList.add('hidden');
}

function switchMode(mode) {
    if(mode =='d'){
        document.getElementById("body").classList.add("dark-mode");
        document.querySelector("#light-mode-btn").classList.remove("hidden");
        document.querySelector("#dark-mode-btn").classList.add("hidden");
        document.querySelector("#dt").innerHTML = "Light Mode";
    }else{
        document.getElementById("body").classList.remove("dark-mode");
        document.querySelector("#light-mode-btn").classList.add("hidden")
        document.querySelector("#dark-mode-btn").classList.remove("hidden")
        document.querySelector("#dt").innerHTML = "Dark Mode";
    }
}
