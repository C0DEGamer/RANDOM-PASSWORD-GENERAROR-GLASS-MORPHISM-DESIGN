
        
        var pass=document.querySelector("#pass");
        var button=document.querySelector("#btn").addEventListener('click',generate);

        function generate(){
            
const upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const number=[0,1,2,3,4,5,6,7,8,9];
const symbol=['@','#','*','^','$','=','|','.'];

var uindx=Math.floor(Math.random()*upper.length);
var lindx=Math.floor(Math.random()*lower.length);
var nindx=Math.floor(Math.random()*number.length);
var sindx=Math.floor(Math.random()*symbol.length);

var uindx1=Math.floor(Math.random()*upper.length);
var lindx1=Math.floor(Math.random()*lower.length);
var nindx1=Math.floor(Math.random()*number.length);
var sindx1=Math.floor(Math.random()*symbol.length);



var passwordorder1=upper[uindx]+lower[lindx]+number[nindx]+symbol[sindx]+number[nindx1]+upper[uindx1]+symbol[sindx1]+lower[lindx1];
var passwordorder2=lower[lindx]+number[nindx]+upper[uindx]+number[nindx1]+symbol[sindx]+upper[uindx1]+symbol[sindx1]+lower[lindx1];
var passwordorder3=upper[uindx1]+upper[uindx]+symbol[sindx]+lower[lindx]+lower[lindx1]+symbol[sindx1]+number[nindx]+number[nindx1]



 var randomorder=Math.floor(Math.random()*3);

 switch(randomorder){

case 0:
    pass.innerHTML=passwordorder1;
    break;
case 1:
    pass.innerHTML=passwordorder2;
    break;
case 3:
     pass.innerHTML=passwordorder3;
     break;

 }




}
        



    
