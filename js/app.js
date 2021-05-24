'use strict'


let userName = prompt('What is your name ?');
alert(' hollo ' + userName + ' welcome here ');
console.log(userName);

let userAge = prompt('What is your age ?');

alert(' your age is ' + userAge );

console.log(userAge);


let userHoppy = prompt('do you like coding ?');
if (userHoppy === 'yes'|| userHoppy === 'y'){
    alert('great your awesome '  ); 
console.log(userHoppy);
}else if (userHoppy==='no' || userHoppy==='no') {
    alert('why ? try to learn it ');
}
userHoppy=userHoppy.toLowerCase();
console.log(userHoppy);


let userLike = prompt('do you like to travel?');
if (userLike=== 'yes' || userLike=== 'y'){
    alert( 'great your awesome '  ); 

}else if (userLike=== 'no' || userLike=== 'n'){
    alert('why ? it is intresting ');
}
userLike=userLike.toLowerCase();
console.log(userLike);



let userCar = prompt('do you have a car ?');

if (userCar=== 'yes' || userCar=== 'y'){
    alert( 'great your awesome '  ); 

}else if(userCar==='no' || userCar==='n'){
    alert('why ? try to buy one it is useful ');
}
userCar=userCar.toLowerCase();
console.log(userCar);

let userFavour = prompt('do you like my website ?');

if (userFavour=== 'yes' || userFavour=== 'y'){
    alert( 'thank you so much'  ); 

}else if(userFavour==='no' || userFavour==='n'){
    alert('we will work more than To like you ');
}
userFavour=userFavour.toLowerCase();
console.log(userFavour);


let seasons=prompt('which seasons do you like more ? summer .spring , winter ,Autumn' )
switch (seasons.toUpperCase()) {
    case 'WINTER' :

        alert('it is so cold');
        console.log('it is so cold');

        break;

        case 'SUMMER' :

        alert('it is so hot');
        console.log('it is so hot');

        break;

        case 'SPRING' :

        alert('it is fantastic');
        console.log('it is fantastic');

        break;

        case 'AUTUMN' :

        alert('it is good');
        console.log('it is good');

        break;

        default :
        alert('please choose a season just');
        console.log('please choose a season just');
        break ;

        

}