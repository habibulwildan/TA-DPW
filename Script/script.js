// const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const date = document.getElementById("date");
const address = document.getElementById("address");
const pilihan = document.getElementsByName("pilihan");
const confirm = document.getElementById("confirm");

// untuk mengecek inputan kosong atau tidak
function check_required() {
  let tes = true;
  // mengecek inputan nama
  if (nama.value === "") {
    errorMsg(nama, "Nama tidak boleh kosong");
    tes = false;
  } else if (!check_alphabet(nama)) {
    errorMsg(nama, "Nama tidak boleh mengandung angka / simbol");
    tes = false;
  } else {
    successMsg(nama);
  }

  // mengecek inputan email kosong atau tidak
  if (email.value === "") {
    errorMsg(email, "Email tidak boleh kosong");
    tes = false;
  } else if (!check_email(email)) {
    errorMsg(email, "Format email salah");
    tes = false;
  } else {
    successMsg(email);
  }

  // mengecek inputan no.telepon kosong atau tidak
  if (tel.value === "") {
    errorMsg(tel, "No.telepon tidak boleh kosong");
    tes = false;
  } else if (!check_number(tel)) {
    errorMsg(tel, "No.telepon tidak boleh mengandung huruf / simbol");
    tes = false;
  } else if (check_digits(tel)) {
    errorMsg(tel, "No.telepon tidak boleh lebih dari 12 digit");
    tes = false;
  } else {
    successMsg(tel);
  }

  // untuk mengecek inputan tanggal kosong atau tidak
  if (date.value === "") {
    errorMsg(date, "Tanggal kunjungan tidak boleh kosong");
    tes = false;
  } else if (!check_date(date)) {
    errorMsg(date, "Tanggal kunjungan harus tanggal di masa depan");
    tes = false;
  } else {
    successMsg(date);
  }

  if (address.value === "") {
    errorMsg(address, "Alamat tidak boleh kosong");
    tes = false;
  } else {
    successMsg(address);
  }

  // mengecek inputan radio kosong atau tidak
  let checked = false;
  for (const radio of pilihan) {
    if (radio.checked) {
      checked = true;
      break;
    }
  }
  if (checked === false) {
    errorMsg(pilihan[0].parentElement, "Pilihan pembayaran tidak boleh kosong");
    tes = false;
  } else {
    successMsg(pilihan[0].parentElement);
  }

  if (!confirm.checked) {
    errorMsg(confirm, "Konfirmasi bahwa data anda sudah benar ");
    tes = false;
  } else {
    successMsg(confirm);
  }

  // pengkondisian
  if (tes) {
    return true;
  } else {
    return false;
  }
}

// untuk mengecek inputan apakah termasuk huruf
function check_alphabet(input) {
  const pattern = /^[a-zA-Z\s]+$/g;
  return pattern.test(input.value);
}

// untuk mengecek format email
function check_email(input) {
  const pattern =
    /^[a-zA-Z0-9]+[@][a-z0-9]+([.][a-z]{2,}[.][a-z]{2,}[.][a-z]{2,}|[.][a-z]{2,}|[.][a-z]{2,}[.][a-z]{2,})$/g;
  // {2,} minimal muncul 2 kali
  // {2} muncul 2 kali
  // | untuk atau
  return pattern.test(input.value);
}

// untuk mengecek inputan apakah termasuk angka
function check_number(input) {
  const pattern = /^\d+$/g;
  return pattern.test(input.value);
}

// untuk mengecek panjang inputan no.telp
function check_digits(input) {
  // panjang inputan no.telp tidak boleh lebih dari 12
  return input.value.length > 12;
}

// mengecek tanggal yang bukan today atau masa lalu
function check_date(input) {
  // hari ini
  const today = new Date();
  // set waktu ke jam 0 menit 0 second 0 milisecond
  today.setHours(0, 0, 0, 0);
  // ubah input menjadi object date agar nanti bisa dibandingkan
  const input_date = new Date(input.value);
  input_date.setHours(0, 0, 0, 0);
  // membandingkan today dengan date yang dipilih
  return input_date.getTime() > today.getTime();
}

// menambahkan pesan error
function errorMsg(input, message) {
  const input_box = input.parentElement; // input_box
  const small = input_box.querySelector("small");
  // menambahkan pesan error
  small.innerText = message;
  // menambahkan class error
  input_box.className = "input-box error";
}

// untuk memberitahu jika inputan memenuhi syarat
function successMsg(input) {
  const input_box = input.parentElement;
  // menambahkan class success
  input_box.className = "input-box success";
}

// ============ Js cart Gallery===============
document.querySelectorAll(".image-container img").forEach((Image) => {
  Image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".popup-img img").src = Image.getAttribute("src");
  };
});
document.querySelector(".popup-img span").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
};
// ============ Js cart Gallery End===============
