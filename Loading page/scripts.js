// Simulate page loading
function simulateLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Add loading class to body
    document.body.classList.add('loading');

    // Simulate a delay (e.g., 3 seconds)
    setTimeout(() => {
        // Remove loading screen
        loadingScreen.style.display = 'none';
        // Remove blur effect
        document.body.classList.remove('loading');
    }, 3000); // Adjust the delay as needed
}

// Call the function when the page loads
window.onload = simulateLoading;