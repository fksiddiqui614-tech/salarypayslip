const data = {
  doctor: "USA $180K | UK £90K | Canada $150K",
  engineer: "USA $120K | EU €80K | Canada $100K",
  developer: "USA $130K | EU €75K | UK £70K",
  teacher: "USA $55K | UK £35K | Canada $60K",
  nurse: "USA $75K | UK £40K | Canada $70K",

  plumber: "USA $65K | UK £30K | Canada $55K",

  dentist: "USA $60K | UK £35K | Canada $50K"
};

function searchSalary() {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();
  let result = document.getElementById("result");

  if (data[input]) {
    result.innerText = data[input];
  } else {
    result.innerText = "No data found. Try: doctor, engineer, plumber, nurse";
  }
}
document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchSalary();
  }
});