const articles = [

{
title: "Average Software Engineer Jobs Salary in Pakistan (2026)",
url: "/pakistan/average-software-engineer-salary-in-pakistan-per-month.html",
keywords: "software engineer developer programmer coding it",
category: "Technology"
},

{
title: "Average Mechanical Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-mechanical-engineer-salary-in-pakistan-per-month.html",
keywords: "mechanical engineer manufacturing automotive production maintenance industrial engineering energy cad",
category: "Engineering"
},

{
title: "Average Graphic Designer Salary in Pakistan Per Month",
url: "/pakistan/average-graphic-designer-salary-in-pakistan-per-month.html",
keywords: "graphic designer branding logo design social media design ui design print design adobe illustrator photoshop",
category: "Creative"
},

{
title: "Average Electrical Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-electrical-engineer-salary-in-pakistan-per-month.html",
keywords: "electrical engineer power systems industrial automation renewable energy telecommunications electrical engineering maintenance",
category: "Engineering"
},

{
title: "Average Doctor Salary in Pakistan Per Month",
url: "/pakistan/average-doctor-salary-in-pakistan-per-month.html",
keywords: "doctor mbbs medical officer physician specialist consultant surgeon healthcare hospital",
category: "Healthcare"
},

{
title: "Average Data Scientist Salary in Pakistan Per Month",
url: "/pakistan/average-data-scientist-salary-in-pakistan-per-month.html",
keywords: "data scientist machine learning artificial intelligence python sql big data deep learning analytics",
category: "Technology"
},

{
title: "Average Data Analyst Salary in Pakistan Per Month",
url: "/pakistan/average-data-analyst-salary-in-pakistan-per-month.html",
keywords: "data analyst sql excel power bi business intelligence data visualization analytics python",
category: "Technology"
},

{
title: "Average Cyber Security Analyst Salary in Pakistan Per Month",
url: "/pakistan/average-cyber-security-analyst-salary-in-pakistan-per-month.html",
keywords: "cyber security analyst information security ethical hacking soc penetration testing network security cloud security siem",
category: "Technology"
},

{
title: "Average Cloud Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-cloud-engineer-salary-in-pakistan-per-month.html",
keywords: "cloud engineer aws azure google cloud gcp devops kubernetes docker cloud computing",
category: "Technology"
},

{
title: "Average AI Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-ai-engineer-salary-in-pakistan-per-month.html",
keywords: "ai engineer artificial intelligence machine learning deep learning generative ai nlp computer vision",
category: "Technology"
},

{
title: "Average Civil Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-civil-engineer-salary-in-pakistan-per-month.html",
keywords: "civil engineer construction structural engineer infrastructure project engineer engineering",
category: "Engineering"
},

{
title: "Digital Marketing Jobs Salary in Pakistan Per Month (2026)",
url: "/pakistan/digital-marketing-jobs-salary-in-pakistan-per-month.html",
keywords: "digital marketing seo google ads ppc social media marketing",
category: "Marketing"
},

{
title: "Average Chartered Accountant (CA) Salary in Pakistan (2026)",
url: "/pakistan/average-ca-salary-pakistan.html",
keywords: "ca chartered accountant accountant finance icap",
category: "Finance"
},

{
title: "Good Salary in Pakistan Per Month by Profession (2026)",
url: "/pakistan/good-salary-in-pakistan-per-month.html",
keywords: "good salary pakistan average salary monthly income living wage",
category: "Career Guide"
}

{
title: "Average DevOps Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-devops-engineer-salary-in-pakistan-per-month.html",
keywords: "devops engineer devops kubernetes docker jenkins terraform ansible ci cd aws azure cloud engineer infrastructure automation",
category: "Technology"
},

{
title: "Average Full Stack Developer Salary in Pakistan Per Month",
url: "/pakistan/average-full-stack-developer-salary-in-pakistan-per-month.html",
keywords: "full stack developer frontend backend react node.js javascript typescript html css express mongodb mysql postgresql laravel django mern mean web development",
category: "Technology"
},

];

/* ==========================
   Category Icons
========================== */

function getIcon(title){

if(title.includes("AI Engineer")) return "🤖";
if(title.includes("Data Scientist")) return "🧠";
if(title.includes("Data Analyst")) return "📊";
if(title.includes("Cyber Security")) return "🔒";
if(title.includes("Software Engineer")) return "💻";
if(title.includes("Cloud Engineer")) return "☁️";
if(title.includes("Graphic Designer")) return "🎨";
if(title.includes("Civil Engineer")) return "🏗️";
if(title.includes("Mechanical Engineer")) return "⚙️";
if(title.includes("Electrical Engineer")) return "⚡";
if(title.includes("Doctor")) return "🩺";
if(title.includes("Digital Marketing")) return "📈";
if(title.includes("Chartered Accountant")) return "💼";
if(title.includes("Good Salary")) return "💰";
if(title.includes("DevOps")) return "⚙️";
if(title.includes("Full Stack Developer")) return "⚙️";

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
