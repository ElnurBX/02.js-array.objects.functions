//*task 1
// let verilen=999
// if (verilen/100 >=1 && verilen/100 <10) {
//     let ededi_orta=0
//     let cem=0
//     let hasil=1
//     for (let i = 0; i < 3; i++) {

//         let qaliq =0
//         qaliq=verilen%10
//         verilen=(verilen-qaliq)/10

//         hasil=hasil*qaliq
//         cem+=qaliq

//     }
//     ededi_orta=cem/3
//     console.log(cem,hasil,ededi_orta);
// } else {
//     console.log("3 reqemli eded daxil edilmeyib ");
// }

//* task 2
// let verilen =312
// let i=2
// while (verilen !== 1) {
//     if (verilen % i === 0) {
//         verilen /= i;
//         console.log(i);
//     } else {
//         i++;
//     }
// }

//*task 3
// let verilen = 312;
// let i = 2;
// let counter = 0;
// let check = 1;
// while (verilen !== 1) {
//     if (verilen % i === 0) {
//     verilen /= i;
//     if (check === i) {
//     } else {
//         counter++;
//         check = i;
//     }
//     } else {
//     i++;
//     }
// }
// console.log(counter);

//*task 4
// for (let i = 0; i <= 10; i++) {
//     let c = i * i;
//     console.log(`${i} x ${i} = ${c}`);
// }
//*task 5
//     let a="i"
//     let b="i^2"
//     let c="i^3"
// for (let i = 0; i <= 11;++i) {
//     console.log(a,b,c);
//     a=i
//     b=i*i
//     c=i*i*i
// }
//*task 6
// for (let i = 2; i < 100; i++) {
//     let sade = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             sade = false;
//             break;
//         }
//     }
//     if (sade) {
//         console.log(i);
//     }
// }
// //*task7
// let tekcem=0
// let cutcem=0
// for (let i = 0; i <= 100; i++) {

//     if(i%2==0){
//         cutcem+=i
//     }else{
//         tekcem+=i
//     }
// }
// console.log(tekcem,cutcem);
//*task 8
// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     ];

// const orta_scores=[]
//     for (let i = 0; i < students.length; i++) {
//         const element = students[i];
//         let ededi_orta=0
//         let a=0
//         for (let j = 0; j < element.scores.length; j++) {
//             a+=element.scores[j]
//         }
//         ededi_orta=a/(element.scores.length);
//         orta_scores.push(ededi_orta)
//     }
//     console.log(orta_scores);
//*task 9

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//     ];
//     const loc=[]
//     for (let i = 0; i < webTechs.length; i++) {
//         if (webTechs[i].length > 4) {
//             loc.push(i)
//         }

//     }
//     console.log(loc);

//* task 10
// const products = [
//         {
//         id: 1,
//         title: "Smartphone",
//         description: "A high-end smartphone with the latest features.",
//         price: 799.99,
//         },
//         {
//         id: 2,
//         title: "Laptop",
//         description: "Powerful laptop with a large screen and fast processor.",
//         price: 1299.99,
//         },
//         {
//         id: 3,
//         title: "Coffee Maker",
//         description: "An automatic coffee maker with a built-in grinder.",
//         price: 99.99,
//         },
//         {
//         id: 4,
//         title: "Headphones",
//         description: "Wireless over-ear headphones with noise-cancellation.",
//         price: 199.99,
//         },
//         {
//         id: 5,
//         title: "Smart TV",
//         description: "55-inch 4K Smart TV with streaming apps built-in.",
//         price: 699.99,
//         },
//     ];
//     let cem=0
//     for (let i = 0; i < products.length; i++) {
//         cem+=products[i].price

//     }
//     let ortalama=cem/products.length
//     console.log(ortalama,cem);
//* task 11

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"]

// for (let i = 0; i < countries.length; i++) {
//     if(countries[i][0]=="A" && countries[i][countries[i].length-1]=="a"){
//         console.log(countries[i]);
//     }
// }

