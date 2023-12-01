document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", function (event) {
        // Initialize an array to store error messages
        const errors = [];

        // Validation for username (minimum length of 3 characters)
        if (usernameInput.value.length < 3) {
            errors.push("Username must be at least 3 characters long.");
        }

        // Validation for email (must be a valid email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        // Validation for password (minimum length of 6 characters)
        if (passwordInput.value.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        // Validation for password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            errors.push("Passwords do not match.");
        }

        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            alert(errors.join("\n")); // Display error messages in an alert
        }
    });

    // Social Media Sharing Functions
    function shareOnFacebook() {
        // Replace 'your-website-url' with the URL you want to share, now here we will try Youtube.com as an example.
        const urlToShare = 'https://www.youtube.com';
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    }

    function shareOnTwitter() {
        // Replace 'your-website-url' and 'your-text' with your desired URL and text
        const urlToShare = 'your-website-url';
        const textToShare = 'your-text';
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
        window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    }
    function shareOnInstagram() {
        // Replace 'your-image-url' and 'your-caption' with the image URL and caption you want to share
        const imageUrl = 'your-image-url';
        const caption = 'your-caption';
        const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(caption)}`;
        window.open(instagramShareUrl, 'Share on Instagram', 'width=600,height=400');
    }

    // Event listeners for social media sharing buttons
    const shareFacebookButton = document.getElementById("share-facebook");
    const shareTwitterButton = document.getElementById("share-twitter");
    const shareInstagramButton = document.getElementById("share-instagram");

    shareFacebookButton.addEventListener("click", shareOnFacebook);
    shareTwitterButton.addEventListener("click", shareOnTwitter);
    shareInstagramButton.addEventListener("click", shareOnInstagram);

});
