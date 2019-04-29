# pengurangan

## 1
jika A kurang B sama dengan C maka A = 1 B = 2 C = 3

## 2
input A
input B
hitung A - B = C
simpan hasil operasi sebelumnya
tampilkan C

## 3
input dan simpan A
input dan simpan B
simpan C = hitung A - B
tampilkan C


# mie goreng

## 1

input yes/no sudah punya mie?

if no
  do 'beli'
else
  do 'nothing'

do 'masak'
do 'hidangkan'

## 2

input A: sudah punya mie?: 'sudah' atau 'belum'

if A = 'belum'
  do 'beli'
else
  do 'nothing'

do 'masak'
do 'hidangkan'

## 3

input dan simpan A: sudah punya mie?: 'sudah' atau 'belum'

if A = 'belum'
  do 'beli'

do 'masak'
do 'hidangkan'

## 4

input dan simpan A: sudah punya mie?: 'sudah' atau 'belum'

if A = 'belum'
  do 'beli'
  do 'masak'
  do 'hidangkan'
else if A = 'sudah'
  do 'masak'
  do 'hidangkan'
else
  do 'input tidak valid'

## 5

input dan simpan A: sudah punya mie?: 'sudah' atau 'belum'

if A = 'belum' atau A = 'sudah'

  if A = 'belum'
    do 'beli'

  do 'masak'
  do 'hidangkan'

else
  do 'input tidak valid'

# kasur

## 1

input dan simpan KADAR_KANTUK
tentukan LEVEL_KASUR (mengurangi kadar kantuk setiap jam)

selama kamu mengantuk (KADAR_KANTUK > 0) {
  do 
    setiap jamnya kamu tidur, akan mengurangi KADAR_KANTUK sebanyak LEVEL_KASUR
}

do 'bangun'

## 2

input dan simpan KADAR_KANTUK
tentukan LEVEL_KASUR (mengurangi kadar kantuk setiap jam)

while kamu mengantuk (KADAR_KANTUK > 0) {
  simpan KADAR_KANTUK = KADAR_KANTUK - LEVEL_KASUR
}

do 'bangun'