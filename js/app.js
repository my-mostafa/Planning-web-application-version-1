let inp = document.querySelector("#inp")
let counteiner = document.querySelector(".counteiner")
let list2 
let getsvg = document.querySelector("#getsvg")

let input
let newlist
let newlist1
let newlist2
let newgetsvg


inp.addEventListener("keydown",function(esf){
    if(esf.keyCode=="13"){
        input = inp.value.trim()
        if(input){
        inp.value = ""
        newlist = document.createElement("div")
        newlist.classList.add("list")
        newlist1 = document.createElement("span")
        newlist1.classList.add("list-1")
        newlist2 = document.createElement("span")
        newlist2.classList.add("list-1-1")
        newgetsvg = document.createElement("svg")
        newgetsvg.classList.add("list-2")
        ////////////add//////////////////////////////////
        newlist2.innerHTML = input  
        newgetsvg.append(getsvg)
        newlist1.append(newlist2)
        newlist.append(newlist1)
        newlist.append(newgetsvg)
        counteiner.append(newlist)  
        }
    }

    
})
setInterval(function(){
    list2 = document.querySelectorAll(".list-2")
    list2.forEach(function(pm){
        pm.addEventListener("click",function(){
           pm.parentElement.remove()
        })
    
    })

},10)








