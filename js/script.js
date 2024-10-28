// JavaScript for category filtering
// Show products based on the selected category
function showCategory(category) {
  // Get all product cards
  const productCards = document.querySelectorAll(".product-card");

  // Loop through the cards and display/hide based on the category
  productCards.forEach((card) => {
    const categories = card.getAttribute("data-category").split(", ");
    if (categories.includes(category) || category === "all") {
      card.style.display = "block"; // Show card
    } else {
      card.style.display = "none"; // Hide card
    }
  });

  // Update the active tab
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    if (
      tab.innerText ===
      category.charAt(0).toUpperCase() + category.slice(1)
    ) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

// Get modal elements
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModalBtn = document.querySelector(".close-btn");

// Function to open modal
function openModal(imageSrc, title, description) {
  modalImage.src = imageSrc; // Set the image source
  modalTitle.textContent = title; // Set the product title
  modalDescription.textContent = description; // Set the product description
  modal.style.display = "block"; // Show the modal
}

// Function to close modal
function closeModal() {
  modal.style.display = "none"; // Hide the modal
}

// Close modal when the close button is clicked
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
