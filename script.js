console.log("RRR7 MARKET ROBUX");
let produkDipilih = "";
let hargaDipilih = 0;

function pilihProduk(nama, harga) {
    produkDipilih = nama;
    hargaDipilih = harga;

    document.getElementById("produk").innerHTML = nama;

    document.getElementById("harga").innerHTML =
        "Rp" + harga.toLocaleString("id-ID");
}

function checkout() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Masukkan username Roblox.");
        return;
    }

    if (produkDipilih === "") {
        alert("Pilih jumlah Robux.");
        return;
    }

    const nomorAdmin = "6281234567890";

    const pesan =
        "🛒 PESANAN BARU%0A%0A" +
        "Toko: RRR7 MARKET ROBUX%0A" +
        "Username Roblox: " + username + "%0A" +
        "Produk: " + produkDipilih + "%0A" +
        "Harga: Rp" + hargaDipilih.toLocaleString("id-ID");

    window.open(
        "https://wa.me/" + nomorAdmin + "?text=" + pesan,
        "_blank"
    );
}
