const is_Present = 1;

// uc1 Checking Attendance
let Attendance = Math.floor(Math.random() * 10) % 2;
if (Attendance == is_Present)
{
   console.log("Employee is Present");
   let empHrs;
   const wagePerHr = 20;
   // Calculating Daily wage of the employee
   let working_Hrs = (Math.floor(Math.random() * 10) % 2) + 1;
   function getWorkingHrs(working_Hrs)
   {
   switch (working_Hrs)
   {
   case 1:
    return 8;
    case 2:
       return 4;
   }
}
   empHrs = getWorkingHrs(working_Hrs);
   let emp_Monthly_wage = wagePerHr * empHrs;
   console.log("Working Hour of the Employee : " + empHrs);
   console.log("Employee's Daily wage : " + emp_Monthly_wage);

}
else
{
    console.log("Employee is Absent");
}