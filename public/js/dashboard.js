// Get modal elements
var modal = document.getElementById("new-blog-modal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Open modal when trigger button is clicked
btn.onclick = function() {
  modal.style.display = "block";
};

// Close modal when close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};