const cost = document.getElementById("1")
const amount = document.getElementById("2")
const selector = document.querySelector("select")
const calculate_button = document.getElementById("b1")
const reset_button = document.getElementById("b2")

const out1 = document.getElementById("l1")
const out2 = document.getElementById("l2")

function f(event){
    index = Number(selector.value.substring(selector.value.indexOf("(")+1,selector.value.search("%"))) 
    tips = Number(cost.value)*index/100
    for_one_person = tips/amount.value
    
    
    out1.innerHTML = for_one_person
    out2.innerHTML = tips
}

function reset(){
    cost.value = 0
    amount.value = 0
    selector.value = "Плохое (0%)"
    tips = 0
    for_one_person = 0
    out1.innerHTML = for_one_person
    out2.innerHTML = tips
}


    


reset()

calculate_button.addEventListener("click",f)
reset_button.addEventListener("click",reset)
