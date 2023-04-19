document.write("<h1>QUESTIONS OF CHAPTER 21__25</h1>");

// //         QUESTION # 1
var firstName=prompt("Enter your first name : ");
var lastName=prompt("Enter your last name : ");
var fChar=firstName.slice(0,1);
fChar=fChar.toUpperCase();
var remaningChar=firstName.slice(1);
remaningChar=remaningChar.toLowerCase();
var lfchar=lastName.slice(0,1);
lfchar=lfchar.toUpperCase();
var lchar=lastName.slice(1);
lchar=lchar.toLowerCase();
var fullName=fChar+remaningChar+"  "+lfchar+lchar;
alert("Hello ,  \nWelcome  "+fullName);

//  QUESTION # 2
var mobilePhone=prompt("Enter your favourite Mobile Phone Model  ");
var length = mobilePhone.length;
document.write("<h1>QUESTION # 2</h1>");
document.write("My Favourite Mobile Phone Model is : "+mobilePhone+ "<br>Length of String : "+length);

//QUESTION # 3
var string = "Pakistani";
var result = string.indexOf("n");
document.write("<h1>QUESTION # 3</h1>");
document.write("String : Pakistani <br>index of 'n': "+result);

//QUESTION # 4
var string = "Hello World";
var result = string.lastIndexOf("l");
document.write("<h1>QUESTION # 4</h1>");
document.write("String : "+string+ "<br>last index of 'l': "+result);

//QUESTION # 5
var string = "Pakistani";
var result = string.charAt(3);
document.write("<h1>QUESTION # 5</h1>");
document.write("String : Pakistani <br>character at index 3 : "+result);

//QUESTION # 6
var firstName=prompt("Enter your first name : ");
var lastName=prompt("Enter your last name : ");
var fullName = firstName.concat(" ",lastName);
document.write("<h1>QUESTION # 6</h1>");
document.write("Concatenate String by using concate method <br>",fullName);

// QUESTION # 7
var city = "Hyderabad";
var replace = city.replace("Hyder","Islam");
document.write("<h1>QUESTION # 7</h1>");
document.write("City : ",city,"<br>After replacement :",replace);

// QUESTION # 8
var message = "“Ali and Sami are best friends. They play cricket and football together.”";
var replace = message.replace(/and /g ," & ");
document.write("<h1>QUESTION # 8</h1>");
document.write("Message :",message,"<br> Message after replacement : ",replace);

// QUESTION # 9
document.write("<h1>QUESTION # 9</h1>");
var value = "472";
document.write( "Value : ",value ,"<br> Type : ",typeof(value),"<br>");
var v = parseInt(value);
document.write("Value : ", v,"<br> Type : ",typeof(v));

//sQUESTION # 10
document.write("<h1>QUESTION # 10</h1>");
var enput = prompt("Enter String : ");
var uperCaseEnput = enput.toUpperCase();
document.write("User Input : ", enput,"<br> Upper Case : ",uperCaseEnput);

// QUESTION # 11
document.write("<h1>QUESTION # 11</h1>");
var enput = prompt("Enter String : ");
var fChar = enput.slice(0,1);
fChar = fChar.toUpperCase();
var remaingString = enput.slice(1);
remaingString = remaingString.toLowerCase();
var titleCase = fChar + remaingString;
document.write("User Input : ", enput,"<br> Title Case : ",titleCase);

//QUESTION # 12
document.write("<h1>QUESTION # 12</h1>");
var num = 35.35;
var sNum =num.toString();
var fString = sNum.replace(".","");
// num1 = sNum.slice(0,2);
// num2 = sNum.slice(3);
// var fString =num1 + num2;
document.write("Number : ",num,"<br> Result :",fString);

//QUESTION # 13
document.write("<h1>QUESTION # 13</h1>");
var enput = prompt("Enter user name : ");
var specialChar=["@","!",",","."];
for(var i = 0; i<specialChar.length; i++){
    for (var j = 0 ; j<enput.length ; j++){
        if( specialChar[i]==enput[j]){
            alert("Please enter a valid user name ");
           
            document.write("User input : "+enput+" <br>Please enter a valid user name ");
        }
    }
}

//QUESTION # 14
document.write("<h1>QUESTION # 14</h1>");
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var enput = prompt("Welcome to Mom's Bakery .what do you want to order sir/ma'am?");
var flag = false;
for (var j = 0; j < A.length; j++) {
    if (enput === A[j]) {
        document.write(enput + " is<b> avaliable</b> at index " + j + " in our bakery.");
        flag = true;
        break;
    }
}
if (flag == false) {
    document.write("We are sorry. " + enput + " is<b> not avaliable</b> in our bakery.");
}

// QUESTION # 16
document.write("<h1>QUESTION # 16</h1>");
var uni = "University of Karachi";
var array = uni.split("");
for (var i = 0 ; i < array.length ; i++){
    document.write("<center>"+array[i]+"<br></center>");
}

// QUESTION # 17
document.write("<h1>QUESTION # 17</h1>");
var enput = prompt("Enter User Input ","Pakistan");
var result = enput.charAt(enput.length-1);
document.write("User Input : "+enput+"<br>Last Character of Input : "+result);

// QUESTION # 18
document.write("<h1>QUESTION # 18</h1>");
var string="The quick brown fox jumps over the lazy dog.";
var check  = string.match(/the/gi ,"<br>");
document.write("Text : "+string+"<br>There are "+ check.length+" occurrence(s) of word 'the'");



    