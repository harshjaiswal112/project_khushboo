document.getElementById("surprise-btn").addEventListener("click", function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // You can also add a sweet message that appears after the confetti.
    setTimeout(function() {
        alert("Wishing you a wonderful birthday filled with love and happiness!");
    }, 2000);  // After 2 seconds
});
