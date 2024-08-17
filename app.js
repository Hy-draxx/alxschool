document
  .getElementById("notification-btn")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the event from bubbling up to window
    const dropdown = document.getElementById("notification-dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
    document.getElementById("profile-dropdown").style.display = "none"; // Hide the other dropdown
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("notification-dropdown").style.display = "none";
}); //this is theonclick function for the notification dropdown

document
  .getElementById("avatar-btn")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the event from bubbling up to window
    const dropdown = document.getElementById("profile-dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
    document.getElementById("notification-dropdown").style.display = "none"; // Hide the other dropdown
  }); //this is theonclick function for the avatar dropdown

window.onclick = function (event) {
  if (
    !event.target.closest("#notification-btn") &&
    !event.target.closest("#notification-dropdown")
  ) {
    document.getElementById("notification-dropdown").style.display = "none";
  }
  if (
    !event.target.closest("#avatar-btn") &&
    !event.target.closest("#profile-dropdown")
  ) {
    document.getElementById("profile-dropdown").style.display = "none";
  }
};

document.getElementById("hamburger-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});

document.getElementById("close-sidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("active");
}); //this is for thw menu

// Optional: Close sidebar if clicked outside
window.onclick = function (event) {
  if (!event.target.closest("#sidebar") && !event.target.closest("#hamburger-btn")) {
    document.getElementById("sidebar").classList.remove("active");
  }
};

// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("openModalBtn");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
btn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Listen for close click
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});