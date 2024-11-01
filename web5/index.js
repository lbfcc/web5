/*1*/
function nea_far(){
    let a = parseInt(prompt("1st number: "));
    let b = parseInt(prompt("2nd number: "));
    let c = parseInt(prompt("3rd number: "));
    let nearest = a;
    let farthest = a;
    if (Math.abs(100-b) < Math.abs(100-nearest)){
        nearest=b;
    }
    if (Math.abs(100-b) > Math.abs(100-farthest)){
        farthest=b;
    }
    if (Math.abs(100-c) < Math.abs(100-nearest)){
        nearest=c;
    }
    if (Math.abs(100-c) > Math.abs(100-farthest)){
        farthest=c;
    }
    document.getElementById("result").innerHTML = "Nearest: " + nearest + ". " + "Farthest: " + farthest;
}

/*2*/
const sortWords = (str) => str.split(' ').map(word => word.split('').sort((a, b) => a.localeCompare(b)).join('')).join(' ');

function showWords(){
    let input = document.getElementById("sentence").value;
    let sorted = sortWords(input);
    document.getElementById("res2").innerHTML = sorted;
}

/*3*/
const NonRepeated = (str) => str.split('').find(item => str.indexOf(item) === str.lastIndexOf(item));

function find(){
    let input = document.getElementById("inputstr3").value;
    let nonrep = NonRepeated(input);
    document.getElementById("res3").innerHTML = nonrep;
}

/*4*/
const replace = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

function replaced(){
    let input = document.getElementById("inputstr4").value;
    let result = replace(input);
    alert (`Result: ${result}`);
}

/*5*/
function longest_shortest() {
    let word1 = prompt("Enter the first word: ");
    let word2 = prompt("Enter the second word: ");
    let word3 = prompt("Enter the third word: ");

    const words = [word1, word2, word3];

    let longest = words[0];
    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    document.getElementById("longest").innerHTML = "The longest word is: " + longest;
    document.getElementById("shortest").innerHTML = "The shortest word is: " + shortest;
}

/*6*/
function change(){
const paragraph = document.querySelector("#p");
paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 7 ? `<span style="background-color: blue">${word}</span>`: word)
    .map(word => word.length < 3 ? `<span style="font-weight: bold">${word}</span>`: word)
    .join(' ');
}

/*7*/
function repl(){
Array.from(document.querySelectorAll("#p2"))
.forEach(p => {
    p.innerHTML = p.innerHTML
        .replace(/\?/g, '*')
        .replace(/\!/g, '@');
})
}

/*8*/
function separate(){
const paragraph = document.querySelector('#p3');
paragraph.innerHTML = paragraph.innerHTML
    .split(/([.?!])\s*/g)
    .join('</p><p>') + '</p>';
}

/*9*/
function count() {
    const paragraph = document.querySelector('#p4');
    const wordCount = paragraph.innerText.split(' ').length;
    alert(`${wordCount} words`);
}

/*10*/
function chang(){
    const paragraph = document.querySelector("#p5");
    paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => {
        if (word.toLowerCase().startsWith('a')) {
            return `<span style="font-style: italic">${word}</span>`;
        }

        if (word.toLowerCase().endsWith('y')) {
            return `<span style="text-decoration: underline">${word}</span>`;
        }
        return word;
    })
    .join(' ');
}

/*11*/
function calculate1(){
    let number = document.getElementById("radius1").value;
    let result = (4/3)*Math.PI*Math.pow(number, 3);
    document.getElementById("answer1").innerHTML = result;
}

/*12*/
function calculate2(){
    let number = document.getElementById("radius2").value;
    let number2 = document.getElementById("height1").value;
    let result = Math.PI*Math.pow(number, 2)*number2;
    document.getElementById("answer2").innerHTML = result;
}