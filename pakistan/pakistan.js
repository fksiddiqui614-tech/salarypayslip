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
title: "Average Database Administrator Salary in Pakistan Per Month",
url: "/pakistan/average-database-administrator-salary-in-pakistan-per-month.html",
keywords: "database administrator dba sql server oracle mysql postgresql mongodb mariadb redis database engineer database management sql performance tuning replication backup recovery database security cloud database amazon rds azure sql google cloud sql",
category: "Technology"
},

{
title: "Average System Administrator Salary in Pakistan Per Month",
url: "/pakistan/average-system-administrator-salary-in-pakistan-per-month.html",
keywords: "system administrator windows server linux administrator windows admin linux admin active directory microsoft azure aws google cloud vmware hyper-v virtualization powershell bash docker kubernetes server management infrastructure administrator enterprise infrastructure network administration cloud administrator",
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
title: "Average Machine Learning Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-machine-learning-engineer-salary-in-pakistan-per-month.html",
keywords: "machine learning engineer machine learning artificial intelligence ai deep learning python tensorflow pytorch scikit-learn data science computer vision natural language processing nlp mlops neural networks",
category: "Technology"
},

{
title: "Average AI Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-ai-engineer-salary-in-pakistan-per-month.html",
keywords: "ai engineer artificial intelligence machine learning deep learning generative ai nlp computer vision",
category: "Technology"
},

{
title: "Average Prompt Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-prompt-engineer-salary-in-pakistan-per-month.html",
keywords: "prompt engineer generative ai artificial intelligence ai chatgpt large language models llm prompt engineering ai automation natural language processing nlp machine learning deep learning ai tools ml workflows",
category: "Technology"
},

{
title: "Average Network Engineer Salary in Pakistan Per Month",
url: "/pakistan/average-network-engineer-salary-in-pakistan-per-month.html",
keywords: "network engineer salary networking ccna ccnp routing switching network security cybersecurity cloud networking firewall vpn linux networking enterprise",
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
},

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

{
title: "Average Frontend Developer Salary in Pakistan Per Month",
url: "/pakistan/average-frontend-developer-salary-in-pakistan-per-month.html",
keywords: "frontend developer react next.js angular vue.js javascript typescript html css tailwind css responsive web design ui development ux accessibility core web vitals redux state management frontend testing web performance",
category: "Technology"
},

{
title: "Average Backend Developer Salary in Pakistan Per Month",
url: "/pakistan/average-backend-developer-salary-in-pakistan-per-month.html",
keywords: "backend developer node.js laravel django spring boot asp.net core express.js php java python c# api rest graphql microservices mysql postgresql mongodb redis docker kubernetes server-side development",
category: "Technology"
},

{
title: "Average Mobile App Developer Salary in Pakistan Per Month",
url: "/pakistan/average-mobile-app-developer-salary-in-pakistan-per-month.html",
keywords: "mobile app developer android ios flutter react native kotlin swift dart jetpack compose swiftui xcode android studio mobile applications cross-platform native app development firebase api mobile ui ux play store app store",
category: "Technology"
},

{
title: "Average Blockchain Developer Salary in Pakistan Per Month",
url: "/pakistan/average-blockchain-developer-salary-in-pakistan-per-month.html",
keywords: "blockchain developer solidity ethereum web3 smart contracts defi hyperledger blockchain security evm ethers.js web3.js hardhat foundry remix layer 2 polygon binance smart chain solana nft dao cryptography dapps decentralized applications",
category: "Technology"
},

{
title: "Average Web Developer Salary in Pakistan Per Month",
url: "/pakistan/average-web-developer-salary-in-pakistan-per-month.html",
keywords: "web developer html css javascript responsive web design website development web applications web development frontend backend full stack bootstrap tailwind css wordpress php react next.js ui ux",
category: "Technology"
},

];

/* ==========================
   Category Icons
========================== */

function getIcon(title){

if(title.includes("Machine Learning Engineer")) return "🤖";
if(title.includes("AI Engineer")) return "🤖";
if(title.includes("Prompt Engineer")) return "🤖";
if(title.includes("Network Engineer")) return "🤖";
if(title.includes("Data Scientist")) return "🧠";
if(title.includes("Data Analyst")) return "📊";
if(title.includes("Database Administrator")) return "📊";
if(title.includes("System Administrator")) return "📊";
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
if(title.includes("Frontend Developer")) return "💻";
if(title.includes("Backend Developer")) return "⚙️";
if(title.includes("Mobile App Developer Developer")) return "⚙💻";
if(title.includes("Blockchain Developer")) return "⚙💻";
if(title.includes("Web Developer")) return "💻";

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
