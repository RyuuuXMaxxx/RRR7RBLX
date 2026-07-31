let produkDipilih = "";
let hargaDipilih = 0;

function pilihProduk(produk, harga) {
    produkDipilih = produk;
    hargaDipilih = harga;

    document.getElementById("produk").textContent = produk;

    document.getElementById("harga").textContent =
        "Rp" + harga.toLocaleString("id-ID");
}

document
    .getElementById("checkoutButton")
    .addEventListener("click", checkout);

function checkout() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Masukkan username Roblox.");
        return;
    }

    if (produkDipilih === "") {
        alert("Pilih produk terlebih dahulu.");
        return;
    }

    const nomorAdmin = "6287882922046";

    const pesan = encodeURIComponent(
        "RRR7 MARKET ROBUX\n\n" +
        "Username: " + username + "\n" +
        "Produk: " + produkDipilih + "\n" +
        "Harga: Rp" +
        hargaDipilih.toLocaleString("id-ID")
    );

    window.location.href =
        "https://wa.me/" + nomorAdmin + "?text=" + pesan;
}
