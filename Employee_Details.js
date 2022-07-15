let empHrs;
const working_dayspermonth = 20;
const wagePerHr = 20;
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
let totalEmpHrs = 0;
console.log("----------Employee Wage Calculator----------");
for (let day = 0; day < working_dayspermonth; day++)
{
    let working_Hrs = (Math.floor(Math.random() * 10) % 2) + 1;
   empHrs = getWorkingHrs(working_Hrs);
   totalEmpHrs = totalEmpHrs + empHrs;
}
   let emp_Monthly_wage = wagePerHr * empHrs;
   console.log("Working Hour of the Employee : " + empHrs);
   console.log("Employee's Daily wage : " + emp_Monthly_wage);