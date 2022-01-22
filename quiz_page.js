var preloader = document.getElementById("loading");

function remove () {
 preloader.style.display = 'none';
}
function send () {
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

question_number="<h4>"+ number1 +" X "+ number2 +"</h4>";
input_box= "<br>Answer:<input id='input_check_box' type='text'>";
check_box="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = question_number + input_box + check_box;

document.getElementById("output").innerHTML = row;

document.getElementById("number_1").value="";
document.getElementById("number_2").value="";

}