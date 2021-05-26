'use strict'

let score=0;


let userName = prompt('what is your name ?');

alert('HELLO ' + userName + ' Welcome Here' )
alert ('let is go to play guessing game')





let myName = prompt('is my name mohammad?');
myName=myName.toLowerCase();
if (myName === 'yes'|| myName === 'y'){
    score++;
    alert(' yes my name is mohammad ' ); 
console.log(myName);
}else if (myName==='no' || myName==='no') {
    alert('your answer not correct');
}else{
    alert('answer yes,y  no,n  just please')
}



console.log(myName);




let userAge = prompt('is my age 24 ?');

userAge=userAge.toLowerCase();

if (userAge === 'yes'|| userAge === 'y'){
    score++;

    alert(' right '  ); 

console.log(userAge);

}else if (userAge==='no' || userAge==='n') {

    alert('no');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userAge);





let userHoppy = prompt('do I like coding ?');

userHoppy=userHoppy.toLowerCase();

if (userHoppy === 'yes'|| userHoppy === 'y'){
    score++;

    alert('Yes I do '); 
console.log(userHoppy);

}else if (userHoppy==='no' || userHoppy==='no') {
    alert('really ? ');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userHoppy);


let userLike = prompt('do I like to travel?');
userLike=userLike.toLowerCase();
if (userLike=== 'yes' || userLike=== 'y'){
    score++;
    alert( 'Yes I like '  ); 

}else if (userLike=== 'no' || userLike=== 'n'){
    alert('Is there anyone who does not like to travel? ');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userLike);



let userCar = prompt('do I have a car ?');
userCar=userCar.toLowerCase();

if (userCar=== 'yes' || userCar=== 'y'){
    alert( 'NO I do not  '  ); 

}else if(userCar==='no' || userCar==='n'){
    score++;
    alert('your correct ');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userCar);

let userFavour = prompt('do I like astronomy ?');
userFavour=userFavour.toLowerCase();

if (userFavour=== 'yes' || userFavour=== 'y'){
    score++;
    alert( 'Yes I do'  ); 

}else if(userFavour==='no' || userFavour==='n'){
    alert('your answer not correct ');
}else{
    alert('answer yes,y  no,n  just please')
}


console.log(userFavour);


let userMusic= prompt('do I like classic music ?');
userMusic=userMusic.toLowerCase();

if (userMusic=== 'yes' || userMusic=== 'y'){

    alert( 'no i do not'  ); 

}else if(userMusic==='no' || userMusic==='n'){
    score++;
    alert('your correct ');
}else{
    alert('answer yes,y  no,n  just please')
}


console.log(userMusic);











// let seasons=prompt('which seasons do you like more ? summer .spring , winter ,Autumn' )
// seasons=seasons.toUpperCase()
// switch (seasons) {
//     case 'WINTER' :

//         alert('it is so cold');
//         console.log('it is so cold');

//         break;

//         case 'SUMMER' :

//         alert('it is so hot');
//         console.log('it is so hot');

//         break;

//         case 'SPRING' :

//         alert('it is fantastic');
//         console.log('it is fantastic');

//         break;

//         case 'AUTUMN' :

//         alert('it is good');
//         console.log('it is good');

//         break;

//         default :
//         alert('please choose a season just');
//         console.log('please choose a season just');
//         break ;






    let number = prompt('guess what the correct number in 1 to 10 ?');
    
    let check = true;
    
    for (let i = 0 ; i<4 ; i++){
    
      switch(number){
      case '1':
      case '2':
      case '3':        
      case '4':  
        alert('too low');
        break;
   
      case '5':
        check = false;
        alert('right answer');
        score++;
        break;
   
        case '6':
        case '7':
        case '8':        
        case '9':  
        case '10':
        alert('too high');
        break;
  
      default:
        alert('Incorecet number try again');
        break;
      }
    
      if(number !=='5'){
        number = prompt('guess again');
      
      }
     else{
        break;
      }
    
    }
    if (check) {
      alert('good luck in anthoer time the right answer is 5');
    }

    // alert(`Thank you for your answer your grade is ${score}` )
    

    


    let myClub= ['realmadrid' , 'milan' , 'chelsea'];
    let clubs =prompt('can you guess what is the best club for me ? ');
    let flage = false ;
    clubs = clubs.toLowerCase();
    for (let i = 0 ; i < 5 ; i++){
        for (let j =0 ; j < myClub.length ; j++ ){
            if (clubs===myClub[j]){
                alert('you are right');
                score++;
                flage = true ;
                
                break;

            }
        }if (flage){
            break;
        }else{
            alert('noooop');
            clubs =prompt('can you guess what is the best clab for me ? ');

        }
    }

    alert('my clubs is realmadrid , milan , chelsea');
    alert('Thank you '  +  userName  + ' We Have A Fun Time your scoer is ' + score )



    


    
 