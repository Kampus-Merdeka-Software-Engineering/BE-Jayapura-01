    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const loginButton = document.querySelector(".loginnn");
    const logoutButton = document.querySelector(".logout-button");

    if(token){
        console.log("Token set!");
    }else{
        console.log("Token tidak tersedia");
    }
    if (user) {
        // Jika ada data pengguna dalam local storage
        loginButton.style.display = "none"; // Sembunyikan tombol login
        logoutButton.style.display = "block"; // Tampilkan tombol logout
        // Tambahkan elemen span untuk menampilkan nama pengguna
        const userNameSpan = document.createElement("span");
        userNameSpan.textContent = `Hello, ${user.username}`;
        userNameSpan.style.marginRight = "5px"; // Sesuaikan margin jika diperlukan
        userNameSpan.style.marginTop = "11px"; // Mengatur align-items: center

        // Sisipkan elemen span sebelum tombol logout
        const navbar = document.querySelector(".btn-navbar");
        navbar.insertBefore(userNameSpan, logoutButton);

        // Tambahkan event listener untuk logoutButton
        logoutButton.addEventListener("click", function() {
            // Hapus data pengguna dari local storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Redirect ke halaman index.html
            window.location.href = "index.html";
        });
    }