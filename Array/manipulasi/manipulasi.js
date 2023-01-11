// Manipulasi Array

// 1. Menambah isi Array
// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[6] = "Doddy";

// console.log(arr);

// 2. Menghapus isi Array
// var arr = ["Sandhika", "Galih", "Nofa"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi Array
// var arr = ["Sandhika", "Galih", "Nofa"];

// for ( var i = 0; i < arr.length; i++ ) {
//    console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada Array

// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy', 'Fitri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice
// splice(indexAwal, mauDIhapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Doddy', 'Fitri');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir)
// var arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Sandhika', 'Galih', 'Nofa'];
// for ( var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));


// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));


// 9. filter & find
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);





