function vd()
{
	var fn=document.getElementById("firstname").value;
	var ln=document.getElementById("lastname").value;
	var em=document.getElementById('Email').value;
	var pas=document.getElementById("pass").value;
	if(fn==null||fn==""||ln==null||ln=="")
	{
		window.alert("Enter first and second name...");
		return false;
	}
	else if(em==null||em=="")
	{
		window.alert("Enter the email...");
		return false;	
	}
	else if(pas.length<6)
	{
		window.alert('Wrong password... Password should be minimum 6 letters...');
		return false;
	}
	else
	{
		window.alert('regstring new user on progress');
	}
}