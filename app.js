let age = 16;
switch (age) {
    case 10:
        break;
    case 20:
        break;
    case 40:
        break;
    case 16:
        console.log("amaldes");
        break;
    default:
        console.log("you are out of age");
        break;
    }
    
// scop

(function getName(){
    console.log("hello");
})();

// ternar operator

var score = 17;
let natija  = score == 140 ? "you pass" : "you have not  pass";
console.log(natija);

// number method


let x = 123
var y = x.toString(); /* numbirdan stringa o'tkazadi*/
console.log(y);

// closure  => functionga parametr berib chaqirish

function asc(question){
    return function holdYourQuestion(){
        console.log(question);
    }
}

var myQuestion = asc("what is clousere")
myQuestion();

// new prototip 

var yesterday = new Date("March 6,2022")
console.log(yesterday.toUTCString()
);

// this keyword  



