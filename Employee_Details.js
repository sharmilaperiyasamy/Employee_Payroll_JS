const is_Present = 1;
let Attendance = Math.floor(Math.random() * 10) % 2;
if (Attendance == is_Present)
{
   console.log("Employee is Present"); 
}
else
{
    console.log("Employee is Absent");
}