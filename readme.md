                                 <!-- 9-dars "swich case , tengliklar, scope ,ternar operator, number method,this" haqida -->



// svich => biron shartni tekshirish uchun ishlatiladi. agar shartga uning tanasidagi biron qiymati (case) true qiymat qaytarsa shundagi malumotni qaytaradi

// Sintaksis

let hafta = "dushanba";
switch(hafta) {
  case 'dushanba':  // xuddi if kabi case value1 qiymatini x ga tenglab ketaveradi if (x === 'dushanba') yana case shartni qatiy 
                     // tenglikka tekshiradi
    ...
    break

  case 'seshanba':  // if (x === 'seshanba')
    ...
    break

  default:
    ...
    break  // breakning vazifasi qiymat bajarilgfan holda kodning davomi o'qilioshi oldini oladi yani majburiy to'xtatib qo'yadi 
            // agar bu bo'lmasa hamma natijalar ekranga chiqib ketadi
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Block Scope => bu scop o'zgaruvchilarni localni va globalni holatlarida namoyon bo'ladi

// Sintaksis
// local o'zgaruvchi: bunday o'zgaruvchilar faqat o'zini o'rab turgan scoplardagina mavjud bo'ladi
// global o'zgaruvchilar: bunday o'zgaruvchilar esa hamma joyda mavjud bo'ladi scoplar ichida chaqirsa ham ishlaydi

var a = 20;  // bu yerda var keyvordi globalni o'zgaruvchi sifatida elon qilinga uni istalgan joyda ham chaqirsa ishlaydi hattp block scoplarda ham
{
    let a = 30;  // bu yerda esa let keyvordi localni o'zgaruvchi sifatida elon qilingan bu o'zgaruvchi faqat shu o'zini o'rab turgan 
                //  block qavs uchun mavjud va shu yerda unga murojat amalga oshiriladi
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ternary Operator => u ham if else kabi shart bajarish uchun ishlatiladi. Odiiy shartlar kiritishda ko'p qo'llaniladi

// Sintaksis

let score = 22;
const result = score == 22 ? "you pass": "you have not  pass"  // birinchi shart kitiladi shart true qiymat qaytarsa ? belgisidan keyingi 
                                                               // ifoda ishlaydi agar shart false qiymat qaytarsa : belgisidan keyingi
                                                               // ifoda ishlaydi


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                               
//  Number method toString() => nunbir qiymatdas strig qiymatga o'tgazadi
//  Sintaksis

 let x = 123
var y = x.toString(); // x qiymatdagi 123 soni shunday ko'rinishda string qiymatga o'giriladi
console.log(y);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  Clousure => fuctionga boshqa yerdan qiymat berib chaqirib olish ummumiy logiga yozilib olinadi functonga va har safar shu functionga qiymat berib chaqirilavaeradi
//   Sintaksis

  function hisobla(a,b){ //a va b qiymatlar
    return a+b  //  funktion bajaradigan umumiy ish
}

hisobla(2,3)   //qiymat berib chaqirish
hisobla(10,30)   //qiymat berib chaqirish
hisobla(100,4000)   //qiymat berib chaqirish ...

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// new prototip => Operator ishlab chiquvchilarga newfoydalanuvchi tomonidan belgilangan ob'ekt turi yoki konstruktor funksiyasiga ega 
                // bo'lgan o'rnatilgan ob'ekt turlaridan birining namunasini yaratishga imkon beradi.


//  Sintaksis

 var yesterday = new Date("March 6,2022") // bu yerda new Date brouserdagi data prototipidan nusxa olayapti 
console.log(yesterday.toUTCString()      // datani tartiblab chiqarish uchun method brouserdagi datadagi methodlar hozir chaqirilgan 
                                         //new date uchun ham ishlaydi 
);