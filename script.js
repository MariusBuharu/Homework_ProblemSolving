"use strict";
const btnReverse = document.querySelector('.reverseText');
const container = document.querySelector('.container');
const inputText = document.querySelector("#inputName");

const reverse = sir => Array.from(sir).reverse().join("");
const palindrom = pal => pal === reverse(pal);
const bytesCode= code => {
    const array=[];
    for (const codeElement of code) {
        const codeElementAt=codeElement.charCodeAt(0);
        array.push(codeElementAt);

    }
    return array;
}
 const totalsum= suma => suma.reduce((prev,cur) => prev+cur,0);

btnReverse.addEventListener('click', function () {
    const div = document.createElement('div');
    div.classList.add('person-details', 'mt-3', 'bg-dark', 'text-light', 'p-2');
    const div2=document.createElement("div");
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const text = inputText.value;
    para.innerText = ` Textul inversat este :${reverse(text)}`;
    // para1.innerText=`Textul este palindrom: ${palindrom(text)}`;
    para1.innerText=`${text} ${palindrom(text) ? "este palindrom":"nu este palindrom"}`;
    para2.innerText=`Secventa de bytes a textului este : ${bytesCode(text)}`;
    para3.innerText=`Suma secventei de bytes a textului este : ${totalsum(bytesCode(text))}`;
    div.append(para,para1,para2,para3);
    container.appendChild(div);

});

console.log(palindrom("anaytr"));
console.log(bytesCode("Marius"))