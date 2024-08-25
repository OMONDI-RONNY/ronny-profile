// script.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and text elements inside the modal
var modalImage = document.getElementById("modalImage");
var modalText = document.getElementById("modalText");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to display text in the modal
function showTextModal(text) {
    modal.style.display = "flex";
    modalImage.style.display = "none";
    modalText.style.display = "block";
    modalText.textContent = text;
}

// Function to display an image in the modal
function showImageModal(imageSrc) {
    modal.style.display = "flex";
    modalImage.style.display = "block";
    modalText.style.display = "none";
    modalImage.src = imageSrc;
}

// When the user clicks on any of the certificate links
document.getElementById("degreeBtn").onclick = function() {
    showTextModal("Anticipated Graduation: December 2024 with Second Class Honors Upper Division");
}
document.getElementById("kcseBtn").onclick = function() {
    showImageModal("images/kcse.jpg");
}
document.getElementById("kcpeBtn").onclick = function() {
    showImageModal("images/PRIMARY_CERT.jpg");
}
document.getElementById("hackathonBtn").onclick = function() {
    showImageModal("images/hackathon.jpg");
}
document.getElementById("plpBtn").onclick = function() {
    showTextModal("In Progress");
}
document.getElementById("edurekaBtn").onclick = function() {
    showImageModal("images/edureka.jpg");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
