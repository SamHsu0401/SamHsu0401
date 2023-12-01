document.addEventListener("DOMContentLoaded", function () {

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
