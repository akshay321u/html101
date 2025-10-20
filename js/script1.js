//get element by class name
//var a=document.getElementsByClassName(head1);
//a[2].innerText = "good morning";
//a[1].style.color="blue";

//get element by tag name
//let b=document.getElementsByTagName("h1");
//b[0].innerText="hello";
//b[2].style.color = "green";

//get element by name
var a=document.getElementsByName("text")[0];
var b=document.getElementById("head");

function message(){
    b.innerText="hello "+a.value;
}



