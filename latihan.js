// // -------------if, Else, Nested If -------------
// let nilai = 75;

// if (nilai >= 70) {
//   console.log("kamu lulus!");  
// } else {
//   console.log("kamu tidak lulus!"); 
  
//   if (nilai >= 60) {
//     console.log("Tetapi kamu dapat mengikuti perbaikan."); 
//   } else {
//     console.log("kamu harus mengulang ujian."); 
//   }
// }

// // -------------Switch Case -------------

// let nilai = "haus";

// switch (nilai) {
//     case "lapar" :
//         nilai = console.log ('Makanlah');
//         break;
//     case ("haus") :
//         nilai = console.log ('Minumlah');
//         break;
//     default :
//     nilai = console.log ('tidak valid');
// }

// // -------------for statement ------------- 
// for (let i = 1; i < 10; i++) {
//     console.log(i);
//   }

// -------------while, do while ------------- 
// let cewek = 1;

// while (cewek <= 3) {
//   console.log("Cewek ke-" + cewek);
//   cewek++;
// }

// do {
//     console.log("Cewek ke-" + cewek);
//     cewek++;
//   } while (cewek <= 3);

// -------------function-------------

function hitungLuasLayar(panjang, lebar) {
    let luas = panjang * lebar;
    return luas;
  }
  
  // Meemanggil
  let panjangLayar = 15; 
  let lebarLayar = 10; 
  
  let luasLayar = hitungLuasLayar(panjangLayar, lebarLayar);
  console.log("Luas layar PC " + luasLayar + " inci persegi");
  