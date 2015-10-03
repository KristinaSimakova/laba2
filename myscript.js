var text="";
function addcoment(){
	var name=document.getElementById("txt4").value;
	var q=document.getElementById("txt").value;
    document.getElementById("1").innerHTML=text;
    text= text+name+":"+" "+q+"<br>"
    document.getElementById("2").innerHTML=name+":"+" "+q;
    document.getElementById("txt").value="";
    document.getElementById("txt4").value="";
}


 



