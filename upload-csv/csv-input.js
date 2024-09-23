const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const fileHeaderDisplay = document.getElementById('file-headers');
const fileNameDisplay = document.getElementById('file-name');
const fileInfoDiv = document.getElementById('file-info');

dropArea.addEventListener('mouseover', (event) => {
    event.preventDefault();
    dropArea.classList.add('mouse-over');
});

dropArea.addEventListener('mouseout', () => {
    dropArea.classList.remove('mouse-over');
});

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('drag-over');
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.classList.remove('drag-over');
    dropArea.classList.remove('mouse-over');
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'text/csv') {
        processFile(file);
    } else {
        alert('Please drop a valid CSV file.');
    }
});

dropArea.addEventListener('click', () => {
    fileElem.click();
});

fileElem.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        processFile(file);
    } else {
        alert('Please select a valid CSV file.');
    }
});

function processFile(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const csvText = e.target.result;
        const headers = csvText.split('\n')[0].split(',');
        fileNameDisplay.textContent = file.name; // Display the file name
        fileHeaderDisplay.textContent = headers.join(', ');
        fileInfoDiv.style.display = 'block'; // Show file info section
    };
    reader.readAsText(file);
}
