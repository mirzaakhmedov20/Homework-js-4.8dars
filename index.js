// 1. Massiv ichidan berilgan qiymatni qidiradigan agar mavjud bolsa uning indeksining kvadratini // aks holda mavjud emas degan yozuvni qaytaradigan funksiya yo yozing (indexOf)
// function findSquareIndex(arr, value) {
//   let i = arr.indexOf(value);
//   if (i !== -1) {
//     return i * 2;
//   } else {
//     return "mavjud emas";
//   }
// }

// console.log(findSquareIndex([1, 2, 3, 4, 5], 4)); // 9
// console.log(findSquareIndex([1, 2, 3, 4, 5], 6)); // mavjud emas

// 2. 3 ta massivni birlashtiradigan, birinchi massivni oxiriga, 2-sini boshiga va 1-sini ortasiga // qoyib beradigan funksiya yozing (concat)
// function joinArrs(arr1, arr2, arr3) {
//   return arr3.concat(arr1, arr2);
// }

// console.log(joinArrs([1, 2], [3, 4], [5, 6])); // [5, 6, 1, 2, 3, 4]
 
// 3. Sonlardan tashkil topgan massivning ichidan shartga mos dastlabki elementning kvadratini qaytaradigan funksiya yozing(find)
// function findFirstSquare(arr) {
//   return arr.find((item) => item ** 2);
// }

// console.log(findFirstSquare([0, 1, 2, 3, 4])); // 1

// 4. Sonlardan tashkil topgan massiv elementlari orasidan toqlarining sonini topuvchi funksiya yozing (forEach )
// function countOddNumbers(arr) {
//   let count = 0;
//   arr.forEach((item) => {
//     if (item % 2 !== 0) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(countOddNumbers([1, 2, 3, 4, 5])); // 3

// 5. So'zlardan tashkil topgan massivning oxirgi harflaridan iborat yangi massiv hosil qiladigan funksiya yozing (forEach )
// function lastSozlar(arr) {
//   let lastSoz = [];
//   arr.forEach((word) => {
//     lastSoz.push(word.charAt(word.length - 1));
//   });
//   return lastSoz;
// }

// console.log(lastSozlar(["Mers", "BMW", "Camaro", "Mustang"]));

// 6. Sonlardan tashkil topgan massiv elementlari orasidan tub larining yigindisini topuvchi funksiya yozing (for...of bilan ishlash kerak)
// function sumOfPrimes(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     if (num > 1) {
//       let isPrime = true;
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         sum += num;
//       }
//     }
//   }
//   return sum;
// }

// console.log(sumOfPrimes([1, 2, 3, 4, 5, 6])); // 10

//The end

//  So'zlardan tashkil togan massiv berilganda ushbu so'zlarning bosh harflaridan iborat yangi // massiv hosil qiladigan funksiya yozing

//net zone
// const ismlar = ["coutinho", "de bruyne", "mahrez", "neymar"];
// const newIsmlar = []; //tepadagi array sifatida chiqarish usuli
// //for ich bn
// ismlar.forEach(function (ism) {
//   //(ism,i )
//   const newIsm =
//     ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + " jr"; //ism.charAt().toUpperCase() -har bir ismni bosh harfni katta bn olb beradi.> + ism.slice(1)ismni bosh harfdan keyingi harflarni chiqaradi > .toLowerCase() davomini ciqaradi
//   newIsmlar.push(newIsm); //tepadagi array sifatida chiqarish usuli
//   //  console.log(newIsm,i);
// });
// console.log(newIsmlar); // bunda log tashqariga tushadi

//forni o'zi bn
// for (let i = 0; i < ismlar.length; i++) {
//   console.log(ismlar[i]);
// }
