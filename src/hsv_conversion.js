var red = []
var green = []
var blue = []
var hsvLabel = []

for (var i = 0; i < 20; i++) {
    red.push({
        "x": i,
        "y": 2 * i
    })

    green.push({
        "x": i,
        "y": 2 * i
    })

    blue.push({
        "x": i,
        "y": 2 * i
    })

    hsvLabel.push(i)
}

const hsvData = {
    labels: hsvLabel,
    datasets: [
        {
            label: "Red Channel",
            backgroundColor: "#ff2bea",
            borderColor: "#ff0000",
            data: red
        }
    ],
};

const HSVconfigLineChart = {
    type: "line",
    hsvData,
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

var hsvChart = new Chart(
    document.getElementById("hsv-chart"),
    HSVconfigLineChart
);
// chart.update()