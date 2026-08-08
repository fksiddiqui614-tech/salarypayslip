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

{
    title: "Dermatologist Salary in USA (2026)",
    url: "/usa/salary-guides/dermatologist-salary-in-usa.html",
    keywords: "dermatologist salary skin doctor dermatology physician medical healthcare hospital residency fellowship private practice",
    category: "Healthcare"
},

{
    title: "Oncologist Salary in USA (2026)",
    url: "/usa/salary-guides/oncologist-salary-in-usa.html",
    keywords: "oncologist salary cancer doctor oncology physician medical healthcare hospital cancer treatment radiation chemotherapy",
    category: "Healthcare"
},

{
    title: "Anesthesiologist Salary in USA (2026)",
    url: "/usa/salary-guides/anesthesiologist-salary-in-usa.html",
    keywords: "anesthesiologist salary anesthesia doctor physician medical healthcare hospital surgery residency critical care private practice",
    category: "Healthcare"
},

{
    title: "Cardiologist Salary in USA (2026)",
    url: "/usa/salary-guides/cardiologist-salary-in-usa.html",
    keywords: "cardiologist salary heart doctor cardiology physician medical healthcare hospital cardiac surgery fellowship private practice",
    category: "Healthcare"
},

{
    title: "Neurologist Salary in USA (2026)",
    url: "/usa/salary-guides/neurologist-salary-in-usa.html",
    keywords: "neurologist salary brain doctor neurology physician medical healthcare hospital residency nervous system epilepsy stroke",
    category: "Healthcare"
},

{
    title: "Radiologist Salary in USA (2026)",
    url: "/usa/salary-guides/radiologist-salary-in-usa.html",
    keywords: "radiologist salary imaging doctor radiology physician medical healthcare hospital residency diagnostic imaging MRI CT scan",
    category: "Healthcare"
},

];

/* ==========================
   Category Icons
========================== */

function getIcon(title){

if (title.includes("Doctor")) return "🩺";
if (title.includes("Dermatologist")) return "🩺";
if (title.includes("Oncologist")) return "🩺";
if (title.includes("Anesthesiologist")) return "🩺";
if (title.includes("Cardiologist")) return "🩺";
if (title.includes("Neurologist")) return "🩺";
if (title.includes("Radiologist")) return "🩺";
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
