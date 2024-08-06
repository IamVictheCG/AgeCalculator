let birthDay = document.getElementById("day")
let birthMonth = document.getElementById("month")
let birthYear = document.getElementById("year")
//=================================================
let ageYears = document.getElementById("ageYears")
let ageMonths= document.getElementById("ageMonths")
let ageDays = document.getElementById("ageDays")
let ageCalculatorButton = document.getElementById("button")

function ageCalculator() {
    let date = new Date();
    console.log(date);
    let currentYear = date.getFullYear()
    let currentMonth = date.getUTCMonth() + 1;
    let currentDay = date.getDate()
    console.log(currentYear);
    console.log(currentMonth);
    console.log(currentDay);

    let totalYears = currentYear - Number(birthYear.value);
    let totalMonths = currentMonth - Number(birthMonth.value);
    let totalDays = currentDay - Number(birthDay.value);

    if (totalDays < 0) {
        totalMonths -= 1;
        totalDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    };
    
    if (totalMonths < 0) {
        totalYears -= 1;
        totalMonths += 12;
    }
    
    ageYears.innerText = totalYears;
    ageMonths.innerText = totalMonths;
    ageDays.innerText = totalDays;
    console.log(typeof(Number(birthYear)));
    console.log(birthYear.value);
    console.log(`${currentYear - birthYear}`);
}

ageCalculatorButton.addEventListener("click", ageCalculator)
// ageCalculator()