window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function togglePricing() {
  const toggleBtn = document.getElementById("pricingToggle");
  const priceBasic = document.getElementById("price-basic");
  const periodBasic = document.getElementById("period-basic");
  const pricePremium = document.getElementById("price-premium");
  const periodPremium = document.getElementById("period-premium");

  if (toggleBtn.checked) {
    // Mode Tahunan
    priceBasic.textContent = "Rp 500.000";
    periodBasic.textContent = "/ tahun";

    pricePremium.textContent = "Rp 1.200.000";
    periodPremium.textContent = "/ tahun";
  } else {
    // Mode Bulanan
    priceBasic.textContent = "Rp 50.000";
    periodBasic.textContent = "/ bulan";

    pricePremium.textContent = "Rp 120.000";
    periodPremium.textContent = "/ bulan";
  }
}

function validateForm() {
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputMessage = document.getElementById("inputMessage");
  const successMsg = document.getElementById("successMsg");

  let isValid = true;

  successMsg.classList.add("d-none");

  if (inputName.value.trim() === "") {
    inputName.classList.add("is-invalid");
    isValid = false;
  } else {
    inputName.classList.remove("is-invalid");
  }

  if (inputEmail.value.trim() === "" || !inputEmail.value.includes("@")) {
    inputEmail.classList.add("is-invalid");
    isValid = false;
  } else {
    inputEmail.classList.remove("is-invalid");
  }

  if (inputMessage.value.trim() === "") {
    inputMessage.classList.add("is-invalid");
    isValid = false;
  } else {
    inputMessage.classList.remove("is-invalid");
  }

  if (isValid) {
    successMsg.classList.remove("d-none");
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";

    inputName.classList.remove("is-invalid");
    inputEmail.classList.remove("is-invalid");
    inputMessage.classList.remove("is-invalid");
  }
}

document.getElementById("inputName").addEventListener("input", function () {
  this.classList.remove("is-invalid");
});
document.getElementById("inputEmail").addEventListener("input", function () {
  this.classList.remove("is-invalid");
});
document.getElementById("inputMessage").addEventListener("input", function () {
  this.classList.remove("is-invalid");
});
