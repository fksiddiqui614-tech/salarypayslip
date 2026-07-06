const articles = [

{
title: "Average Software Engineer Jobs Salary in Pakistan (2026)",
url: "average-software-engineer-jobs-salary-in-pakistan-per-month.html",
keywords: "software engineer developer programmer coding it",
category: "Technology"
},

{
title: "Digital Marketing Jobs Salary in Pakistan Per Month (2026)",
url: "digital-marketing-jobs-salary-in-pakistan-per-month.html",
keywords: "digital marketing seo google ads ppc social media marketing",
category: "Marketing"
},

{
title: "Average Chartered Accountant (CA) Salary in Pakistan (2026)",
url: "average-ca-salary-pakistan.html",
keywords: "ca chartered accountant accountant finance icap",
category: "Finance"
},

{
title: "Good Salary in Pakistan Per Month by Profession (2026)",
url: "good-salary-in-pakistan-per-month.html",
keywords: "good salary pakistan average salary monthly income living wage",
category: "Career Guide"
}

];

/* ==========================
   Category Icons
========================== */

function getIcon(category){

switch(category){

case "Technology":
return "💻";

case "Marketing":
return "📈";

case "Finance":
return "💼";

case "Career Guide":
return "💰";

default:
return "📄";

}

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

${getIcon(article.category)} ${article.title}

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