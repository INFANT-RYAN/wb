//selecting
var Name=document.getElementById("name")
var PhNo=document.getElementById("phno")
var mail=document.getElementById("mail")
var  msg=document.getElementById("msg")
const pattern = /^\d{10}$/
var isValid = pattern.test(PhNo)
function validate()
{
    if(Name.value==""){
        alert("Fill the Name")
    }
    if(msg.value==""){
        alert("msg field should be filled")
    }
}
