var ie7PointX, ie7PointY;

function drawDiagram(dsie7LocalTestInstance, dsie7LocalClass) {
    let tableColumns = [["<b>Area</b>"], ["<b>Perimeter</b>"], ["<b>Counterfactual explanation</b>"]];

    const csv = {
        'testInstance1': {
            'Anhui Barberry': {
                area: [924251.0, 938827.0, 947855.0, 967536.0, 980293.0],
                perimeter: [3813.136, 3899.232, 3969.202, 4058.343, 4308.849]
            },
            'Chinese redbud': {
                area: [326683.0, 329343.0, 334973.0, 336922.0, 337142.0],
                perimeter: [2384.802, 2494.795, 2557.179, 2867.305, 2964.304]
            },
            'Nanmu': {
                area: [320954.0, 322417.0, 324425.0, 326954.0, 334613.0],
                perimeter: [3030.287, 3119.201, 3180.851, 3260.834, 3321.880]
            },
            'Crape myrtle': {
                area: [265287.0, 268625.0, 271608.0, 272523.0, 277540.0],
                perimeter: [3313.584, 3423.364, 3545.418, 3645.442, 3761.923]
            },
        },
        'testInstance2': {
            'Chinese horse chestnut': {
                area: [583371.0, 630970.0, 656104.0, 711827.0, 715232.0],
                perimeter: [3079.659, 3222.009, 3326.436, 3437.313, 3585.147]
            },
            'Chinese redbud': {
                area: [326683.0, 329343.0, 334973.0, 336922.0, 337142.0],
                perimeter: [2314.802, 2444.795, 2537.179, 2867.305, 2964.304]
            },
            'Nanmu': {
                area: [320954.0, 322417.0, 324425.0, 326954.0, 334613.0],
                perimeter: [3030.287, 3119.201, 3180.851, 3260.834, 3321.880]
            },
            'Crape myrtle': {
                area: [265287.0, 268625.0, 271608.0, 272523.0, 277540.0],
                perimeter: [3313.584, 3418.364, 3545.418, 3645.442, 3740.923]
            },
        },
        'testInstance3': {
            'Chinese horse chestnut': {
                area: [583371.0, 630970.0, 656104.0, 711827.0, 715232.0],
                perimeter: [3079.659, 3222.009, 3326.436, 3437.313, 3585.147]
            },
            'Anhui Barberry': {
                area: [924251.0, 938827.0, 947855.0, 967536.0, 980293.0],
                perimeter: [3813.136, 3899.232, 3969.202, 4238.342, 4308.849]
            },
            'Nanmu': {
                area: [320954.0, 322417.0, 324425.0, 326954.0, 334613.0],
                perimeter: [3030.287, 3119.201, 3180.851, 3260.834, 3321.880]
            },
            'Crape myrtle': {
                area: [277540.0, 272523.0, 271608.0, 268625.0, 265287.0],
                perimeter: [3740.922, 3645.442, 3545.418, 3418.364, 3313.584]
            },
        },
        'testInstance4': {
            'Chinese horse chestnut': {
                area: [583371.0, 630970.0, 656104.0, 711827.0, 715232.0],
                perimeter: [3079.659, 3222.009, 3326.436, 3437.313, 3585.146]
            },
            'Anhui Barberry': {
                area: [924251.0, 938827.0, 947855.0, 967536.0, 980293.0],
                perimeter: [3795.136, 3879.232, 3943.202, 3998.342, 4308.849]
            },
            'Chinese redbud': {
                area: [326683.0, 329343.0, 334973.0, 336922.0, 337142.0],
                perimeter: [2324.802, 2394.795, 2447.179, 2497.304, 2964.303]
            },
            'Crape myrtle': {
                area: [265287.0, 268625.0, 271608.0, 272523.0, 277540.0],
                perimeter: [3313.584, 3418.364, 3545.418, 3645.442, 3740.922]
            },
        },
        'testInstance5': {
            'Chinese horse chestnut': {
                area: [583371.0, 630970.0, 656104.0, 711827.0, 715232.0],
                perimeter: [3079.659, 3222.009, 3326.436, 3437.313, 3585.147]
            },
            'Anhui Barberry': {
                area: [924251.0, 938827.0, 947855.0, 967536.0, 980293.0],
                perimeter: [3803.136, 3889.232, 3939.202, 3998.342, 4308.849]
            },
            'Chinese redbud': {
                area: [326683.0, 329343.0, 334973.0, 336922.0, 337142.0],
                perimeter: [2314.802, 2384.795, 2447.179, 2497.305, 2964.304]
            },
            'Nanmu': {
                area: [320954.0, 322417.0, 324425.0, 326954.0, 334613.0],
                perimeter: [3030.287, 3119.201, 3180.851, 3260.834, 3321.880]
            },
        },
    }

    let area_params = csv[dsie7LocalTestInstance.name][dsie7LocalClass].area;
    let perimeter_params = csv[dsie7LocalTestInstance.name][dsie7LocalClass].perimeter;
    ie7PointX = perimeter_params[0];
    ie7PointY = area_params[0];

    
    let tableRows = [
        [`<b>${area_params[0]}</b>`],
        [`<b>${perimeter_params[0]}</b>`],
        [`The leaf would be <b>${dsie7LocalClass}</b> if perimeter were <b>${perimeter_params[0]}</b> and area were <b>${area_params[0]}</b>.`]
    ];

    function generateSliderSteps(data) {
        let steps = [];
        data.forEach((d) => {
            steps.push({
                label: `${d}`,
                method: 'restyle',
                args: ['data', `data_${d}`]
            })
        })
        return steps;
    }

    const create_table = (columns, data) => ({
        type: 'table',
        header: {
            values: columns,
            align: "center",
            line: { width: 1, color: 'black' },
            fill: { color: "grey" },
            font: { family: "Arial", size: 12, color: "white" }
        },
        cells: {
            values: data,
            align: "center",
            line: { color: "black", width: 1 },
            font: { family: "Arial", size: 11, color: ["black"] },
        }
    });

    var data = [create_table(tableColumns, tableRows)]

    function generateLayout(area, perimeter) {
        return {
            showlegend: false,
            height: 500,
            title: {
                text: "Counterfactual for selected class",
                pad: {
                    t: 20
                },
                font: {
                    family: 'Arial',
                    color: "black",
                    size: 22
                },
                xref: 'paper',
            },
            annotations: [{
                x: 0,
                y: 0.63,
                xref: 'paper',
                yref: 'paper',
                text: 'Apply User Constraints :',
                showarrow: false,
                font: {
                    family: 'Arial',
                    size: 18,
                    color: 'black'
                }
            }],
            sliders: [{
                name: "Area",
                y: 0.62,
                currentvalue: {
                    xanchor: 'center',
                    prefix: 'Area, value: ',
                    font: {
                        color: '#888',
                        size: 12
                    }
                },
                steps: generateSliderSteps(area),
            }, {
                name: "Perimeter",
                y: 0.3,
                currentvalue: {
                    xanchor: 'center',
                    prefix: 'Perimeter, value: ',
                    font: {
                        color: '#889',
                        size: 12
                    }
                },
                steps: generateSliderSteps(perimeter),
            }]
        }
    }

    var layout = generateLayout(area_params, perimeter_params);


    var myPlot_ie7 = document.getElementById('InteractiveElement7')
    Plotly.newPlot('InteractiveElement7', data, layout, { displayModeBar: false });
    renderIE8(ie7PointX, ie7PointY)


    myPlot_ie7.on('plotly_sliderchange', (sliderData) => {
        while (InteractiveElement7.data.length > 0) {
            Plotly.deleteTraces(InteractiveElement7, [0]);
        }
        if (sliderData.slider.name === "Area") {
            const value = +sliderData.slider.steps[sliderData.slider.active].value;
            var areaValue = value - 999
            var perimeterValue = tableRows[1][0];
            ie7PointY = areaValue;
            
            //rule map 

            if (areaValue > 112823 && areaValue < 618221) {
                var ar = "Very small";
            } 
            else if (areaValue > 618221 && areaValue < 1123619){
                var ar = "Not very small";}
            else {
                var ar = "";
            }
            if (ie7PointX > 1882.34 && ie7PointX < 3438.31) {
               var pr = "Very small";
            } 
            else if(ie7PointX > 3438.31 && ie7PointX < 4994.28){
                var pr = "Small";
            }
            else if(ie7PointX > 4994.28 && ie7PointX < 6550.26){
                var pr = "Medium";
            }
            else if(ie7PointX > 6550.26 && ie7PointX < 8106.23){
                var pr = "Large";
            }
            else if(ie7PointX > 8106.23 && ie7PointX < 9662.20){
                var pr = "Very large";
            }
            else {
               var pr = "";}

            tableRows = [
                [`<b>${areaValue}</b>`],
                [`<b>${perimeterValue}</b>`],
                [`The leaf would be <b>${dsie7LocalClass}</b> if perimeter were <b>${pr} (${perimeterValue})</b> and area were <b>${ar} (${areaValue})</b>.`]
            ]
            Plotly.addTraces(InteractiveElement7, [create_table(tableColumns, tableRows)])
            renderIE8(ie7PointX, ie7PointY)
        }
        if (sliderData.slider.name === "Perimeter") {
            const value = +sliderData.slider.steps[sliderData.slider.active].value;
            var areaValue = tableRows[0][0]
            var perimeterValue = value - 49;
            ie7PointX = perimeterValue;
            
            //rule map 
               
            if (ie7PointY > 112823 && ie7PointY < 618221) {
               var ar = "Very small";
            } 
            else if (ie7PointY > 618221 && ie7PointY < 1123619){
               var ar = "Not very small";}
            else {
               var ar = "";
            }

            if (perimeterValue > 1882.34 && perimeterValue < 3438.31) {
               var pr = "Very small";
            } 
            else if(perimeterValue > 3438.31 && perimeterValue < 4994.28){
                var pr = "Small";
            }
            else if(perimeterValue > 4994.28 && perimeterValue < 6550.26){
                var pr = "Medium";
            }
            else if(perimeterValue > 6550.26 && perimeterValue < 8106.23){
                var pr = "Large";
            }
            else if(perimeterValue > 8106.23 && perimeterValue < 9662.20){
                var pr = "Very large";
            }
            else {
               var pr = "";}

            tableRows = [
                [`<b>${areaValue}</b>`],
                [`<b>${perimeterValue}</b>`],
                [`The leaf would be <b>${dsie7LocalClass}</b> if perimeter were <b>${pr} (${perimeterValue})</b> and area were <b>${ar} (${areaValue})</b>.`]
            ]
            Plotly.addTraces(InteractiveElement7, [create_table(tableColumns, tableRows)])
            renderIE8(ie7PointX, ie7PointY)
        }
    })
}

var renderIE7 = (dsie7LocalTestInstance, dsie7LocalClass) => {
    drawDiagram(dsie7LocalTestInstance, dsie7LocalClass);
}

renderIE7(dsLocalTestInstance, dsLocalClass)
