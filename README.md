# Membuat CRUD Serverside Menggunakan Express JS

## Ini Halaman Home dari Link yang sudah saya Deploy https://w8-nger-production.up.railway.app/api

### Di sini saya melakukan import sesuai dengan apa yang saya butuhkan untuk memenuhi tugas di W8, dan saya juga menentukan port untuk bisa diakses nantinya

![alt text](/asset/1.png)

### Di bagian ini saya melakukan setting file apa saja yang tidak akan saya upload agar file yang saya upload tidak terlalu besar kedepannya.

![alt text](/asset/2.png)

### Ini beberapa devDependencies dan dependencies yang saya install

![alt text](/asset/3.png)

### Pada file routes saya melakukan setting untuk membuat method CRUD berupa GET All Data, Get Data  by Name, POST, Edit Data, Delete Data by ID

![alt text](/asset/4.png)

![alt text](/asset/5.png)

![alt text](/asset/6.png)

![alt text](/asset/7.png)

![alt text](/asset/8.png)

### Ini Tampilan saat mengunjungi alamat url sesuai yang sudah disetting sebelumnya (http://localhost:3000/api) atau (https://w8-nger-production.up.railway.app/api) dan memberi informasi jika ingin mengakses data maka tambahkan /products pada bagiat akkhir alamat url tersebut.

![alt text](/asset/9.png)

### Saat menambahkan /products pada bagian akhir alamat url, maka akan menampilkan data dummy yang sudah dibuat sebelumnya (http://localhost:3000/api/products) atau (https://w8-nger-production.up.railway.app/products)

![alt text](/asset/10.png)

### Ini contoh saat Get Data by Name dengan menambahkan /:nama pada bagian akhir alamat url sebelumnya (http://localhost:3000/api/products/Indomie) (https://w8-nger-production.up.railway.app/api/products/Indomie) atau (http://localhost:3000/api/products/Teh%20Pucuk) (https://w8-nger-production.up.railway.app/products/Teh%20Pucuk)

![alt text](/asset/11.png)

![alt text](/asset/12.png)

### Jika anda memasukan Nama Produk yang tidak ada pada list maka server akan menampilkan pesan seperti berikut (http://localhost:3000/api/products/Bengbeng) atau (https://w8-nger-production.up.railway.app/products/Bengbeng)

![alt text](/asset/13.png)

## Fitur CRUD

### Lalu kita coba akses dengan menggunakan POSTMAN untuk melihat apakah method dan alamat url yang sudah kita setting sbeelumnya berjalan dengan lancar, berikut contohnya

## Get All Data dengan alamat url (https://w8-nger-production.up.railway.app/products)

![alt text](/asset/14.png)

## Get Data by Name dengan alamat url (https://w8-nger-production.up.railway.app/products/:nama) CONTOH : (https://w8-nger-production.up.railway.app/products/Indomie) atau  (https://w8-nger-production.up.railway.app/products/Teh%20Pucuk)

![alt text](/asset/15.png)

## Menampilkan pesan jika produk yang dicari by nama tidak tersedia datanya CONTOH : (https://w8-nger-production.up.railway.app/api/products/Tango)

![alt text](/asset/16.png)

## Melakukan ADD Data New Product dengan hanya memasukan Key nama, hpp, untung, stok, kategori. ID dan harga jual sudah dibuat otomatis sesuai fungsi yang ada pada file back.ts

![alt text](/asset/17.png)

## Melakukan Get Data by Name lalu melakukan EDITING sesuai yang diinginkan

![alt text](/asset/18.png)

## Melakukan DELETE by ID

![alt text](/asset/19.png)
