function Validation(){
	let fName = document.querySelector('#fname').value;
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	let cpassword = document.querySelector('#Cpassword').value;
	let number = document.querySelector('#number').value;

	console.log(`User First Name ${fName}`);
	console.log(`User Email Id ${email}`)
	console.log(`User Password ${password}`)
	console.log(`Confirm Password ${cpassword}`)
	console.log(`User Phone number ${number}`);

	// Name //
	let reg_Name = /^[a-zA-Z ]{2,30}$/;
	if(reg_Name.test(fName)) {
		document.querySelector('#fname').style.border = '2px solid green';
	}
	else {
		document.querySelector('#fname').style.border = '2px solid red';
		return false;
	}

	// Email //
	let reg_Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(reg_Email.test(email)) {
		document.querySelector('#email').style.border = '2px solid green';
	}
	else {
		document.querySelector('#email').style.border = '2px solid red';
		return false;
	}

	//Password //
	let reg_pswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	if(reg_pswd.test(password)) {
		document.querySelector('#password').style.border = '2px solid green';
	}
	else {
		document.querySelector('#password').style.border = '2px solid red';
		return false;
	}

	// Confirm Password //
	if(cpassword === password) {
		document.querySelector('#Cpassword').style.border = '2px solid green';
	}
	else {
		document.querySelector('#Cpassword').style.border = '2px solid red';
		return false;
	}

	// Number //
	let reg_Num = /^[0-9]*\d$/;
	if(reg_Num.test(number)) {
		document.querySelector('#number').style.border = '2px solid green';
	}
	else {
		document.querySelector('#number').style.border = '2px solid red';
		return false;
	}

	alert (`Thank you ${fName} for your valuable time.`)
}
// ToolTip JQUERY Code //
$(document).ready(function(){
  $('.form-control').tooltip({
    html: true,
    animation: true,
    delay: {"show": 0, "hide": 500}
  });
  $('.btn-block').tooltip({
    html: true,
    animation: true,
     title: "Registered Yourself &#128515;"
  });

  $('#facebook').tooltip({
    html: true,
    animation: true,
     title: "Facebook"
  });
  $('#google').tooltip({
    html: true,
    animation: true,
     title: "GOOGLE+"
  });
  $('#twitter').tooltip({
    html: true,
    animation: true,
     title: "Twitter"
  });
  $('#insta').tooltip({
    html: true,
    animation: true,
     title: "Instagram"
  });
  $('#youtube').tooltip({
    html: true,
    animation: true,
     title: "You Tube"
  });
}); 

