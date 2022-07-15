
const is_Present = 1;

// uc1 Checking Attendance
let Attendance = Math.floor(Math.random() * 10) % 2;
if (Attendance == is_Present)
{
   console.log("Employee is Present");
   let empHrs;
   const wagePerHr = 20;
   // Calculating Daily wage of the employee
   let working_Hrs = (Math.floor(Math.random() * 10) % 3) + 1;
   switch (working_Hrs)
   {
   case 1:
    empHrs = 8;
    break;
    case 2:
        empHrs = 4;
        break;
   }
   let emp_Monthly_wage = wagePerHr * empHrs;
   console.log("Employee's Daily wage : " + emp_Monthly_wage);
}
else
{
    console.log("Employee is Absent");
}