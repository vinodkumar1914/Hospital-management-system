function vd()
{
	var name=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	var letters= /^[A-Za-z]+$/;
	var pas=/[a-zA-Z0-9]/
	if(name==null||name=="")
	{
		window.alert('Enter username');
		return false;
	}
	else if(pass.length<6)
	{
		window.alert('Wrong password..password should be minimum 6 letters');
		return false;
	}
	else
	{
		window.alert("login Successful...try another");
		return true;
	}
}
