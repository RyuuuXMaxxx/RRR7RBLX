console.log("RRR7 MARKET ROBUX");
let produkDipilih = "";
let hargaDipilih = "";

function pilihProduk(nama, harga) {
    produkDipilih = nama;
    hargaDipilih = harga;

    document.getElementById("produk").innerHTML = nama;

    document.getElementById("harga").innerHTML =
        "Rp" + harga.toLocaleString("id-ID");
}

function checkout() {
    const username = document.querySelector("input").value;
    const whatsapp = document.getElementById("whatsapp").value;

    if (username === "") {
        alert("Masukkan username Roblox.");
        return;
    }

    if (produkDipilih === "") {
        alert("Pilih jumlah Robux.");
        return;
    }

    alert(
        "Pesanan berhasil dibuat.\n\n" +
        "Username: " + username + "\n" +
        "Produk: " + produkDipilih + "\n" +
        "Harga: Rp" +
        hargaDipilih.toLocaleString("id-ID")
    );
}
