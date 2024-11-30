document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the notification
    const notification = document.getElementById("notification");
    notification.textContent = "Your message has been sent!";
    notification.style.display = "block";

    // Optionally, you can clear the form fields after submission
    this.reset();

    // Hide the notification after a few seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000); // Notification will disappear after 3 seconds
});