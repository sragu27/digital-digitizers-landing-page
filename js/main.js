 const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll("#sidebar .nav-link");
  const menuToggleIcon = menuToggle.querySelector("i");
  
  function toggleSidebar(open) {
    if (open) {
      sidebar.style.left = "0";
      overlay.style.display = "block";
      sidebar.style.display ="block";
      menuToggleIcon.className = "bi bi-x-circle-fill";
    } else {
      sidebar.style.left = "-250px";
      overlay.style.display = "none";
      sidebar.style.display ="none"
      menuToggleIcon.className = "bi bi-list";
    }
  }
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.style.left === "0px";
    toggleSidebar(!isOpen);
  });

  overlay.addEventListener("click", () => {
    toggleSidebar(false);
  });


  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      toggleSidebar(false);
    });
  });

  const desktopLinks = document.querySelectorAll("#navbarMain .nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
      if (pageYOffset >= section.offsetTop - 80) {
        current = section.id;
      }
    });

    [...navLinks, ...desktopLinks].forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });