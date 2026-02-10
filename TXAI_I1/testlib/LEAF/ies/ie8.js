var trace1 = { // class 1.0 -- test instance
  //	y: [819972.0,832990.0,841407.0,846440.0,893980.0,583371.0,630970.0,656104.0,711827.0,715232.0,745941.0,755141.0,764054.0,768026.0,768525.0,769234.0,775039.0,784168.0,785020.0,793200.0,802598.0,805714.0,809646.0,812645.0,813713.0,813931.0,819145.0,820738.0,821821.0,825662.0,825848.0,825936.0,829108.0,829162.0,837444.0,846616.0,847034.0,847582.0,851001.0,858392.0,858780.0,859147.0,860305.0,863727.0,864173.0,865438.0,868818.0,870265.0,870359.0,872036.0,873932.0,874277.0,881323.0,887649.0,888734.0,888736.0,889309.0,891441.0,896875.0,897450.0,907314.0,917528.0,918774.0],
  //    x: [5089.674816,6140.833329,4997.868684,4914.45447,5787.311468,3079.659305,3222.009594,3326.436001,3437.313201,3385.146679,3692.048266,3559.247184,3479.957862,3575.3031,3480.023879,3555.486866,3682.315293,3574.970055,3532.876693,3561.629001,3731.687876,3615.70512,3649.119333,3641.898987,4229.827053,4041.275754,3811.133619,3751.629001,3640.644153,3740.842205,3956.224889,3856.26652,3671.881743,3584.200503,3732.959954,4057.788381,3650.769045,3680.734557,3774.457429,3775.972147,3783.812768,3823.722364,3824.232032,3654.82792,3786.10714,4574.939751,3753.244225,3978.239174,3776.391411,3736.710171,3758.994442,4004.474672,3810.349781,4085.854398,3989.972147,3917.067602,3792.374167,3840.474672,3902.516303,3815.663489,3860.776188,3740.575178,3825.185351],
  y: [656104],
  x: [3326.436001],
  mode: 'markers',
  type: 'scatter',
  name: 'Test<br>instance',
  hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
  marker: { size: 6, color: 'red' }
};

var trace2 = { // class 2.0 -- all data points
  //	y: [920207.0,922188.0,924251.0,930828.0,938827.0,947855.0,967536.0,980293.0,994317.0,995655.0,1006143.0,214844.0,220552.0,221067.0,229484.0,231796.0,232934.0,234236.0,235988.0,237104.0,238313.0,243581.0,243811.0,244291.0,244329.0,248844.0,251734.0,254532.0,257441.0,262224.0,262229.0,263981.0,266921.0,275528.0,275533.0,276186.0,277963.0,278061.0,279535.0,283601.0,283619.0,284553.0,285183.0,293411.0,295009.0,295217.0,297745.0,302402.0,302710.0,307102.0,309667.0,318933.0,320402.0,320753.0,320767.0,321514.0,322762.0,325474.0],
  //    x: [3823.136577,3918.356923,3910.232032,3881.528496,3869.202595,3958.342638,3933.653388,4308.849348,4136.163056,4168.214788,3928.048266,1919.959595,1953.248917,1882.344371,1959.574819,1973.415439,2042.604256,2026.469263,2053.876334,2011.190042,2088.452019,1956.871283,2022.344371,1936.912914,2041.373808,2119.474314,2077.055049,2151.917964,2185.758585,2145.883476,2120.829653,2136.930158,2189.29769,2203.113924,2249.942351,2176.143361,2219.574819,2169.273303,2188.243866,2190.770778,2187.214429,2275.515944,2203.356565,2332.469263,2246.594155,2310.33427,2341.356565,2302.861182,2292.368758,2257.623592,2313.866233,2395.398195,2327.304833,2340.819551,2382.518036,2306.275395,2287.790114,2377.966738],
  // leave only those that are covered by the selected CF rule
  x: [1919.959595, 1953.248917, 1882.344371, 1959.574819, 1973.415439, 2042.604256, 2026.469263, 2053.876334, 2011.190042, 2088.452019, 1956.871283, 2022.344371, 1936.912914, 2041.373808, 2119.474314, 2077.055049, 2151.917964, 2185.758585, 2145.883476, 2120.829653, 2136.930158, 2189.29769, 2203.113924, 2249.942351, 2176.143361, 2219.574819, 2169.273303, 2188.243866, 2190.770778, 2187.214429, 2275.515944, 2203.356565, 2332.469263, 2246.594155, 2310.33427, 2341.356565, 2302.861182, 2292.368758, 2257.623592, 2313.866233, 2395.398195, 2327.304833, 2340.819551, 2382.518036, 2306.275395, 2287.790114, 2377.966738],
  y: [214844.0, 220552.0, 221067.0, 229484.0, 231796.0, 232934.0, 234236.0, 235988.0, 237104.0, 238313.0, 243581.0, 243811.0, 244291.0, 244329.0, 248844.0, 251734.0, 254532.0, 257441.0, 262224.0, 262229.0, 263981.0, 266921.0, 275528.0, 275533.0, 276186.0, 277963.0, 278061.0, 279535.0, 283601.0, 283619.0, 284553.0, 285183.0, 293411.0, 295009.0, 295217.0, 297745.0, 302402.0, 302710.0, 307102.0, 309667.0, 318933.0, 320402.0, 320753.0, 320767.0, 321514.0, 322762.0, 325474.0],
  mode: 'markers',
  type: 'scatter',
  name: 'CF class<br>(FL)',
  hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
  marker: { size: 6, color: 'green' }
};

