const loginButton = document.getElementById("girisButton");


const loginModal = document.getElementById("loginModal");


function openLoginModal() {
  loginModal.style.display = "block";
}


function closeLoginModal() {
  loginModal.style.display = "none";
}

// Giriş butonuna tıklama olayı
loginButton.addEventListener("click", openLoginModal);


// Kapatma Tuşu
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeLoginModal);


// Şifremi Unuttum bağlantısını seçme
const forgotPasswordLink = document.getElementById("forgotPassword");


// Şifremi Unuttum ekranını açma fonksiyonu
function openForgotPasswordModal() {
  alert("Şifre Sıfırlama Ekranı Açıldı");
}



loginModal.addEventListener("submit", function (e) {
  e.preventDefault();
  const kullaniciAdi = document.getElementById("username").value;
  const sifre = document.getElementById("password").value;

  if (kullaniciAdi === "ozge" && sifre === "1234") {
    alert("Giriş başarılı, Hoşgeldin!");
    loginModal.style.display = "none"; 
  } else {
    alert("Hatalı şifre veya kullanıcı adı!");
  }
});

