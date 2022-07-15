let empHrs;
const working_dayspermonth = 20;
const wagePerHr = 20;
let totalEmpHrs = 0;
const working_hourspermonth = 100;
let total_workingdays = 0;
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

console.log("----------Employee Wage Calculator----------");
while (totalEmpHrs <= working_hourspermonth && total_workingdays <= working_dayspermonth)
{
    let working_Hrs = (Math.floor(Math.random() * 10) % 2) + 1;
   empHrs = getWorkingHrs(working_Hrs);
   totalEmpHrs = totalEmpHrs + empHrs;
   total_workingdays++;
}
   let emp_Monthly_wage = wagePerHr * empHrs;
   console.log("Working Hour of the Employee : " + empHrs);
   console.log("Employee's Daily wage : " + emp_Monthly_wage);