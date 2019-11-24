# Tugas 2 IF3110 Pengembangan Aplikasi Berbasis Web

## 1. Deskripsi Web Service

web service Transaksi dibangun di atas Node.js dan mengimplementasikan protokol REST. Web service ini bertanggung jawab untuk semua transaksi tiket film Engima.

Web service Transaksi memiliki basis data tersendiri yang memiliki informasi transaksi tiket film setiap pengguna Engima. Informasi transaksi adalah id pengguna, nomor akun virtual tujuan, id film, jadwal film, kursi yang dipesan, waktu pembuatan transaksi, dan status transaksi.

Ada tiga status pembayaran sebuah transaksi tiket film sebagai berikut.
Pending: tiket belum dibayar namun belum lewat dari masa berlaku transaksi.
Cancelled: tiket belum dibayar dan sudah lewat dari masa berlaku transaksi. Status kursi yang dipesan pada transaksi dengan status cancelled menjadi tersedia kembali.
Success: tiket sudah dibayar sebelum masa berlaku transaksi.
Berikut layanan yang disediakan oleh web service ini:
Menambah transaksi baru dengan status “Pending”. Input yang diberikan adalah id pengguna, id film, kursi yang dipilih, dan nomor akun virtual yang menjadi tujuan pembayaran. Layanan mengembalikan id transaksi.
Mengubah status suatu transaksi menjadi status “Success” atau “Cancelled”. Input yang diberikan adalah id transaksi.
Mengembalikan seluruh data transaksi pembelian film seorang pengguna Engima.

## 2. Basis Data

Basis data yang digunakan untuk web service transaksi ini adalah mysql dengan nama basis data adalah ws_transaction. Isi dari basis data tersebut adalah tabel transaction_info dengan atribut-atributnya adalah id transaksi, id user, akun virtual user, id movie, jadwal movie, nomor bangku yang dipesan, waktu transaksi dibuat, dan status transaksi.

## 3. Pembagian Tugas DPPL

1. CI/CD: 13517006
2. Eksplorasi dan setup mesin deployment: 13517006, 13517084

## 4. URL Deployment

Berikut ini merupakan URL yang digunakan untuk mendeploy ws-transaction.
http://107.21.9.12:4000/


