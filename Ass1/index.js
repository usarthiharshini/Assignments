// All the JS Code for the Add Students Page Goes Here



var btn = document.getElementById('btn');



var admissionData =localStorage.getItem('admission')?JSON.parse( localStorage.getItem('admission')) :  [];

btn.addEventListener('click',() => {

    //localStorage.clear("admission");

    var uname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var course = document.getElementById('course').value;
    
    console.log("name"+uname)
    var studentObject = {
        name: uname,
        email: email,
        phone: phone,
        gender: gender,
        course: course
    }

   


   

    admissionData.push(studentObject);
 
    localStorage.setItem("admission",JSON.stringify(admissionData));

    
 
 });

