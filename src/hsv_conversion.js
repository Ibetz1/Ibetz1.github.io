var red = []
var green = []
var blue = []
var curColor = []
var hsvLabel = []

const hsvData = {
    labels: hsvLabel,
    datasets: [
        {
            label: "Red Channel",
            backgroundColor: "#f7253a",
            borderColor: "#f7253a",
            data: red
        },
        {
            label: "Green Channel",
            backgroundColor: "#23fc8c",
            borderColor: "#23fc8c",
            data: green
        },
        {
            label: "Blue Channel",
            backgroundColor: "#4178fa",
            borderColor: "#4178fa",
            data: blue
        },
        {
            label: "Current Color",
            backgroundColor: "#4178fa",
            borderColor: "#4178fa",
            data: curColor
        },
    ],
};

const HSVconfigLineChart = {
    type: "line",
    data: hsvData,
    options: {
        responsive: true,
        maintainAspectRatio: false,

        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            y: {
                min: 0,
                max: 1
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

// generate RGB channel from HSV
function generateChannels(h, s, v) {
    var k1 = v * (1 - s)
    var k2 = v - k1

    var r = k1 + ( k2 * Math.min(Math.max(3 * Math.abs( ( ((h      ) / 180) % 2) - 1 ) - 1, 0), 1) );
    var g = k1 + ( k2 * Math.min(Math.max(3 * Math.abs( ( ((h + 240) / 180) % 2) - 1 ) - 1, 0), 1) );
    var b = k1 + ( k2 * Math.min(Math.max(3 * Math.abs( ( ((h + 120) / 180) % 2) - 1 ) - 1, 0), 1) );

    return [ r, g, b ]
}

// update stored channels
function updateChannels(s, v) {
    red.length = 0
    green.length = 0
    blue.length = 0
    hsvLabel.length = 0

    for (var i = 0; i <= 360; i++) {
        var channels = generateChannels(i, s, v)
    
        red.push({
            "x": i,
            "y": channels[0]
        })
    
        green.push({
            "x": i,
            "y": channels[1]
        })
    
        blue.push({
            "x": i,
            "y": channels[2]
        })
    
        hsvLabel.push(i)
    }
}

updateChannels(1, 1)

var hsvChart = new Chart(
    document.getElementById("hsv-chart"),
    HSVconfigLineChart
);

// update graph
function updateHSV() {
    var hue = 360 * document.getElementById("hue-slider").value / 100;
    var sat = document.getElementById("sat-slider").value / 100;
    var val = document.getElementById("val-slider").value / 100;
    var curChannels = generateChannels(hue, sat, val)

    console.log(hue)
 
    var currentColor = "rgb(" + (curChannels[0] * 255) + ", " 
                                            + (curChannels[1] * 255) + ", " 
                                            + (curChannels[2] * 255) + ")";

    hsvChart.data.datasets[3].backgroundColor = currentColor
    hsvChart.data.datasets[3].borderColor = currentColor

    curColor.length = 0
    curColor.push({
        "x": Math.floor(hue),
        "y": 0
    })
    curColor.push({
        "x": Math.floor(hue),
        "y": 1
    })

    console.log(hue)

    curRed   = [ curChannels[0] ]
    curGreen = [ curChannels[1] ]
    curBlue  = [ curChannels[2] ]

    updateChannels(sat, val)

    hsvChart.data.datasets[0].data = red
    hsvChart.data.datasets[1].data = green
    hsvChart.data.datasets[2].data = blue
    hsvChart.data.datasets[3].data = curColor

    hsvChart.update("none")
}