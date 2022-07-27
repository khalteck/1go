AOS.init();
//the header animation trigger!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!S
window.onscroll = function spread() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("navbar").style.width = "95%";
        document.getElementById("navbar").style.paddingLeft = "40px";
        document.getElementById("navbar").style.boxSizing = "border-box";
        document.getElementById("vert").style.transform = "translateY(-100px)";
        document.getElementById("sign").style.display = "block";
    } else {
        document.getElementById("navbar").style.width = "30%";
        document.getElementById("navbar").style.paddingLeft = "0";
        document.getElementById("vert").style.transform = "translateY(0)";
        document.getElementById("sign").style.display = "none";
    }
}

//to toggle password visibility!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function togglePsw() {
    let passwordInput = document.querySelectorAll(".pass-input");
    passwordInput.forEach((item, index) => {
        if (item.type === "password") {
            item.type = "text";
        } else {
            item.type = "password";
        }
    })
  } 


//the dropdown menu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dropTray = document.getElementById("myDropdown");
//the open dropdown menu button
const openTray = document.getElementById("dropbtn");
//the close dropdown button
const closeTray = document.getElementById("close-dropdown");
//the nav bar
const navBar = document.getElementById("mobile-navbar");
openTray.addEventListener("click", () => {
    navBar.style.backgroundColor = "#f4f7f6";
    closeTray.style.display = "block";
    dropTray.style.display = "block";
    openTray.style.display = "none";
});
closeTray.addEventListener("click", function() {
    dropTray.style.display = "none";
    closeTray.style.display = "none";
    openTray.style.display = "block";
    navBar.style.backgroundColor = "rgba(0,0,0,0)";
});
dropTray.addEventListener("click", () => {
    dropTray.style.display = "none";
    closeTray.style.display = "none";
    openTray.style.display = "block";
    navBar.style.backgroundColor = "rgba(0,0,0,0)";
});

//the section fade/slide in!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fade In and out
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
// fade in observed elements that are in view
        entry.target.classList.replace('fadeyOut', 'fadeyIn');
      } else {
// fade out observed elements that are not in view
        entry.target.classList.replace('fadeyIn', 'fadeyOut');
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const fadeElms = document.querySelectorAll('.fadey');
  fadeElms.forEach(el => observer.observe(el));


//the download popup
const popupDownload = document.getElementById("popup-download");

window.addEventListener("load", function() {
    setTimeout(() => {
        popupDownload.classList.remove("hide")
        popupDownload.style.opacity = "1"
    }, 5000)
});
document.getElementById("close-popup").addEventListener("click", () => {
    popupDownload.classList.add("hide")
    document.getElementById("download-sec").classList.add("hide");
});

/*to submit signup data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function sendData() {
    let signupData = new FormData(document.getElementById("signupForm"));
    fetch("#", {
      method: "POST",
      body: JSON.stringify(signupData)
    })
   //return server response as text
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
    //server response
    .then((response) => {
      console.log(response);
      if (response.error) {
        alert("Invalid details"); /*displays error message*/
      } else {
        window.open(
          "target.html"
        ); /*opens the target page while Id & password matches*/
      }
    })
    //handle errors
    .catch((error) => { console.log(error); });
  }

  /*to login!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
