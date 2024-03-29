const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

// ====== Tab Navigation on Pet Profile Page ======
const openTab = (e, name) => {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "flex";
  document.getElementById(name).style.flexWrap = "wrap";

  e.currentTarget.className += " active";
};

// const mypetsContainer = document.querySelector(".mypets-grid");

// if (mypetsContainer && mypetsContainer.children) {
//   mypetsContainer.lastElementChild;
//   for (let pet of mypetsContainer.children) {
//     if (pet !== mypetsContainer.lastElementChild) {
//       pet.addEventListener("click", () => {
//         window.location.href = "/petprofile/" + pet.dataset.petId;
//       });
//     }
//   }
// }

// ====== Form Validation ======
const form = document.getElementById("form");
const nameval = document.getElementById("name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const smallname = document.getElementById("smallname");
const smallusername = document.getElementById("smallusername");
const smallpassword = document.getElementById("smallpassword");

const checkInputs = () => {
  const nameValue = nameval.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === "") {
    smallname.innerText = "Cannot leave name blank";
    smallname.classList = "mess-error";
    nameval.classList = "error";
    smallname.style.visibility = "visible";
  } else {
    nameval.classList = "success";
    smallname.style.visibility = "hidden";
  }

  if (usernameValue === "") {
    smallusername.innerText = "Cannot leave username blank";
    smallusername.classList = "mess-error";
    username.classList = "error";
    smallusername.style.visibility = "visible";
  } else {
    username.classList = "success";
    smallusername.style.visibility = "hidden";
  }

  if (passwordValue === "") {
    smallpassword.innerText = "Cannot leave password blank";
    smallpassword.classList = "mess-error";
    password.classList = "error";
    smallpassword.style.visibility = "visible";
  } else {
    password.classList = "success";
    smallpassword.style.visibility = "hidden";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
