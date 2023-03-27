// let userName = document.getElementById('username'),
// 	email = document.getElementById('email'),
//     password= document.getElementById('password');


// let id = (id) => {
// 	return document.getElementById(id)
// }

let id = (id) => document.getElementById(id);
let classes = (classes) =>document.getElementsByClassName(classes);

let userName = id('username'),
	email = id('email'),
	password = id('password'),
	passwordConform = id('password-conform'),
	myForm = id('form'),
	myContent = id('content'),
	social = id('social'),
	formSendMsg = id('form-send-msg'),
	errorMsg = classes('error'),
	successIcon = classes('success-icon'),
	failureIcon = classes('failure-icon');

	// errorMsg[2].innerHTML = "usydauid";
	

generateContentBlock = () =>{
	myContent.innerHTML = `<div class="logo">
							<img width="200"src="./images/logo.png" alt="">
						</div>
						<div class="left-section-contact">
							<h1  class="about-contact-left">Contact Me</h1>
							<div class="phone-email">
							<p><i class="fa-solid fa-envelope"></i>abc@xyz.com</p>
							<p><i class="fa-solid fa-phone"></i>+358000000</p>
							</div>
							<div class="social-icon">
								<a href="https://www.linkedin.com/in/rachita-upreti-07757177/"><i class="fa-brands fa-linkedin"></i></a>
								<a href="https://www.linkedin.com/in/rachita-upreti-07757177/"><i class="fa-brands fa-twitter"></i></a>
								<a href="https://www.linkedin.com/in/rachita-upreti-07757177/"><i class="fa-brands fa-facebook-f"></i></a>
								<a href="https://www.linkedin.com/in/rachita-upreti-07757177/"><i class="fa-brands fa-whatsapp"></i></a>
								<a href="https://www.linkedin.com/in/rachita-upreti-07757177/"><i class="fa-brands fa-instagram"></i></i></a>
								<a href="https://github.com/upretirachita"><i class="fa-brands fa-github"></i></a>
							</div>
							<p><i class="fa-solid fa-file"></i>
							<a href="./images/form1.jpg" download class="more-work download-cv">Download CV</a></p>
					
						</div>
							`
}
generateContentBlock();

generateSocialBlock = () =>{
	social.innerHTML = `<div class="title">Get Started</div>
	<div class="question">
		Do You already have an account? <br>
		<span>Sign In</span>
	</div>
	<div class="social-btn">
		<div class="btn-1">
			<img src="https://img.icons8.com/color/35/000000/google-logo.png"/>
			Sign Up
		</div>
		<div class="btn-2">
			<img src="https://img.icons8.com/ios-filled/35/ffffff/facebook-new.png"/>
			Sign Up 
		</div>
	</div>
	<div class="or">OR</div>
							`
}

generateSocialBlock();



myForm.addEventListener('submit', (event) =>{
	event.preventDefault();
	// errorMsg[2].innerHTML = "usydauid";
	if (password.value === passwordConform.value){
		formConfirmation();
		formSubmission();
	}
	else{
		alert('Try again for valid password');
		return false
	}
	
},false);

let userInputValidation = (id,serial,message) => {
	if(id.value.trim() === ''){
		errorMsg[serial].innerHTML = message;
		failureIcon[serial].style.opacity = '1';
		successIcon[serial].style.opacity = '0';
	}
	else {
		errorMsg[serial].innerHTMYL = '';
		failureIcon[serial].style.opacity = '0';
		successIcon[serial].style.opacity = '1';
	}
}

formConfirmation = () => {
	userInputValidation(userName,0,'Please Enter Your Name');
	userInputValidation(email,1,'Please Enter Your Email');
	userInputValidation(password,2,'Please Enter Your Password');
	userInputValidation(passwordConform,3,'Please Enter Your For Conformation');
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxpOInNUbg6B569HRuJZCWqf14EP-ks12SEK9juBfTmjKNUDoELecfS-SelFVJnqqsI/exec'
const form = document.forms['submit-to-google-sheet']

let formSubmission = () =>{
	console.log('error',password.value)
	console.log('error1',passwordConform.value);
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response =>{
		formSendMsg.innerHTML = 'Your have Submitted';
		setTimeout(function(){
			formSendMsg.innerHTML = '';
		},5000)

		form.reset()
	} )
	.catch(error => console.error('Error!', error.message))
}
