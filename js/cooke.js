const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const declineBtn = document.getElementById("decline-cookies");

const consent = localStorage.getItem("cookieConsent");

  if (!consent) {
    setTimeout(() => {
      banner.classList.add("show");
    }, 500);
  }

  acceptBtn.onclick = () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.classList.remove("show");
  };

  declineBtn.onclick = () => {
    localStorage.setItem("cookieConsent", "declined");
    banner.classList.remove("show");
  };
