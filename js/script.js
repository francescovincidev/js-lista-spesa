// array
const list = ["latte", "pasta", "burro", "patatine","banane","pomodori","insalata"];

let listUl = document.getElementById("list");

let i = 0;




do {
    listUl.innerHTML +=`<li>${list[i]}</li>`
    i++;
    console.log(i);

    
} while (i < list.length);
console.log(list);