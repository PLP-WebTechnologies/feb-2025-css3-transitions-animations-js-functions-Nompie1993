document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const animatedBox = document.getElementById('animated-box');
    const animateBtn = document.getElementById('animate-btn');
    const colorBtn = document.getElementById('color-btn');
    const saveBtn = document.getElementById('save-btn');
    const clearBtn = document.getElementById('clear-btn');
    const userInput = document.getElementById('user-input');
    const displayArea = document.getElementById('display-area');
    
    // Load saved data from localStorage
    loadSavedData();
    
    // Animation button click handler
    animateBtn.addEventListener('click', function() {
        // Add the animation class
        animatedBox.classList.add('animate');
        
        // Remove the class after animation completes
        setTimeout(() => {
            animatedBox.classList.remove('animate');
        }, 2000);
    });
    
    // Color change button click handler
    colorBtn.addEventListener('click', function() {
        animatedBox.classList.toggle('color-change');
    });
    
    // Save button click handler
    saveBtn.addEventListener('click', function() {
        const text = userInput.value.trim();
        if (text) {
            // Save to localStorage
            localStorage.setItem('userText', text);
            
            // Update display
            displaySavedData(text);
            
            // Clear input
            userInput.value = '';
            
            // Trigger a confirmation animation
            displayArea.classList.add('animate');
            setTimeout(() => {
                displayArea.classList.remove('animate');
            }, 1000);
        }
    });
    
    // Clear button click handler
    clearBtn.addEventListener('click', function() {
        localStorage.removeItem('userText');
        displayArea.textContent = '';
    });
    
    // Function to load saved data
    function loadSavedData() {
        const savedText = localStorage.getItem('userText');
        if (savedText) {
            displaySavedData(savedText);
        }
    }
    
    // Function to display saved data
    function displaySavedData(text) {
        displayArea.textContent = `Saved Text: ${text}`;
    }
    
    // Additional interactive animation
    animatedBox.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    animatedBox.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});