//* task 12
// function findNumberOfDivisors(n) {

// let i = 2;
// let counter = 0;
// let check = 1;
// while (n !== 1) {
//     if (n % i === 0) {
//     n /= i;
//     if (check === i) {
//     } else {
//         counter++;
//         check = i;
//     }
//     } else {
//     i++;
//     }
// }
// console.log(counter);
// }
// findNumberOfDivisors(1050)
// * task 13
// function findSpaceCounts(str){
//     let c=0
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]==" ")
//         {
//             c++
//         }

//     }
//     console.log(c);
// }
// findSpaceCounts("jsfsafas ajs anfas asffs  ")
//*task 14
// function printFullName(str1,str2){
//     let fulname=""
//     fulname=str1+str2
//     return fulname
// }
// console.log(printFullName("jhon","doe"));
// //*task 15
// function square(number){
//     let x
//     x=number**2
//     return x
// }
// console.log(square(6));
//*task 16
// function sum(num1,num2){
//     return num1+num2
// }
// function multiply(num1,num2){
//     return num1*num2
// }
// function subtruct(num1,num2){
//     return num1-num2
// }
// function divide(num1,num2){
//     return num1/num2
// }
// console.log(sum(2, 3)); // 5
// console.log(multiply(2, 3)); //6
// console.log(subtruct(2, 3)); //-1
// console.log(divide(2, 3)); // 0,666666
//*task 17
// function calculator(num1, num2, char) {
//     let emeliyat = 0;
// switch (char) {
//     case "+":
//     return num1 + num2;
//     case "-":
//     return num1 -num2;
//     case "*":
//     return num1 * num2;
//     case "/":
//     return num1 / num2;
    
//     default:
//     break;
// }
// }
// console.log(calculator(2, 5, "+")); 
// console.log(calculator(2, 5, "*")); 
// console.log(calculator(2, 5, "/")); 
// console.log(calculator(2, 5, "-"));
//*task 18
// const getSum = (array) => {
//     let x
//     x=array[0]+array.pop()
//     return x
//     };
//     console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65
//*task 19
// function sum(array){
//     let sum=0
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i]
//     }
//     return sum
// }
// console.log(sum([15, -500, 0, 50])); //65
//*taask 20
// function findMax(arr) {
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//     }}
//     return max; 
// }


// const array = [5, 3, 9, 2, 11, 8];
// console.log(findMax(array)); 
// //*task 21
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

// function find(array){
//     let arr=[]
//     for (let i = 0; i < array.length; i++) {
//        if (array[i].salary > 60000) {
//              arr.push(array[i])
//        }
        
//     }
//     return arr
// }
// console.log(find(employees));

//*task 22
// function findElement(array, number) {
//     let counter=0
//         for (let i = 0; i < array.length; i++) {
//             if(array[i]===number){ 
//                 counter++
//                 return`${number} array elemmenetlerinden biridir`
//             }
//         }
//         if(counter==0){
//             return `${number} arrayde yoxdur`
//         }
//     }
//     console.log(findElement([33, 28, 45, 17], 45)); 
// * task 23
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function bosluqsayan(str){
//     let counter=0
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]==" "){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(bosluqsayan(sampleNews));
// //*task 24
// function concatArray(array1,array2){
//     arr1=array1.length
//     for (let i = 0; i < array2.length; i++){
//         array1[arr1+i] = array2[i]
//     }
//     return array1
// }
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))

//*task 25
// function array_filled(n,x){
//     let a =[]
//     for (let i = 0; i < n; i++) {
//         a[i] = x
        
//     }
//     return a
// }
// console.log(array_filled(6, 0));
//*task 26
// function move(array,x,y){
//     temp=array[x]
//     array[x]=array[y]
//     array[y]=temp
//     return array
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));
// //*task 27
// function range(x,y){
//     let a=[]
//     let a_count=0
//     for (let i = x; i <= y; i++) {
//         a[a_count]=x
//         a_count++
//         x++
//     }
//     return a
// }
// console.log(range(1,4));