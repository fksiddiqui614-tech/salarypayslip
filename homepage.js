/*==========================================
 GLOBAL COUNTRY SEARCH
 SalaryPayslip
==========================================*/

const countries = [

{
name:"Pakistan",
flag:"🇵🇰",
url:"./pakistan/"
},

{
name:"USA",
flag:"🇺🇸",
url:"./usa/"
},

];

countries.sort((a,b)=>a.name.localeCompare(b.name));

const input=document.getElementById("countrySearch");
const results=document.getElementById("countrySuggestions");
const button=document.getElementById("searchBtn");

let currentFocus=-1;

/*=========================
SHOW RESULTS
=========================*/

function showSuggestions(value){

results.innerHTML="";

currentFocus=-1;

if(value.trim()===""){

results.style.display="none";

return;

}

const search = value.toLowerCase().trim();

const matches = countries

.filter(country =>
country.name.toLowerCase().includes(search)
)

.sort((a,b)=>{

const aName=a.name.toLowerCase();
const bName=b.name.toLowerCase();

const aStarts=aName.startsWith(search);
const bStarts=bName.startsWith(search);

if(aStarts && !bStarts) return -1;
if(!aStarts && bStarts) return 1;

return aName.localeCompare(bName);

});

if(matches.length===0){

results.innerHTML=`
<div class="no-result">
No country found.
</div>
`;

results.style.display="block";

return;

}

matches.forEach(country=>{

results.innerHTML+=`

<div class="country-item"
data-url="${country.url}">

<div class="country-flag">

${country.flag}

</div>

<div class="country-name">

${country.name}

</div>

</div>

`;

});

results.style.display="block";

}

/*=========================
INPUT
=========================*/

input.addEventListener("input",function(){

showSuggestions(this.value);

});

/*=========================
CLICK COUNTRY
=========================*/

results.addEventListener("click",function(e){

const item=e.target.closest(".country-item");

if(!item) return;

window.location.href=item.dataset.url;

});

/*=========================
SEARCH BUTTON
=========================*/

button.addEventListener("click",()=>{

const first=results.querySelector(".country-item");

if(first){

window.location.href=first.dataset.url;

}

});

/*=========================
KEYBOARD
=========================*/

input.addEventListener("keydown",function(e){

const items=results.querySelectorAll(".country-item");

if(e.key==="ArrowDown"){

e.preventDefault();

currentFocus++;

if(currentFocus>=items.length){

currentFocus=0;

}

setActive(items);

}

else if(e.key==="ArrowUp"){

e.preventDefault();

currentFocus--;

if(currentFocus<0){

currentFocus=items.length-1;

}

setActive(items);

}

else if(e.key==="Enter"){

e.preventDefault();

if(currentFocus>-1){

items[currentFocus].click();

}

else{

const first=results.querySelector(".country-item");

if(first){

first.click();

}

}

}

else if(e.key==="Escape"){

results.style.display="none";

}

});

/*=========================
ACTIVE ITEM
=========================*/

function setActive(items){

items.forEach(item=>

item.classList.remove("active")

);

if(items[currentFocus]){

items[currentFocus].classList.add("active");

items[currentFocus].scrollIntoView({

block:"nearest"

});

}

}

/*=========================
OUTSIDE CLICK
=========================*/

document.addEventListener("click",function(e){

if(!document.querySelector(".search").contains(e.target)){

results.style.display="none";

}

});

/*==========================================
 CALCULATORS NAVBAR DROPDOWN
 SalaryPayslip
==========================================*/

function toggleCalculators(){

const menu =
document.getElementById("calculatorsMenu");

if(!menu) return;

menu.classList.toggle("show");

}


/*=========================
CLOSE CALCULATORS
OUTSIDE CLICK
=========================*/

document.addEventListener("click",function(e){

const calculators =
document.querySelector(".nav-calculators");

const menu =
document.getElementById("calculatorsMenu");

if(!calculators || !menu) return;

if(!calculators.contains(e.target)){

menu.classList.remove("show");

}

});
