var i = 0;
function postFunction()
{
    var Text1 = document.getElementById("text1").value;
    if(i == 0)
    {
        document.getElementById("topic1").innerHTML = Text1;
        i++;
    }
    else if(i == 1)
    {
        document.getElementById("comment1").innerHTML = Text1;
        i++;
    }
   else
   {
        document.getElementById("comment2").innerHTML = Text1;
   }
}
function clearFunction()
{
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    i = 0;
}