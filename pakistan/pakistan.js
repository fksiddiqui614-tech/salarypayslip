const articles = [

{
title: "Average Software Engineer Jobs Salary in Pakistan (2026)",
url: "average-software-engineer-salary-in-pakistan-per-month.html",
keywords: "software engineer developer programmer coding it",
category: "Technology"
},

{
title: "Average Mechanical Engineer Salary in Pakistan Per Month",
url: "average-mechanical-engineer-salary-in-pakistan-per-month.html",
keywords: "mechanical engineer manufacturing automotive production maintenance industrial engineering energy cad",
category: "Engineering"
},

{
title: "Average Graphic Designer Salary in Pakistan Per Month",
url: "average-graphic-designer-salary-in-pakistan-per-month.html",
keywords: "graphic designer branding logo design social media design ui design print design adobe illustrator photoshop",
category: "Creative"
},

{
title: "Average Electrical Engineer Salary in Pakistan Per Month",
url: "average-electrical-engineer-salary-in-pakistan-per-month.html",
keywords: "electrical engineer power systems industrial automation renewable energy telecommunications electrical engineering maintenance",
category: "Engineering"
},

{
title: "Average Doctor Salary in Pakistan Per Month",
url: "average-doctor-salary-in-pakistan-per-month.html",
keywords: "doctor mbbs medical officer physician specialist consultant surgeon healthcare hospital",
category: "Healthcare"
},

{
title: "Average Data Scientist Salary in Pakistan Per Month",
url: "average-data-scientist-salary-in-pakistan-per-month.html",
keywords: "data scientist machine learning artificial intelligence python sql big data deep learning analytics",
category: "Technology"
},

{
title: "Average Data Analyst Salary in Pakistan Per Month",
url: "average-data-analyst-salary-in-pakistan-per-month.html",
keywords: "data analyst sql excel power bi business intelligence data visualization analytics python",
category: "Technology"
},

{
title: "Average Cyber Security Analyst Salary in Pakistan Per Month",
url: "average-cyber-security-analyst-salary-in-pakistan-per-month.html",
keywords: "cyber security analyst information security ethical hacking soc penetration testing network security cloud security siem",
category: "Technology"
},

{
title: "Average Cloud Engineer Salary in Pakistan Per Month",
url: "average-cloud-engineer-salary-in-pakistan-per-month.html",
keywords: "cloud engineer aws azure google cloud gcp devops kubernetes docker cloud computing",
category: "Technology"
},

{
title: "Average AI Engineer Salary in Pakistan Per Month",
url: "average-ai-engineer-salary-in-pakistan-per-month.html",
keywords: "ai engineer artificial intelligence machine learning deep learning generative ai nlp computer vision",
category: "Technology"
},

{
title: "Average Civil Engineer Salary in Pakistan Per Month",
url: "average-civil-engineer-salary-in-pakistan-per-month.html",
keywords: "civil engineer construction structural engineer infrastructure project engineer engineering",
category: "Engineering"
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
