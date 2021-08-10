
var data = []
function openvideo1(){
	//targeting the mid div and changing it to empty
		$('#divmid').html('');
		//appending the video everytime we click the button(the source of video will be changing manually)
		$('#divmid').append('<video controls class="video"><source src="video1.mp4" type="video/mp4" autoplay ></video>');
	}
	function openvideo2(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video2.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo3(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video3.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo4(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video4.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo5(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video5.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo6(){
$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video6.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo7(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video7.mp4" type="video/mp4" autoplay ></video>')
	}
	
	function jsvideos(){
		//MAKING THE RIGHT DIV EMPTY
		$('#divright').html('')
		//appending to the right div a list of buttons and they contain a class and a function when we click on the button it will invoke another function
		$('#divright').append('<button class="jsbtn1" onclick="openvideo1()"><div></div>Intro to js<br><br></button><br><br><button class="jsbtn2" onclick="openvideo2()">Tutorial 1</button><br><br><button class="jsbtn3" onclick="openvideo3()">Tutorial 2</button><br><br><button class="jsbtn4" onclick="openvideo4()">Tutorial 3</button><br><br><button class="jsbtn5" onclick="openvideo5()">Tutorial 4</button><br><br><button class="jsbtn6" onclick="openvideo6()">Tutorial 5</button><br><br><button class="jsbtn6" onclick="openvideo7()">Tutorial 6</button><br><br>');

	}
	function cssvideos(){
		//the same thing like the previous function of js subject
		$('#divright').html('')
		$('#divright').append('<button class="cssbtn1" onclick="opencssvideo1()"><div></div>Intro to CSS<br><br></button><br><br><button class="cssbtn1" onclick="opencssvideo2()">Tutorial 1</button><br><br><button class="cssbtn1" onclick="opencssvideo3()">Tutorial 2</button><br><br><button class="cssbtn1" onclick="opencssvideo4()">Tutorial 3</button><br><br><button class="cssbtn1" onclick="opencssvideo5()">Tutorial 4</button><br>');
	}
	function htmlvideos(){
		$('#divright').html('');
	}

function opencssvideo1(){
	//targeting the mid div and changing it to empty
	$('#divmid').html('');
	//appending the video everytime we click the button(the source of video will be changing manually)
		$('#divmid').append('<video controls class="video"><source  src="css1.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo2(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="css2.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo3(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video" ><source src="css3.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo4(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video" > <source src="css4.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo5(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video" ><source src="css5.mp4" type="video/mp4" autoplay ></video>');
}

function verif(){
	console.log('here')
	//bringing the password from html page and putting it in pass
	var pass=document.getElementById('pass').value;
	//bringing the username from html page and putting it in user
	var user=document.getElementById('username').value;
	// creating variables to test them with function test inside the if condition later
	var pattsym=/[^a-zA-Z0-9]/;
	var patt=/[a-z]/;
    var patt2=/[A-Z]/;
    var patt3=/[0-9]/;
 //checking if our password follow the rules(password length is more than 8 and the password is strong)
    if(pattsym.test(pass)&&pass.length>=8)
    	//if yes alert 
	{ alert("Your Are In");
		//adding the data to the local storage with username as a key and the pass as a value
		localStorage.setItem(user,pass);
		$(location).attr('href','webpage tubify.html');
	}	
		else{
			//if yes alert a message
			alert("verify your informations");
		}
}
function verifLogIn(){
	//bringing the email from html page and putting it in email
	var email = document.getElementById('emails').value
	//bringing the pass from html page and putting it in pass
	var pass=document.getElementById('pass').value;
	//bringing the username from html page and putting it in username
	var username=document.getElementById('username').value;
	//storing the password with username as key
	var pswd=localStorage.getItem(username);   
	//variable for the check of the email
	var pate= /@/
    console.log(pate.test(email))
    //checking if the pass of the input is existed in the local storage
	if(pswd===pass&& pate.test(email)){
		//if yes we ll change the location to the main page
		$(location).attr('href','webpage tubify.html');
	}
	else{
		//if no it will show an error message
		alert("Your password ,your email or your username is wrong !");
	}


}
