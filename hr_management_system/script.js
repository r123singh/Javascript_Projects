google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Sales', 'Expenses', 'Profit'],
        ['Jan', 1000, 400, 200],
        ['Feb', 1170, 460, 250],
        ['Mar', 660, 1120, 300],
        ['Apr', 1030, 540, 350],
        ['May', 1000, 400, 200],
        ['Jun', 1170, 460, 250],
        ['Jul', 660, 1120, 300],
        ['Aug', 1030, 540, 350],
        ['Sep', 1000, 400, 200],
        ['Oct', 1170, 460, 250],
        ['Nov', 660, 1120, 300],
        ['Dec', 1030, 540, 350]
    ]);

    var options = {
        chart: {

        },
        bars: 'vertical', // Required for Material Bar Charts.
        legend: { position: "none" },
        isStacked: true,
        backgroundColor: 'transparent',
        vAxis: {
            textPosition: 'none',
            gridlines: { color: "transparent" }
        },
        hAxis: {
            textPosition: 'none',
            ticks: [0]
        }
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
