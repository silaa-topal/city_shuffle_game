
const cities = ['ankara', 'denizli', 'izmir', 'aydın', 'trabzon', 'mardin'];
let cty = document.querySelector("#city")
let btn = document.querySelector("#btn")
let input = document.querySelector("#input")
let result = document.querySelector("#result")
let btnGo = document.querySelector("#go")
let score = document.querySelector("#score")

var temp;



function shuffle(){
    var city = cities[Math.floor(Math.random() * cities.length)];
    temp=city
    console.log(city);
    let shuffled = city.split('')
    for (let i = city.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log(shuffled)
    cty.innerHTML = `${shuffled.toString()}`
}

btn.addEventListener('click',function(){
    shuffle()
})


let scr = 0

function Check(inpt){
    console.log(inpt)
    if(temp === inpt){
        scr += 1
        score.textContent = scr
        return true
    }
    return false
}

btnGo.addEventListener('click', function(){
    const x = document.querySelector("#input")
    if(Check(x.value))shuffle()
    x.value = ""
})

