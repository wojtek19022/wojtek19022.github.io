$(document).ready(function() {
    const darkModeToggle = document.getElementById("checkbox");
    const body = document.body;
    
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === 'enabled') {
        body.classList.toggle('dark');
        darkModeToggle.checked = true;
    } else if (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no preference saved, check system preference
        body.classList.toggle('dark');
        darkModeToggle.checked = true;
    }
    
    // Toggle dark mode on checkbox change
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.toggle('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.toggle('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});