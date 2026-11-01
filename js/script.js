// ===================================
// MOBILE NAVIGATION
// ===================================

document.addEventListener("DOMContentLoaded", function() {

    // WHATSAPP CONTACT FORM

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const firstName = contactForm.elements["firstName"].value;
            const lastName = contactForm.elements["lastName"].value;
            const email = contactForm.elements["email"].value;
            const projectType = contactForm.elements["projectType"].value;
            const message = contactForm.elements["message"].value;

            const whatsappMessage =
                "Hello Enigma Digital!\n\n" +
                "New Website Inquiry\n\n" +
                "Name: " + firstName + " " + lastName + "\n" +
                "Email: " + email + "\n" +
                "Project Type: " + projectType + "\n\n" +
                "Message:\n" + message;

            const phoneNumber = "254793011126";

            const whatsappURL =
                "https://wa.me/" + phoneNumber +
                "?text=" + encodeURIComponent(whatsappMessage);

            window.location.href = whatsappURL;
        });
    }

    // AUTOMATIC COPYRIGHT YEAR

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});