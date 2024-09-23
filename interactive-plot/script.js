// Set up initial variables
let slopeInput = document.getElementById('slope');
let interceptSlider = document.getElementById('intercept');
let interceptValue = document.getElementById('intercept-value');

// Function to plot the line
function plotLine(slope, intercept) {
    let xValues = [];
    let yValues = [];
    
    // Generate x and y values
    for (let x = -10; x <= 10; x += 0.5) {
        xValues.push(x);
        yValues.push(slope * x + intercept);
    }

    // Define the trace for the line
    let trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter'
    };

    let data = [trace];
    var layout = {
        title: `y = ${slope}x + ${intercept}`,
        xaxis: {title: 'x'},
        yaxis: {title: 'y'},
    };
    var config = {responsive: true};

    // Plot the line using Plotly
    Plotly.newPlot('plot', data, layout, config);
}

// Initial plot with default values
plotLine(parseFloat(slopeInput.value), parseFloat(interceptSlider.value));

// Update intercept value display
interceptSlider.addEventListener('input', function() {
    interceptValue.textContent = interceptSlider.value;
});

// Update plot when slope or intercept changes
slopeInput.addEventListener('input', function() {
    plotLine(parseFloat(slopeInput.value), parseFloat(interceptSlider.value));
});

interceptSlider.addEventListener('input', function() {
    plotLine(parseFloat(slopeInput.value), parseFloat(interceptSlider.value));
});