var trace_perimeter_very_small = {
  y: [100000.0, 100000.0],
  x: [1882.34, 3438.31],
  showlegend: false,
  name: 'Very small',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_perimeter_small = {
  y: [100000.0, 100000.0],
  x: [3438.31, 4994.28],
  showlegend: false,
  name: 'Small',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_perimeter_medium = {
  y: [100000.0, 100000.0],
  x: [4994.28, 6550.25],
  showlegend: false,
  name: 'Medium',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_perimeter_large = {
  y: [100000.0, 100000.0],
  x: [6550.25, 8106.23],
  showlegend: false,
  name: 'Large',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_perimeter_very_large = {
  y: [100000.0, 100000.0],
  x: [8106.23, 9662.20],
  showlegend: false,
  name: 'Very large',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_area_very_small = {
  y: [112823.0, 618221.0],
  x: [1860, 1860],
  showlegend: false,
  name: 'Very small',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_area_not_very_small = {
  y: [618221.0, 1123619.0],
  x: [1860, 1860],
  showlegend: false,
  name: 'Not very small',
  yaxis: 'x',
  type: 'scatter',
  mode: 'lines',
};

var trace_rule_markers = {
  y: [849735.5, 1085000, 615000, 200000.75, 984272, 618221, 450000.75, 450098.75, 435098, 344108.25, 196808.5],
  x: [5772.265, 3500.7868, 3100.7865, 2156.1215, 5772.265, 7905.364, 2446.43725, 3720.66525, 5346.6185, 3078.67725, 4250.1635],
  text: ['<b>R1</b>', '<b>R2</b>', '<b>R3</b>', '<b>R4</b>', '<b>R5</b>', '<b>R6</b>', '<b>R7</b>', '<b>R8</b>', '<b>R9</b>', '<b>R10</b>', '<b>R11</b>'],
  name: '',
  //text: 'IF area is not very small THEN leaf is Chinese horse chestnut',
  hovertemplate: ['IF Area IS not very small THEN Leaf IS Chinese horse chestnut',
    'IF Perimeter IS very small AND Area IS not very small THEN Leaf IS Chinese horse chestnut',
    'IF Perimeter IS very small AND Area IS not very small THEN Leaf IS Chinese horse chestnut',
    'IF Perimeter IS very small AND Area IS very small THEN Leaf IS Anhui Barberry',
    'IF Area IS not very small THEN Leaf IS Anhui Barberry',
    'IF Perimeter IS very large THEN Leaf IS Chinese redbud',
    'IF Perimeter IS very small AND Area IS not very small THEN Leaf IS Chinese redbud',
    'IF Perimeter IS small AND Area IS very small THEN Leaf IS Nanmu',
    'IF Perimeter IS medium AND Area IS very small THEN Leaf IS Nanmu',
    'IF Perimeter IS very small AND Area IS very small THEN Leaf IS Nanmu',
    'IF Perimeter IS medium AND Area IS very small THEN Leaf IS Crape myrtle',
  ],
  mode: 'text',
  showlegend: false,
};

var data = [trace1, trace2, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];

var layout = {
  yaxis: {
    title: { text: 'Area' },
    //range: [112823.0, 1123619.0], // original intervals
    range: [30000.0, 1150000.0],
    domain: [0, 1]
  },
  xaxis: {
    title: { text: 'Perimeter' },
    range: [1650, 9700]
    //titlefont: {color: '#1f77b4'},
    //tickfont: {color: '#1f77b4'}
  },
  shapes: [{ // R1
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 780010.5,
    x0: 1882.34,
    y1: 919490.5,
    x1: 9662.20,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(15, 128, 191, 0.6)'
  }, { // R2
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 649782,
    x0: 1882.34,
    y1: 1123619,
    x1: 3747.2335,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dash",
    },
    fillcolor: 'rgba(28, 32, 12, 0.6)'
  },
  { // R3
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 537233.5,
    x0: 1882.34,
    y1: 1123619,
    x1: 3235.233,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(225, 225, 64, 0.6)'
  },
  { // R4
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 112823,
    x0: 1882.34,
    y1: 326078.5,
    x1: 2429.903,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(75, 128, 191, 0.6)'
  },
  { // R5
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 919490.5,
    x0: 1882.34,
    y1: 1049053.5,
    x1: 9662.20,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(95, 128, 191, 0.6)'
  },
  { // R6
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 112823,
    x0: 6148.528,
    y1: 1123619,
    x1: 9662.20,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(115, 128, 191, 0.6)'
  },
  { // R7
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 326078.5,
    x0: 1882.34,
    y1: 1123619,
    x1: 3010.5345,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dashdot",
    },
    fillcolor: 'rgba(135, 156, 191, 0.6)'
  },
  { // R8
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 295626.5,
    x0: 3159.034,
    y1: 604571,
    x1: 4282.2965,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(155, 128, 191, 0.6)'
  },
  { // R9
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 112823,
    x0: 4587.976,
    y1: 757373,
    x1: 6105.261,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(175, 128, 191, 0.6)'
  },
  { // R10
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 266189,
    x0: 2812.48,
    y1: 422027.5,
    x1: 3344.8745,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(35, 128, 191, 0.6)'
  },
  { // R11
    type: 'rect',
    xref: 'x',
    yref: 'y',
    y0: 112823,
    x0: 2856.127,
    y1: 280794,
    x1: 9662.2,
    opacity: 0.25,
    line: {
      color: 'rgb(0, 0, 0)',
      width: 1.5,
      dash: "dot",
    },
    fillcolor: 'rgba(215, 128, 191, 0.6)'
  },
  ],
  annotations: [{
    y: 70000,
    x: 2660.325,
    xref: 'x',
    yref: 'y',
    text: 'Very small',
    showlegend: false,
    font: { color: 'brown' },
    //textangle: '-90',
    showarrow: false,
  },
  {
    y: 70000,
    x: 4216.295,
    xref: 'x',
    yref: 'y',
    text: 'Small',
    showlegend: false,
    font: { color: 'brown' },
    //textangle: '-90',
    showarrow: false,
  },
  {
    y: 70000,
    x: 5772.265,
    xref: 'x',
    yref: 'y',
    text: 'Medium',
    showlegend: false,
    font: { color: 'brown' },
    //textangle: '-90',
    showarrow: false,
  },
  {
    y: 70000,
    x: 7328.245,
    xref: 'x',
    yref: 'y',
    text: 'Large',
    showlegend: false,
    font: { color: 'brown' },
    //textangle: '-90',
    showarrow: false,
  },
  {
    y: 70000,
    x: 8884.215,
    xref: 'x',
    yref: 'y',
    text: 'Very large',
    showlegend: false,
    font: { color: 'brown' },
    //textangle: '-90',
    showarrow: false,
  },
  {
    y: 365522,
    x: 1750,
    xref: 'x',
    yref: 'y',
    text: 'Very small',
    showlegend: false,
    font: { color: 'brown' },
    textangle: '-90',
    showarrow: false,
  },
  {
    y: 870920,
    x: 1750,
    xref: 'x',
    yref: 'y',
    text: 'Not very small',
    showlegend: false,
    font: { color: 'brown' },
    textangle: '-90',
    showarrow: false,
  },
  ],
  //yaxis2: {
  //title: 'yaxis2 title',
  //titlefont: {color: '#ff7f0e'},
  //tickfont: {color: '#ff7f0e'},
  //anchor: 'free',
  //overlaying: 'y',
  //side: 'left',
  //position: 0.05
  //},  
  //title:'The FLAVIA dataset'
};

function renderIE8(pointX, pointY) {
  let updatedData = [];
  let updatedLayout = {};
  var trace3 = { x: [pointX], y: [pointY], mode: 'markers', type: 'scatter', name: 'CF class<br>(UP)', hovertemplate: 'Area:%{y}<br>Perimeter:%{x}', marker: { size: 6, color: 'blue' } };
  if (latestElement8ieDataArray.length) {
    let clone = JSON.parse(JSON.stringify(latestElement8ieDataArray));
    let temp1 = clone.slice(0, 2);
    let temp2 = clone.slice(2);
    updatedData = [...temp1, trace3, ...temp2];
    updatedLayout = latestElement8ieLayoutObject;
  } else {
    updatedData = [trace1, trace2, trace3, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];
    updatedLayout = layout
  }
  Plotly.newPlot('InteractiveElement8', updatedData, updatedLayout, { displayModeBar: false });
}
