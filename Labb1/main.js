 "use strict";



  // Del 1
var name= "Sebastian";

console.log(name) ; 

// Del 2

// fråga 1 Svar= inga snuttar som anropar strängen console.log( hello );



var hobby = "Programering";

console.log(hobby) ;
// Del 3
// Uppgift 1
 console.log( "Uppgift 3." );
 console.log( 5 * 2 <=  12 );
 console.log( 55 >=  22 );
 console.log( 16 / 4 ==  4 );
 console.log( 8 + 2 <  128 );
 console.log( 32 * 8  != 255 );

// Fråga 2
 var name = "Jane Doe";
 // Vi utelämnar den andra siffran Svar= Den skriver endast ut från siffra fem från name alltså enbart due
 console.log( name.substring(5) );

 //Uppgift 2
 var string1 = "Tisdag!";
 var string2 = "Hamburgare";
 var string3 = "I'll be back!";
 
 console.log( string1.substring(0, 3) );
 console.log( string2.substring(3, 10) );
 console.log( string3.substring(5, 12) );

//Uppgift 3


 var title = "It's Learning";
 var firstPart = title.substring(5, 14);
 // Skriv ut värdet i versaler
 console.log( firstPart.toUpperCase() );


  var title = "JavaScript: The Good Parts";
 var firstPart = title.substring(16, 26);
 // Skriv ut värdet i versaler
 console.log( firstPart.toUpperCase() );

 //Upgift4

  // En vektor av åldrar
 var ages = [20, 21, 22, 23, 24];
 
 // Utskrift av ett element (det tredje i detta fallet)
 console.log( ages[2] );
 // Jämför första och sista elementet
 console.log( ages[0] < ages[4] );
 // Summera, exempelvis de tre första elementen
 console.log( ages[0] + ages[1] + ages[2] );
 // Vi kan även skriva ut längden (antal) element
 console.log( ages.length );


 //uppgift 4


 var numbers = [128, 256, 512, 1024, 2048];

 var numbers1 = numbers[0] + numbers[1] + numbers[2]+ numbers[3]+ numbers[4];

 var numbers2 = numbers.length;

var avg = numbers1 / numbers2;

var allnumbers = numbers1 + numbers2 + avg;


//uppgift5.1

 var countries = ["Sweden", "Denmark", "Finland", "Norway"];

var countries1 = countries[1].substring(0, 3);

//uppgift5.2

var total = countries.length;

var sum = "";

//loopar igenom vektorn och sätter ihop alla länder till ett "ord"
for (var i=0; i<total; i++){
    
    sum += countries[i];

}

console.log(sum.length/total);



