// pengurangan
// var a = prompt('masukkan nilai A')
// var b = prompt('masukkan nilai B')
// var c = a - b
// alert('hasil ' + c)

// mie goreng
// var a = prompt('sudah punya mie? sudah/belum')

// if (a === 'belum' || a === 'sudah') {
//   if (a === 'belum') {
//     alert('beli')
//   }

//   alert('masak')
//   alert('hidangkan')
// } else {
//   alert('input tidak valid')
// }

// kasur
// var a = prompt('seberapa ngantuk?')
// var levelKasur = 10

// while(a > 0) {
//   a = a - levelKasur
//   alert('tidur, kadar kantuk: ' + a)
// }

// alert('bangun')

var jumlahPenumpang = prompt('jumlah penumpang')
var kecepatan = 20
var kecepatanBaru

if (jumlahPenumpang > 4) {
  alert('invalid')
} else {
  if (jumlahPenumpang == 4) {
    kecepatanBaru = kecepatan - 7
  
  } else if (jumlahPenumpang > 2) {
    kecepatanBaru = kecepatan - 5
    
  } else {
    kecepatanBaru = kecepatan - 2
  }
  
  alert(kecepatanBaru)
}