let empHrs;
const working_dayspermonth = 20;
const wagePerHr = 20;
let totalEmpHrs = 0;
const working_hourspermonth = 100;
let total_workingdays = 0;
let dailyWagesArr = new Array();
let empDailyHrsAndWage = new Array();
   // Calculating Daily wage of the employee
   //creating function
   function getWorkingHrs(working_Hrs)
   {
   switch (working_Hrs)
   {
   case 1:
    return 8;
    case 2:
       return 4;
       default :
       return 0;
   }
}
function dailyWage(empHrs)
{
    return empHrs * wagePerHr;
}

console.log("----------Employee Wage Calculator----------");
while (totalEmpHrs <= working_hourspermonth && total_workingdays <= working_dayspermonth)
{
    let working_Hrs = (Math.floor(Math.random() * 10) % 2) + 1;
   empHrs = getWorkingHrs(working_Hrs);
   dailyWagesArr.push(dailyWage(empHrs));
   totalEmpHrs = totalEmpHrs + empHrs;
   total_workingdays++;
    // UC10 to store day, Hours and wage in one object.
    empDailyHrsAndWage.push({
        day:total_workingdays,
        dailyHrs:empHrs,
        onedayWage:dailyWage(empHrs),
        toString()    {
            return "\nDay: "+ this.day +" Working Hours: "+ this.dailyHrs +" Wage: "+ this.onedayWage
            }
    });
}
console.log("Employee Details (uc10):"+ empDailyHrsAndWage);

let day = 1;
let dayWithWageDic = new Map;
dailyWagesArr.forEach(element => {
    console.log("Day : "+ day +" Wage : "+ element);
    dayWithWageDic.set(day, element);
    day++;
});
   let emp_Monthly_wage = totalEmpHrs * wagePerHr;
   //let emp_Monthly_wage = dailyWage(empHrs);
   console.log("Working days per month : " + total_workingdays);
   console.log("Working Hour of the Employee : " + totalEmpHrs);
   console.log("Employee's monthly wage : " + emp_Monthly_wage);


let wageForOneDay = dailyWage(empHrs);
let wagepermonth = 0;
function sum(wageForOneDay)
{
    wagepermonth += wageForOneDay;
}
dailyWagesArr.forEach(sum);
console.log("Total monthly wage using foreach method: "+ wagepermonth);

//UC7C - Day when full day wage of 160 is earned.
function fullDayWage(wageForOneDay)
{
    console.log("Days When full day wage of 160 is earned:");
    dayWithWageDic.forEach((value, key) => {
        if (value == "160")
        console.log("Day : "+ key +" Wage : "+ value);
    })
}
fullDayWage(wageForOneDay);

//UC7D - first occurrence of full day wage.
for (var [key, value] of dayWithWageDic)
{
    if (value == "160")
    {
        var first = key;
        break;
    }
}
console.log("First occurrence of full day wage is at Day "+ first);

//UC7F part time wages
console.log("Days When part time wage of 80 is earned:");
dayWithWageDic.forEach((value, key) => {
    if (value == "80")
        console.log("Day "+ key +" Wage "+ value);
})

//UC7G number of days employee worked.
let presentDays = 0;
dayWithWageDic.forEach((value, key) => {
    if (value != "0")
        presentDays++;
})
console.log("Employee worked for "+ presentDays +" Days.");

//UC9- using Arrow functions
let noWorkDaysArr = new Array();
let fullTimeDaysArr = new Array();
let partTimeDaysArr = new Array();
dayWithWageDic.forEach((value, key)=>{
    if (value == "160")
    fullTimeDaysArr.push(key);
    else if (value == "80")
    partTimeDaysArr.push(key);
    else
        noWorkDaysArr.push(key);
});
console.log("No Working Days: "+ noWorkDaysArr);
console.log("Full Working Days: "+ fullTimeDaysArr);
console.log("Part time working Days: "+ partTimeDaysArr);


//UC11A - Total Hrs and Wages using Arrow function.
let totalHrsArrow = empDailyHrsAndWage
                    .filter(dailyHours => dailyHours.dailyHrs > 0)
                    .reduce((totalHrsArrow, dailyHours) => totalHrsArrow += dailyHours.dailyHrs, 0);
let totalWageArrow = empDailyHrsAndWage
                    .filter(dailyWages => dailyWages.onedayWage > 0)
                    .reduce((totalWageArrow, dailyWages) => totalWageArrow += dailyWages.onedayWage, 0);
console.log("UC11 - \nTotal Hours "+ totalHrsArrow +"\nTotal Wages: "+ totalWageArrow);
console.log("------------------------------------------------------------");
//UC11B - Full Work day 
console.log("UC11 B - Full Time Working Day using Arrow Function.")
empDailyHrsAndWage.filter(fullday => fullday.dailyHrs == 8)
                    .forEach(fullday => console.log(fullday.toString()));
console.log("------------------------------------------------------------");
//UC11C - Part time day
console.log("UC11 C - Part Time working days using Arrow functions.");
empDailyHrsAndWage.filter(partTime => partTime.dailyHrs == 4)
                    .forEach(partTime => console.log(partTime.toString()));

console.log("------------------------------------------------------------");                   
//UC11D - No working Days 
let noWorkDay = empDailyHrsAndWage.filter(noWork => noWork.dailyHrs == 0)
                                    .map(noWork => noWork.day);
console.log("UC11 D - No working days using Map functions.\n"+ noWorkDay);