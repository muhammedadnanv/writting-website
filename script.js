const editor = document.getElementById('editor');
const saveButton = document.getElementById('save-btn');
const savedContent = document.getElementById('saved-content');

// Load saved content from localStorage
editor.value = localStorage.getItem('savedContent') || '';

// Event listener for the Save button
saveButton.addEventListener('click', () => {
    const content = editor.value;
    // Save content to localStorage
    localStorage.setItem('savedContent', content);
    // Display a message
    savedContent.innerHTML = `<div class="alert alert-success" role="alert">Content saved!</div>`;
    // Clear the message after 2 seconds
    setTimeout(() => {
        savedContent.innerHTML = '';
    }, 2000);
});
