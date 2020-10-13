document.write("<h1>HELLO WORLD js</h1>");
document.write("<h2>HELLO WORLD </h2>");//statements
var num=16;
var Name="chinmoye"
var flag=true;

// alert(num);
document.write(num);
document.write(Name);
document.write(flag);

// ....................////operator///.............................

var a=3;
var b=6;
var c=10;
var result = 'a'+b+c;
var result2=a+(b*c);//* has higher precedence 
document.write("<h2>Result is : "+result+"</h2>");
document.write("<h2>Result is : "+result2+"</h2>");

////////////////////////////Control statement////////////////////////////

var a=7;
if(a>0)
{
	document.write("<h2> IT's POSITIVE :"+a+"</h2>");

}
else if(a<0)
{
	document.write("<h2> IT's NEGATIVE :"+a+"</h2>");
}
else
{
	document.write("<h2> IT's INVALID :"+a+"</h2>");
}

/////////////SWITCH CASE//////////////////////////

var day="chinmoyee";
//can accept numbers , booleans and string values as well
switch(day+" adhikari")
{
	case "chinmoyee adhikari":
			document.write('apun ka naam');
			break;
	// case 2:
	// 		document.write('Monday');
	// 		break;
	// case 3:
	// 		document.write('Tuesday');
	// 		break;
	// case 4:
	// 		document.write('wednessday');
	// 		break;
	// case 5:
	// 		document.write('Thursday');
	// 		break;
	// case 6:
	// 		document.write('Friday');
	// 		break;
	// case 7:
	// 		document.write('Saturday');
	// 		break;
	// default :
	// 		document.write('Invalid!');

}

//////////FORLOOP///////////////////////////
//for loop is used when number of iteration is known in advance

 for(var x=1;x<=10;x++)
 {
 	
    document.write("<h1>"+(5*x)+"</h1>");
 }


for(var y =2;y<=10;y+=2)
{
	document.write("<h2>"+(y)+"</h2>");
}
