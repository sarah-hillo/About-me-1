'use strict'

let score=0;

let userName = prompt('is my name mohammad?');
userName=userName.toLowerCase();
if (userName === 'yes'|| userName === 'y'){
    score++;
    alert(' hollo ' + userName + ' welcome here ' ); 
console.log(userName);
}else if (userName==='no' || userName==='no') {
    alert('no');
}else{
    alert('answer yes,y  no,n  just please')
}



console.log(userName);




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

alert(`Thank you for your answer your grade is ${score}` )


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

        

