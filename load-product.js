const fs = require("fs");
const path = require("path");
const { conn } = require("./db"); 
const { Product } = require("./models/product")

// Path ke file JSON
const filePath = path.join(__dirname, "static", "assets", "products.json");

// Fungsi untuk memuat data produk ke dalam database
async function loadProducts() {
  try {
    // Sinkronisasi model dengan basis data
    await conn.sync();

    // Baca file JSON
    const rawData = fs.readFileSync(filePath, "utf8");
    const productsData = JSON.parse(rawData);

    // Loop melalui data produk dan tambahkan setiap produk ke dalam database
    for (const productData of productsData.products) {
      await Product.create({
        category: productData.category,
        name: productData.name,
        price: productData.price,
        imageSrc: productData.imageSrc,
      });
    }

    console.log("Data produk telah dimuat ke dalam database.");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    console.log(__dirname);
    console.log(filePath);
  } finally {
    // Tutup koneksi ke database
    await conn.close();
  }
}

// Panggil fungsi untuk memuat data produk
loadProducts();
