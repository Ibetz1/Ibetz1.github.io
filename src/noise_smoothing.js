var smoothingScript = {}


var label = []
var noise = []
var smooth = []

const data = {
    labels: label,
    datasets: [
        {
            label: "Smooth Data",
            backgroundColor: "#ff2bea",
            borderColor: "#ff2bea",
            data: smooth
        },
        {
            label: "Noisy Data",
            backgroundColor: "#4298f5",
            borderColor: "#4298f5",
            data: noise,
        }

    ],
};

const SmoothingConfigLineChart = {
    type: "line",
    data,
    options: {
        elements: {
            point:{
                radius: 0
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
                align: "center",
                labels: {
                    color: 'rgb(224, 231, 255)',
                    radius: 20,
                    padding: 20,
                    boxWidth: 15,
                    useBorderRadius: true,
                    borderRadius: 3,
                    font: {
                        size: 16
                    }
                }
            }
        }
    }
};

var chart = new Chart(
    document.getElementById("noise-chart"),
    SmoothingConfigLineChart
);

// noise //
///////////
var count = 50;

function noiseChart() {
    for (var i = 0; i < count; i++) {
        var y = Math.random() * 50
        noise.push({
            "x": i,
            "y": y
        })
    }
}


// smooth //
////////////
var res = 2

function smoothChart(smoothing) {

    for (var i = 1; i < noise.length; i++) {
        var p1_x = noise[i - 1]["x"];
        var p2_x = noise[i]["x"];
    
        var step = (p2_x - p1_x) / res;
        for (var j = 0; j < res; j++) {
    
            var x = p2_x + (j * step)
            var y = 20
    
            for (var k = 0; k < noise.length - 1; k++) {
                var dx = noise[k + 1]["x"] + noise[k]["x"]
                var dy = noise[k + 1]["y"] - noise[k]["y"]
                y -= ( dy ) / (1 + Math.pow(1 + Math.E, smoothing * ( x + dx / -2 )))
            }
            smooth.push(
                {"x": x, "y": y}
            )
            label.push(x)
        }
    }
}

function updateSmoothing() {
    var smoothing = document.getElementById("smoothing-slider").value;
    
    smooth.length = 0
    label.length = 0

    smoothChart((100 - smoothing) / 50)
    chart.data.datasets[0].data = smooth
    chart.update("none")
}

// create a new chart
function newChart() {
    smooth.length = 0
    noise.length = 0
    label.length = 0
    
    var smoothing = document.getElementById("smoothing-slider").value;

    // gen charts
    noiseChart() 
    smoothChart((100 - smoothing) / 50)

    chart.data.datasets[0].data = smooth
    chart.update("none")
}

newChart()
