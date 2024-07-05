// -------Part II: JavaScript Reps-------
// Easy Going
console.log('Write a for loop that will log the numbers 1 through 20.')
for (let i=1; i<=20; i++) {
    // console.log(i);
}


// Get Even
console.log('Write a for loop that will log only the even numbers in 0 through 200.')
for (let i=0; i<=200; i+=2) {
    // console.log(i);
}

// Fizz Buzz
console.log('Fizz Buzz')
for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        // console.log("FizzBuzz");
    }
    else if (i%5 === 0) {
        // console.log("Buzz");
    }
    else if (i%3 === 0) {
        // console.log("Fizz");
    }
    else {
        // console.log(i);
    }
}


// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D\'Art" , "Demogorgan Dog", 2, "Upside Down"]

console.log('Plantee just had her birthday; change Plantee\'s array to reflect her being a year older.')
plantee[2]=5001;
// console.log(plantee);

console.log('Change Wolfy\'s hometown from "Yukon Territory" to "Gotham City".')
wolfy[3]="Gotham City";
// console.log(wolfy);

console.log('Give D\'Art a second hometown by adding "Hawkins"')
dart[4]="Hawkins"; 
dart.push("Hawkins")
dart.pop();
// console.log(dart);

console.log('Porgee decides that Wolfy cannot be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".')
wolfy.shift();
wolfy.unshift("Gameboy");
// console.log(wolfy);


// Yell at the Ninja Turtles
const TMNT =["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const c of TMNT) {
    // console.log(c.toUpperCase());
}

// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }



// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 
    'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
    'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 
    'Snatch', 'Fast and Furious'];

console.log('Console log: the index of  Titanic')
let titanicIndex = favMovies.indexOf('Titanic');  
console.log(titanicIndex); // 8

console.log('use the .sort method')
favMovies.sort();
// console.log(favMovies); // puts them in abc order

console.log('Use the method pop')
favMovies.pop();
// console.log(favMovies); // removes Volver from the end

console.log('push "Guardians of the Galaxy"')
favMovies.push("Guardians of the Galaxy");
// console.log(favMovies); // adds GotG to the end

console.log('Reverse the array')
favMovies.reverse();
// console.log(favMovies); // reverses the order

console.log('Use the shift method')
favMovies.shift();
// console.log(favMovies); // removed GotG from the beginning

console.log('unshift -  what does it return?')
favMovies.unshift();
// console.log(favMovies); // nothing changed bc we didnt provide anything

console.log('splice "Django Unchained" and add "Avatar"')
let duIndex = favMovies.indexOf("Django Unchained")
// console.log(duIndex); // 14
favMovies.splice(14, 1, "Avatar"); 
// console.log(favMovies); // remove DU and replaces with Avatar

console.log('slice the last half of the array')
console.log(favMovies.length); // 18
let lastHalf = favMovies.slice(9, 18);
// console.log(lastHalf);

console.log('store the value of your slice in a variable, console.log it')
lastHalf=[
    "Howl's Moving Castle",
    'Harry Potter',
    'Harry Potter',
    'Fried Green Tomatoes',
    'Fast and Furious',
    'Avatar',
    'Conan the Barbarian',
    'Cloud Atlas',
    'Black Panther'
  ];
// console.log(lastHalf);
// console.log(favMovies);

console.log('console.log the index of "Guardin of the Galaxy"')
let gotgIndex = favMovies.indexOf('Guardin of the Galaxy');  
// console.log(gotgIndex); // -1 bc it is no longer in the array

// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

console.log('Remove Eggbert (hint look at the slice/splice method(s))')
whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);

console.log('Change "Neff" to "No One"')
whereIsWaldo[1][2]="No One";
// console.log(whereIsWaldo);

console.log('Access and console.log "Waldo"')
// console.log(whereIsWaldo[2][1][1]);


//  Excited Kitten
console.log('Excited Kitten"')
for (let i=1; i<=20; i++){
    console.log("Love me, pet me! HSSSSSS!")
    if (i%2===0) {
        //not sure how to put the phrases as random. not sure how to use math.random
    }
}



//  Find the Median (cannot figure this one out. do not understand how to use math.floor)
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let sum = 0;

for (let i = 0; i < nums.length; i++ ) {
  sum += nums[i];
}
const median = (sum / nums.length);
console.log(sum) 
console.log (median);





// Hungry for more?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  


  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

console.log('Alien Attire')
let kristynsShoe = kristynsCloset.shift();
// console.log(kristynsCloset)
thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset);

console.log('Dress Us Up')
let firstOutfitT = thomsCloset[0][2] + thomsCloset[1][1] + kristynsCloset[1];
let secondOutfitT = thomsCloset[0][3]  + kristynsCloset[4] + ' and ' + thomsCloset[2][1];
let thirdOutfitT = kristynsCloset[3] + ' and ' + thomsCloset[2][2];
let firstOutfitK = kristynsCloset[4] + kristynsCloset[3] + thomsCloset[0][1];
let secondOutfitK = kristynsCloset[2] + ', ' + thomsCloset[1][2] + ' and ' + kristynsCloset[0];
let thirdOutfitK = thomsCloset[2][1] + ' and ' + thomsCloset[1][2];
// console.log('Kristyn is wearing ' + secondOutfitK + ' and Thom is wearing ' + thirdOutfitT + ' to class today!');
