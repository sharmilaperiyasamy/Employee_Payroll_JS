let empHrs;
const working_dayspermonth = 20;
const wagePerHr = 20;
let totalEmpHrs = 0;
const working_hourspermonth = 100;
let total_workingdays = 0;
let dailyWagesArr = new Array();
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
}


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

//UC7G no. of days employee worked.
let presentDays = 0;
dayWithWageDic.forEach((value, key) => {
    if (value != "0")
        presentDays++;
})
console.log("Employee worked for "+ presentDays +" Days.");