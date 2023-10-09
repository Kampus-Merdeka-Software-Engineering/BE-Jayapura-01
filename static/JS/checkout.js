// Dropdown Checkout.html
window.onload = function () {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function () {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  };
  topicSel.onchange = function () {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  };
};
// close function dropdown

//Ini script checkout.js yang ada di front-end
// fetch("assets/products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Loop melalui data produk dan tambahkan setiap produk ke dalam DOM
//     data.products.forEach((product) => {
//       addProductToDOM(product);
//     });
//   });

// //looping product to html structures
// function addProductToDOM(product) {
//   const menuItems = document.querySelector(".menu-item"); // Ganti dengan elemen HTML tempat menampilkan produk

//   // Buat elemen div untuk menampilkan produk
//   const productDiv = document.createElement("div");
//   productDiv.className = "menu-items";
//   productDiv.dataset.category = product.category;

//   // Buat elemen gambar
//   const img = document.createElement("img");
//   img.src = product.imageSrc;
//   img.alt = product.name;

//   // Buat elemen judul produk
//   const h3 = document.createElement("h3");
//   h3.textContent = product.name;

//   // Buat elemen harga produk
//   const p = document.createElement("p");
//   p.textContent = `Rp. ${parseFloat(product.price)}`;

//   const button = document.createElement("button");
//   button.className = "add-to-cart-button";
//   button.innerHTML = '<i class="fa-solid fa-cart-plus"></i>Add to Cart';

//   productDiv.appendChild(img);
//   productDiv.appendChild(h3);
//   productDiv.appendChild(p);
//   productDiv.appendChild(button);
//   menuItems.appendChild(productDiv);
// }

// let cartTotal = 0;
// let cartQuantity = 0;

// const list = document.querySelector(".card .list");

// function addToCartAndUpdate(itemName, itemPrice, itemImageSrc) {
//   const cartList = document.querySelector(".cart-list");

//   // Cari apakah produk sudah ada dalam keranjang
//   const existingCartItem = Array.from(cartList.children).find((item) => item.dataset.productName === itemName);

//   if (existingCartItem) {
//     // Produk sudah ada dalam keranjang, tingkatkan jumlahnya
//     const quantityDisplay = existingCartItem.querySelector(".quantity-display");
//     const currentQuantity = parseInt(quantityDisplay.textContent);
//     quantityDisplay.textContent = (currentQuantity + 1).toString();
//   } else {
//     const cartItem = document.createElement("li");
//     cartItem.classList.add("cart-item");
//     cartItem.dataset.productName = itemName;

//     // Menambahkan gambar produk
//     const itemImage = document.createElement("img");
//     itemImage.src = itemImageSrc;
//     itemImage.alt = itemName;
//     cartItem.appendChild(itemImage);

//     // Membuat elemen "item-info" untuk nama produk, harga, jumlah, tombol decrement, dan tombol increment
//     const itemInfo = document.createElement("div");
//     itemInfo.classList.add("item-info");

//     const itemNameElement = document.createElement("h4");
//     itemNameElement.textContent = itemName;
//     itemInfo.appendChild(itemNameElement);

//     const itemPriceElement = document.createElement("p");
//     itemPriceElement.textContent = `Rp. ${itemPrice}`;
//     itemInfo.appendChild(itemPriceElement);

//     const itemQuantity = document.createElement("div");
//     itemQuantity.classList.add("item-quantity");

//     const decrementButton = document.createElement("button");
//     decrementButton.classList.add("decrement"); // Menambahkan kelas "decrement"
//     decrementButton.innerHTML = '<div class="button-text">-</div>'; // Menambahkan angka di dalam tombol
//     decrementButton.addEventListener("click", () => {
//       const currentQuantity = parseInt(quantityDisplay.textContent);
//       if (currentQuantity > 1) {
//         quantityDisplay.textContent = (currentQuantity - 1).toString();
//         cartTotal -= itemPrice;
//         document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
//       } else if (currentQuantity === 1) {
//         cartList.removeChild(cartItem);
//         cartTotal -= itemPrice;
//         cartQuantity--;
//         const cartIcon = document.querySelector(".quantity");
//         cartIcon.textContent = cartQuantity.toString();

//         // Perbarui tampilan jumlah produk di keranjang
//         document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
//       }
//     });
//     itemQuantity.appendChild(decrementButton);
//     //Deafult jumlah barang
//     const quantityDisplay = document.createElement("span");
//     quantityDisplay.textContent = "1";
//     quantityDisplay.classList.add("quantity-display");
//     itemQuantity.appendChild(quantityDisplay);

//     const incrementButton = document.createElement("button");
//     incrementButton.classList.add("increment"); // Menambahkan kelas "increment"
//     incrementButton.innerHTML = '<div class="button-text">+</div>'; // Menambahkan angka di dalam tombol
//     incrementButton.addEventListener("click", () => {
//       const currentQuantity = parseInt(quantityDisplay.textContent);
//       quantityDisplay.textContent = (currentQuantity + 1).toString();
//       cartTotal += itemPrice;
//       document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
//     });
//     itemQuantity.appendChild(incrementButton);
//     itemInfo.appendChild(itemQuantity);
//     cartItem.appendChild(itemInfo);
//     cartList.appendChild(cartItem);
//   }

//   // Perbarui total dan jumlah item di dalam keranjang
//   cartTotal += itemPrice;
//   cartQuantity++;

//   document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
//   document.querySelector(".quantity").textContent = cartQuantity;

//   document.querySelector(".quantity").textContent = cartQuantity.toString();
// }
