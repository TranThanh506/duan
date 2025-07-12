function randNum(){
    return Math.floor(Math.random() * 2000);
}

function randChar(){
    return String.fromCharCode(65 + Math.floor(Math.random() * 4));
}

function them(){
    const list = document.querySelector(".list");
    const add = document.createElement("a");
    let link = "https://codeforces.com/problemset/problem/";

    add.innerHTML = `${randNum()} / ${randChar()}`;
    add.setAttribute("href", `${link}${randNum()}/${randChar()}`);
    add.setAttribute("target",`_plank`);
    add.classList.add("problem"); 

    list.append(add);
}

const add1 = document.querySelector(".add1");

add1.addEventListener("click", them);