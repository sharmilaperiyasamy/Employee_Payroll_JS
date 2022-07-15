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
dailyWagesArr.forEach(element => {
    console.log("Day "+ day +" Wage: "+ element);
    day++;
});
   let emp_Monthly_wage = totalEmpHrs * wagePerHr;
   console.log("Working days per month : " + total_workingdays);
   console.log("Working Hour of the Employee : " + totalEmpHrs);
   console.log("Employee's monthly wage : " + emp_Monthly_wage);