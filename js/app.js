'use strict'


let userName = prompt('is my name mohammad?');
userName=userName.toLowerCase();
if (userName === 'yes'|| userName === 'y'){
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

    alert(' right '  ); 

console.log(userAge);

}else if (userAge==='no' || userAge==='n') {

    alert('no');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userAge);





let userHoppy = prompt('do you like coding ?');

userHoppy=userHoppy.toLowerCase();

if (userHoppy === 'yes'|| userHoppy === 'y'){

    alert('great your awesome '); 
console.log(userHoppy);

}else if (userHoppy==='no' || userHoppy==='no') {
    alert('why ? try to learn it ');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userHoppy);


let userLike = prompt('do you like to travel?');
userLike=userLike.toLowerCase();
if (userLike=== 'yes' || userLike=== 'y'){
    alert( 'great your awesome '  ); 

}else if (userLike=== 'no' || userLike=== 'n'){
    alert('why ? it is intresting ');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userLike);



let userCar = prompt('do you have a car ?');
userCar=userCar.toLowerCase();

if (userCar=== 'yes' || userCar=== 'y'){
    alert( 'great your awesome '  ); 

}else if(userCar==='no' || userCar==='n'){
    alert('why ? try to buy one it is useful ');
}else{
    alert('answer yes,y  no,n  just please')
}

console.log(userCar);

let userFavour = prompt('do you like my website ?');
userFavour=userFavour.toLowerCase();

if (userFavour=== 'yes' || userFavour=== 'y'){
    alert( 'thank you so much'  ); 

}else if(userFavour==='no' || userFavour==='n'){
    alert('we will work more than To like you ');
}else{
    alert('answer yes,y  no,n  just please')
}


console.log(userFavour);


let seasons=prompt('which seasons do you like more ? summer .spring , winter ,Autumn' )
seasons=seasons.toUpperCase()
switch (seasons) {
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