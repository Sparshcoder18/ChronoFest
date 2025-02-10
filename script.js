// Smooth Scrolling for Era Buttons
document.querySelectorAll(".era-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const era = button.classList[1]; // Get the era class (prehistoric, medieval, futuristic)
    document.getElementById(era).scrollIntoView({ behavior: "smooth" });

    // Add a pulse animation to the clicked button
    button.classList.add("pulse");
    setTimeout(() => button.classList.remove("pulse"), 500);
  });
});

// Form Validation and Submission
document.getElementById("reg-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#reg-form input[type='text']").value.trim();
  const email = document.querySelector("#reg-form input[type='email']").value.trim();
  const era = document.getElementById("era-select").value;
  const message = document.querySelector("#reg-form textarea").value.trim();

  if (!name || !email || !era || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Create an object to store form data
  const formData = {
    name,
    email,
    era,
    message,
    timestamp: new Date().toLocaleString(),
  };

  // Save form data to local storage
  let submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  submissions.push(formData);
  localStorage.setItem("formSubmissions", JSON.stringify(submissions));

  // Display success message
  alert("Thank you for registering! Your data has been saved.");

  // Reset the form
  document.getElementById("reg-form").reset();
});

// Optional: Display stored form data in the console
function displayStoredData() {
  const submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  console.log("Stored Form Submissions:", submissions);
}

// Call this function to check stored data
displayStoredData();

// Lightbox for Image Gallery
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    // Clear previous content
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

// Countdown Timer with Animation
const countdown = () => {
  const festDate = new Date("February 14, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = festDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the DOM
  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

  // Add animation to the timer
  const timerElements = document.querySelectorAll(".timer span");
  timerElements.forEach((el) => {
    el.classList.add("pulse");
    setTimeout(() => el.classList.remove("pulse"), 500);
  });

  if (diff < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".timer").innerHTML = "<h2>ChronoFest has begun!</h2>";
  }
};

const countdownInterval = setInterval(countdown, 1000);

// Era Button Hover Animation
document.querySelectorAll(".era-btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
    button.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
  });
});