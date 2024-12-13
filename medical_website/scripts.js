
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPieChart);
function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Cost per Day'],
        ['Maintainence', 11],
        ['Payroll', 2],
        ['Electricity', 2],
        ['Expenses', 2],
        ['Medicines', 7]
    ]);

    var options = {
        title: '',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'Revenue', 'Expenses'],
        ['1-10-2024', 1000, 400],
        ['2-10-2024', 1170, 460],
        ['3-10-2024', 660, 1120],
        ['4-10-2024', 1030, 540],
        
    ]);

    var options = {
        title: 'Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('lineChart'));

    chart.draw(data, options);
}
google.charts.load('current', { 'packages': ['bar'] });

google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
    var data = google.visualization.arrayToDataTable([
        ['Department', 'Doctors staff', { role: 'style' }],
        ['OBG', 50, 'red'],
        ['Paediatrics', 70, 'red' ],
        ['Cardilogy', 60, 'red'],
        ['Medicine', 30, 'red'],
        ['Opthamology', 40, 'red'],
        ['Opthamology', 40, 'red'],
        ['Opthamology', 40,'red'],
    ]);

    var options = {
        chart: {
        },
        bars: 'vertical' ,// Required for Material Bar Charts.
        legend: { position: 'none' },
    };

    var chart = new google.charts.Bar(document.getElementById('barChart'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}