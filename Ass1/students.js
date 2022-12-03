// All the Code for All Students Page Goes Here

var studentData = JSON.parse(localStorage.getItem(("admission")));
console.log(studentData);

function handleFilter(){
  var filter = document.getElementById("filter").value;
  console.log(filter+"filjrnf");
  var filteredData = studentData.filter((ele)=> ele.course===filter)
  document.querySelector("tbody").innerHTML="";
  displayData(filteredData);
}



displayData(studentData);

function displayData(data){



data.map((student,index)=>{
//console.log(student);

  var tr =  document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText=student.name;
  var td2 = document.createElement("td");
  td2.innerText=student.email;
  var td3 = document.createElement("td");
  td3.innerText=student.course;
  var td4 = document.createElement("td");
  td4.innerText=student.gender;
  var td5 = document.createElement("td");
  td5.innerText=student.phone;

  var adbut = document.createElement("td");
  adbut.innerText="admitted";
  adbut.style.backgroundColor="brown";
  adbut.setAttribute("class","adbut");
  var rebut = document.createElement("td");
  rebut.innerText="rejected";
  rebut.style.backgroundColor="brown";

 tr.append(td1, td2, td3, td4, td5,adbut,rebut);

document.querySelector("tbody").append(tr);
adbut.addEventListener("click",()=>{
   

  var admittedStudents = localStorage.getItem("student-admitted")?JSON.parse(localStorage.getItem("student-admitted")):[];
  
  admittedStudents.push(student);
  
      localStorage.setItem("student-admitted",JSON.stringify(admittedStudents));

      console.log(data);
      data.splice(index, 1);
      localStorage.setItem("admission",JSON.stringify(data));
      document.querySelector("tbody").innerHTML="";
      displayData(data);
  })


  rebut.addEventListener("click",()=>{
   

    var rejectedStudents = localStorage.getItem("student-rejected")?JSON.parse(localStorage.getItem("student-rejected")):[];
    
    rejectedStudents.push(student);
    
        localStorage.setItem("student-rejected",JSON.stringify(rejectedStudents));
  
        console.log(data);
        data.splice(index, 1);
        localStorage.setItem("admission",JSON.stringify(data));
        document.querySelector("tbody").innerHTML="";
        displayData(data);
    })


})

}




