// All the Code for the Rejected page goes here
var rejectedStudents = JSON.parse(localStorage.getItem("student-rejected"));

rejectedStudents.map((ele)=>{

    var row = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerText=ele.name;
var td2 = document.createElement("td");
td2.innerText=ele.email;
var td3 = document.createElement("td");
td3.innerText=ele.course;
var td4 = document.createElement("td");
td4.innerText=ele.gender;
var td5 = document.createElement("td");
td5.innerText=ele.phone;

row.append(td1,td2,td3,td4,td5);
document.querySelector("tbody").append(row);
})