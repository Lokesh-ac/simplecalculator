
var rstring="";


// getting input from html
function obtainInputOne(){
  const a=parseInt(document.getElementById("one").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputTwo(){
  const a=parseInt(document.getElementById("two").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputThree(){
  const a=parseInt(document.getElementById("three").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputFour(){
  const a=parseInt(document.getElementById("four").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputFive(){
  const a=parseInt(document.getElementById("five").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputSix(){
  const a=parseInt(document.getElementById("six").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputSeven(){
  const a=parseInt(document.getElementById("seven").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputEight(){
  const a=parseInt(document.getElementById("eight").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputNine(){
  const a=parseInt(document.getElementById("nine").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
function obtainInputZero(){
  const a=parseInt(document.getElementById("zero").value);
  rstring+=a;
   document.getElementById("result").innerHTML=rstring;
}
// getting input from innerHTML



// clearing all input
function clearall()
{
  rstring="";
  document.getElementById("result").innerHTML=rstring;
}
// clearing all input



// operator intaking
function obtainOperatorAdd()
{
    const b=document.getElementById("add").value;
     rstring+=b;
     document.getElementById("result").innerHTML=rstring;

}
function obtainOperatorSub()
{
    const b=document.getElementById("subtract").value;
    rstring+=b;
    document.getElementById("result").innerHTML=rstring;

}
function obtainOperatorDiv()
{
    const b=document.getElementById("divide").value;
    rstring+=b;
    document.getElementById("result").innerHTML=rstring;

}
function obtainOperatorMul()
{
    const b=document.getElementById("multiply").value;
    rstring+=b;
    document.getElementById("result").innerHTML=rstring;

}
// taking operator input


// Calculate Result part-2

function calculateResult()
{
  var num1="",num2="";
  var res="";
  var oper="";
  for(let i=0;i<rstring.length;i++)
  {
       // here is an error
    if(isNaN(rstring.charAt(i))===false)
    {

      num1+=rstring.charAt(i);
    }
    else
    {
      oper=rstring.charAt(i);
      num2=rstring.slice(i+1,rstring.length);
      break;
    }
  }

  switch(oper)
  {
    case "+":res=parseInt(num1)+parseInt(num2);

    break;
    case "-":res=parseInt(num1)-parseInt(num2);

    break;
    case "x":res=parseInt(num1)*parseInt(num2);

    break;
    case "/":res=parseInt(num1)/parseInt(num2);
             res=res.toFixed(5);

  }
    document.getElementById("result").innerHTML=res;
    res="";
    rstring="";
}








// to follow bodmass division
  /*if(rstring.charAt(i)==="/")
  {
     let j=i-1,k=i+1,res=0;
     let num1="",num2="";

     while(isNaN(rstring.charAt(j))===false)
     {
       num1+=rstring.charAt(j);
       j--;
     }
     while(isNaN(rstring.charAt(k))===false)
     {
       num2+=rstring.charAt(k);
       k++;
     }
     let substr=rstring.substring(j+1,k);
     res=parseInt(num1)/parseInt(num2);
     rstring=rstring.replace(substr,res);
     i=0;
  }

// to follow bodmass multiplication
  else if(rstring.charAt(i)==="x")
  {
     let j=i-1,k=i+1,res=0;
     let num1="",num2="";

     while(isNaN(rstring.charAt(j))===false)
     {
       num1+=rstring.charAt(j);
       j--;
     }
     while(isNaN(rstring.charAt(k))===false)
     {
       num2+=rstring.charAt(k);
       k++;
     }
     let substr=rstring.substring(j+1,k);
     res=parseInt(num1)*parseInt(num2);
     rstring=rstring.replace(substr,res);
     i=0;
  }

// to follow bodmass addition
  else if(rstring.charAt(i)==="+")
  {
     let j=i-1,k=i+1,res=0;
     let num1="",num2="";
     while(isNaN(rstring.charAt(j))===false)
     {
       num1+=rstring.charAt(j);
       j--;
     }
     while(isNaN(rstring.charAt(k))===false)
     {
       num2+=rstring.charAt(k);
       k++;
     }
     let substr=rstring.substring(j+1,k);
     res=parseInt(num1)+parseInt(num2);
     rstring=rstring.replace(substr,res);
     i=0;
  }

  // to follow bodmass subtraction

  if(rstring.charAt(i)==="-")
  {
     let j=i-1,k=i+1,res=0;
     let num1="",num2="";

     while(isNaN(rstring.charAt(j))===false)
     {
       num1+=rstring.charAt(j);
       j--;
     }
     while(isNaN(rstring.charAt(k))===false)
     {
       num2+=rstring.charAt(k);
       k++;
     }
     let substr=rstring.substring(j+1,k);
     res=parseInt(num1)*parseInt(num2);
     rstring=rstring.replace(substr,res);
     i=0;
  }*/
