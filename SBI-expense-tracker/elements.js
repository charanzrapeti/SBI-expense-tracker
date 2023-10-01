// Data for the bar chart
var barData = {
    labels: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','L','M','O','Q','R','T','V','W',"X",'Y','Z'],
    datasets: [{
        label: 'Bar Chart',
        data: [5, 10, 15, 7, 20,12,34,12,32,12,3,21,34,2,12,3,421,3,3,3,22,,3,3,22,2,3,22,2,2,3,22],
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color with transparency
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1 // Border width
    }]
};

// Data for the doughnut chart
var doughnutData = {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [{
        data: [30, 40, 20],
        backgroundColor: ['red', 'green', 'blue'] // Doughnut slice colors
    }]
};

// Get the canvas elements
var barCanvas = document.getElementById('barChart').getContext('2d');
 var doughnutCanvas = document.getElementById('doughnutChart').getContext('2d');

// Create the bar chart
var barChart = new Chart(barCanvas, {
    type: 'bar',
    data: barData
});

// Create the doughnut chart
var doughnutChart = new Chart(doughnutCanvas, {
    type: 'doughnut',
    data: doughnutData,
    options: {
        plugins: {
            legend: {
                position: 'bottom', // Position the legend at the bottom
                labels: {
                    padding: 30, // Increase the bottom margin of labels
                },
            },
            afterDraw: function(chart) {
                var ctx = chart.ctx;
                var width = chart.width;
                var height = chart.height;
                var fontSize = (height / 160).toFixed(1); // Adjust the font size as needed
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "black"; // Adjust the text color
    
                var text = "Center Text"; // Your custom text here
                var textX = Math.round((width - ctx.measureText(text).width) / 2);
                var textY = height / 2;
    
                ctx.fillText(text, textX, textY);
            }
        },
        cutout: '70%', // Make the outer radius thinner (80% of the chart radius)
    },
});


Chart.register({
    id: 'doughnutChart',
    beforeDraw: function(chart, args, options) {
        if (chart.config.type === 'doughnut') {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";

        var text = "82%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY-20);
        ctx.save();
    }

    }
});
// When "Add" is clicked in the custom item modal, add the custom item to the list and close the modal
document.getElementById('addCustomItem').addEventListener('click', function() {
    var customItemText = document.getElementById('customItemText').value;
    if (customItemText.trim() !== '') {
        var customItem = '<a class="dropdown-item" href="#">' + customItemText + '</a>';
        var addCustomLink = document.querySelector('a.dropdown-item[data-bs-target="#customItemModal"]');
        addCustomLink.insertAdjacentHTML('beforebegin', customItem);
        document.getElementById('customItemText').value = '';
        document.getElementById('customItemText').value = '';
    
        
    }
});




