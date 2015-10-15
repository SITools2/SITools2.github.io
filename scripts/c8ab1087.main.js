'use strict';
$(function () {
    var chart;

    var yearsCO2 = ['x1'];
    var valuesCO2 = ['CO2 (ppm)'];

    var yearsTemp = ['x2'];
    var valuesTemp = ['Temperature (C°)'];

    $.when(
            $.getJSON("datas/co2evol.json", null, function (co2data) {
                $.each(co2data, function (idx, val) {
                    yearsCO2.push(val.YEAR);
                    valuesCO2.push(val.MEAN);
                });
            }),
            $.getJSON("datas/temperatures.json", null, function (tempdata) {
                $.each(tempdata, function (idx, val) {
                    if (val.YEAR >= 1950) {
                        yearsTemp.push(val.YEAR);
                        valuesTemp.push(val.ANNUAL_ANOMALY + 8.69);
                    }
                });
            })

    ).then(function () {

        chart = c3.generate({
            data: {
                xs: {
                    'CO2 (ppm)': 'x1',
                    'Temperature (C°)': 'x2',
                },
                columns: [
                    yearsCO2,
                    yearsTemp,
                    valuesCO2,
                    valuesTemp
                ],
                axes: {
                    'Temperature (C°)': 'y2'
                }
            },
            axis: {
                y2: {
                    show: true,
                    tick: {
                        format: function (d) { return d.toFixed(2); }
                    }
                }
            }
        });

    });

});