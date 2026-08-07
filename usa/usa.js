const articles = [

{
title: "Dentist Salary in USA (2026)",
url: "/usa/salary-guides/dentist-salary-in-usa.html",
keywords: "dentist dental salary oral healthcare dds dmd general dentist cosmetic dentistry dental clinic",
category: "Healthcare"
},

{
title: "Orthodontist Salary in USA (2026)",
url: "/usa/salary-guides/orthodontist-salary-in-usa.html",
keywords: "orthodontist braces clear aligners orthodontics smile correction dental specialist orthodontic residency",
category: "Healthcare"
},

{
title: "Doctor Salary in USA (2026)",
url: "/usa/salary-guides/doctor-salary-in-usa.html",
keywords: "doctor physician medical salary healthcare hospital surgeon internal medicine family medicine",
category: "Healthcare"
},

];

/* ==========================
   Category Icons
========================== */

function getIcon(title){

if (title.includes("Doctor")) return "🩺";
if (title.includes("Dentist")) return "🦷";
if (title.includes("Orthodontist")) return "😁";

return "📄";

}

/* ==========================
   Elements
========================== */

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");
const button = document.getElementById("searchBtn");

/* ==========================
   Live Search
========================== */

function showResults(searchText){

results.innerHTML = "";

const value = searchText.toLowerCase().trim();

if(value === ""){

results.style.display = "none";
return;

}

const matches = articles.filter(article =>

article.title.toLowerCase().includes(value) ||

article.keywords.toLowerCase().includes(value)

);

if(matches.length === 0){

results.innerHTML = `
<div class="no-result">
No salary guides found.
</div>
`;

results.style.display = "block";

return;

}

matches.forEach(article => {

results.innerHTML += `

<a href="${article.url}">

<strong>

${getIcon(article.title)} ${article.title}

</strong>

<small>

${article.category}

</small>

</a>

`;

});

results.style.display = "block";

}

/* ==========================
   Typing Search
========================== */

input.addEventListener("input",function(){

showResults(this.value);

});

/* ==========================
   Search Button
========================== */

button.addEventListener("click",function(){

const first = results.querySelector("a");

if(first){

window.location.href = first.href;

}

});

/* ==========================
   Enter Key
========================== */

input.addEventListener("keydown",function(e){

if(e.key === "Enter"){

const first = results.querySelector("a");

if(first){

window.location.href = first.href;

}

}

});

/* ==========================
   Hide Results
========================== */

document.addEventListener("click",function(e){

if(!document.querySelector(".search").contains(e.target)){

results.style.display = "none";

}

});
