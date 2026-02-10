var dsLocalTestInstance = { name: 'testInstance1', area: 656104, perimeter: 3326.436001 };
var latestElement8ieDataArray = [];
var latestElement8ieLayoutObject = [];

document.getElementById('testinstance1button').disabled = true;

function dropdown_show() {
  document.getElementById("dropdown_factual").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-factual");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var table = {
  type: 'table',
  columnorder: [0, 1, 2, 3],
  columnwidth: [20, 25, 85, 90],
  header: {
    values: [["<b>Rule ID</b>"], ["<b>Activation degree</b>"], ["<b>Factual rule</b>"], ["<b>Factual explanation</b>"]],
    align: "center",
    line: { width: 1, color: 'black' },
    fill: { color: "grey" },
    font: { family: "Arial", size: 12, color: "white" }
  },
  cells: {
    values: [["<b>R2</b>", "R1", "R3"],
    ["<b>1.0</b>", "0.0", "0.0"],
    ["<b>IF Perimeter=MF0 AND Area=MF1 THEN Leaf IS Chinese_horse_chestnut</b>", "IF Area=MF0 THEN Leaf IS Chinese_horse_chestnut", "IF Perimeter=MF1 AND Area=MF2 THEN Leaf IS Chinese_horse_chestnut"],
    ["<b>The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.</b>", "The leaf is Chinese horse chestnut because area is not very small.", "The leaf is Chinese horse chestnut because perimeter is very small and area is not very small."],
    ],
    align: "center",
    line: { color: "black", width: 1 },
    font: { family: "Arial", size: 11, color: ["black"] },
    //domain: {x: [0, 0.5], y: [0.5,1]},
    //domain: {column: 0, row: 0}
  },
  xaxis: 'x1',
  yaxis: 'y1',
  domain: { row: 1, column: 0 }
}

var trace_area_scaling = {  
  x: [112823.0, 1123619.0],
  y: [0, 0],  
  mode: 'none',
  line: {dash: "dash"},
  name: '',
  showlegend: false,
  //visible: false,
  marker: { size: 1, color: 'black' },  
  xaxis: 'x3',
  yaxis: 'y3',
}

var trace_perimeter_scaling = {  
  x: [1882.34, 9662.20],
  y: [0, 0],  
  mode: 'none',
  line: {dash: "dash"},
  name: '',
  showlegend: false,
  //visible: false,
  marker: { size: 1, color: 'black' },  
  xaxis: 'x2',
  yaxis: 'y2',
}

var trace_area = {
  x: [643460.0, 656104.0, 1123619.0, 1123619.0, 643460.0],
  y: [0, 1, 1, 0, 0],
  type: 'scatter',
  //name: 'Area',
  //title: 'Area',
  fill: 'toself',
  color: 'red',
  xaxis: 'x3',
  yaxis: 'y3',
  //domain: {x:[0.5, 1], y:[0,0.3]}
};

var test_instance_line_area = {
  x: [656104, 656104],
  y: [0, 1],
  type: 'scatter',
  mode: 'lines',
  line: { dash: "dash" },
  marker: { color: 'black' },
  //name: 'Area',
  //title: 'Area',
  fill: 'toself',
  xaxis: 'x3',
  yaxis: 'y3',
  //domain: {x:[0.5, 1], y:[0,0.3]}
};

var area_text = {
  x: [618220],
  y: [1.05],
  mode: 'text',
  //name: 'Area',
  text: ['<b>Area</b>'],
  font: { size: 14 },
  textposition: 'top',
  type: 'scatter',
  xaxis: 'x3',
  yaxis: 'y3',
};

var trace_perimeter = {
  x: [1882.34, 1882.34, 3692.048, 3802.419, 1882.34],
  y: [0, 1, 1, 0, 0],
  type: 'scatter',
  //name: 'Perimeter',
  //title: 'Perimeter',
  fill: 'toself',
  color: 'blue',
  xaxis: 'x2',
  yaxis: 'y2',
  //domain: {x:[0.5, 1], y:[0,0.3]}
};

var test_instance_line_perimeter = {
  x: [3326.436001, 3326.436001],
  y: [0, 1],
  type: 'scatter',
  mode: 'lines',
  line: { dash: "dash" },
  marker: { color: 'black' },
  //name: 'Perimeter',
  //title: 'Perimeter',
  fill: 'toself',
  xaxis: 'x2',
  yaxis: 'y2',
  //domain: {x:[0.5, 1], y:[0,0.3]}
};

var perimeter_text = {
  x: [5770],
  y: [1.05],
  mode: 'text',
  //name: 'Perimeter',
  text: ['<b>Perimeter</b>'],
  font: { size: 14 },
  textposition: 'top',
  type: 'scatter',
  xaxis: 'x2',
  yaxis: 'y2',
};

var data = [trace_perimeter, test_instance_line_perimeter, perimeter_text, trace_area, trace_area_scaling, trace_perimeter_scaling, test_instance_line_area, area_text, table];

var axis = {
  showline: false,
  zeroline: true,
  showgrid: true,
  mirror: true,
  ticklen: 4,
  gridcolor: '#ffffff',
  tickfont: { size: 12 },
  //xaxis: {range: [1850,  9700]}
}

var axis1_table = { domain: [0, 1], anchor: 'y1' }
var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
var axis1_2 = { domain: [0, 0.45], anchor: 'y2' }
var axis2_2 = { domain: [0, 0.55], anchor: 'x2' }
var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
var axis2_3 = { domain: [0, 0.55], anchor: 'x3' }

var layout = {
  //grid: {rows: 2, columns: 3, pattern: 'independent'},
  //subplots: ['x1y1', 'x2y2', 'x3y2', 'x4y2'],
  showlegend: false,
  height: 650,
  //title: "Test instance: area = 846440, perimeter = 4914.454",
  //xaxis: { range: [0, 45] },
  //yaxis: { range: [0, 1.1] },

  xaxis1: Object.assign(axis1_table, axis),
  yaxis1: Object.assign(axis2_table, axis),
  xaxis2: Object.assign(axis1_2, axis),
  yaxis2: Object.assign(axis2_2, axis),
  xaxis3: Object.assign(axis1_3, axis),
  yaxis3: Object.assign(axis2_3, axis),
};

var myPlot = document.getElementById('InteractiveElement5');
Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });

function testinstance1(button) {
  button.disabled = true;
  var button2 = document.getElementById('testinstance2button');
  var button3 = document.getElementById('testinstance3button');
  var button4 = document.getElementById('testinstance4button');
  var button5 = document.getElementById('testinstance5button');
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;
  button5.disabled = false;

  dsLocalTestInstance = { name: 'testInstance1', area: 656104, perimeter: 3326.436001 };
  if (dsLocalClass === "Chinese horse chestnut") {
    dsLocalClass = "Anhui Barberry";
  }
  

  var image_test_instance = document.getElementById('image_test_instance');
  image_test_instance.src = "img/chinese_horse_chestnut.jpg";
  image_test_instance.width = "300";
  image_test_instance.height = "225";

  var image_cf = document.getElementById('image_cf');
  image_cf.src = "img/anhui.jpg";
  image_cf.width = "300";
  image_cf.height = "225";

  var final_plot_image_test_instance = document.getElementById('final_plot_image_test_instance');
  final_plot_image_test_instance.src = "img/chinese_horse_chestnut.jpg";
  final_plot_image_test_instance.width = "300";
  final_plot_image_test_instance.height = "225";

  var final_plot_image_cf = document.getElementById('final_plot_image_cf');
  final_plot_image_cf.src = "img/anhui.jpg";
  final_plot_image_cf.width = "300";
  final_plot_image_cf.height = "225";

  document.getElementById('cfclass1button').innerHTML = "Anhui Barberry";
  document.getElementById('cfclass2button').innerHTML = "Chinese redbud";
  document.getElementById('cfclass3button').innerHTML = "Nanmu";
  document.getElementById('cfclass4button').innerHTML = "Crape myrtle";

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Activation degree</b>"], ["<b>Factual rule</b>"], ["<b>Factual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R2</b>", "R1", "R3"],
      ["<b>1.0</b>", "0.0", "0.0"],
      ["<b>IF Perimeter=MF0 AND Area=MF1 THEN Leaf IS Chinese_horse_chestnut</b>", "IF Area=MF0 THEN Leaf IS Chinese_horse_chestnut", "IF Perimeter=MF1 AND Area=MF2 THEN Leaf IS Chinese_horse_chestnut"],
      ["<b>The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.</b>", "The leaf is Chinese horse chestnut because area is not very small.", "The leaf is Chinese horse chestnut because perimeter is very small and area is not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_area = {
    x: [643460.0, 656104.0, 1123619.0, 1123619.0, 643460.0],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_area = {
    x: [656104, 656104],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var area_text = {
    x: [618220],
    y: [1.05],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_perimeter = {
    x: [1882.34, 1882.34, 3692.048, 3802.419, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_perimeter = {
    x: [3326.436001, 3326.436001],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var perimeter_text = {
    x: [5770],
    y: [1.05],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

  var data = [trace_perimeter, test_instance_line_perimeter, perimeter_text, trace_area, test_instance_line_area, area_text, table, trace_area_scaling, trace_perimeter_scaling];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
    //xaxis: {range: [1850, 9700]}
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.55], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.55], anchor: 'x3' }

  var layout = {
    //grid: {rows: 2, columns: 3, pattern: 'independent'},
    //subplots: ['x1y1', 'x2y2', 'x3y2', 'x4y2'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },

    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis),
  };

  Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });

  var cfbutton = document.getElementById('cfclass1button');
  cfbutton.disabled = true;
  var cfbutton2 = document.getElementById('cfclass2button');
  var cfbutton3 = document.getElementById('cfclass3button');
  var cfbutton4 = document.getElementById('cfclass4button');
  cfbutton2.disabled = false;
  cfbutton3.disabled = false;
  cfbutton4.disabled = false;

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Relevance score</b>"], ["<b>Counterfactual rule</b>"], ["<b>Counterfactual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R4</b>", "R5"],
      ["<b>3.049</b>", "3.195"],
      ["<b>IF Perimeter=MF2 AND Area=MF3 THEN Leaf IS Anhui_Barberry</b>", "IF Area=MF4 THEN Leaf IS Anhui_Barberry"],
      ["<b>The leaf would be Anhui Barberry if perimeter were very small and area were very small.</b>", "The leaf would be Anhui Barberry if area were not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2382.518, 2477.288, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    domain: { x: [0.5, 1], y: [0.35, 0.65] }
  };

  var text_perimeter = {
    x: [5770],
    y: [1.025],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area = {
    x: [112823, 112823, 325474, 326683, 112823],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    domain: { x: [0.5, 1], y: [0, 0.3] }
  };

  var text_area = {
    x: [618220],
    y: [1.025],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

var cf_data = [trace_perimeter, text_perimeter, trace_area, text_area, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0.0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.7], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.7], anchor: 'x3' }

  var cf_layout = {
    //grid: {rows: 1, columns: 3, pattern: 'independent'},
    //subplots: ['xy', 'x2y', 'x3y'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },
    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis)
  };

  Plotly.newPlot('InteractiveElement6', cf_data, cf_layout, { displayModeBar: false });

  var trace1 = { // class 1.0
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

  var data_final_plot = [trace1, trace2, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];

  var layout_final_plot = {
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

  latestElement8ieDataArray = data_final_plot;
  latestElement8ieLayoutObject = layout_final_plot;
  Plotly.newPlot('InteractiveElement8', data_final_plot, layout_final_plot, { displayModeBar: false });
  renderIE7(dsLocalTestInstance, dsLocalClass)
}

function testinstance2(button) {
  button.disabled = true;
  var testinstance1button = document.getElementById('testinstance1button');
  var testinstance3button = document.getElementById('testinstance3button');
  var testinstance4button = document.getElementById('testinstance4button');
  var testinstance5button = document.getElementById('testinstance5button');
  testinstance1button.disabled = false;
  testinstance3button.disabled = false;
  testinstance4button.disabled = false;
  testinstance5button.disabled = false;

  dsLocalTestInstance = { name: 'testInstance2', area: 293411, perimeter: 2332.469263 };
  if (dsLocalClass === "Anhui Barberry") {
    dsLocalClass = "Chinese horse chestnut";
  }
  

  var image_test_instance = document.getElementById('image_test_instance');
  image_test_instance.src = "img/anhui.jpg";
  image_test_instance.width = "300";
  image_test_instance.height = "225";

  var image_cf = document.getElementById('image_cf');
  image_cf.src = "img/chinese_horse_chestnut.jpg";
  image_cf.width = "300";
  image_cf.height = "225";

  var final_plot_image_test_instance = document.getElementById('final_plot_image_test_instance');
  final_plot_image_test_instance.src = "img/anhui.jpg";
  final_plot_image_test_instance.width = "300";
  final_plot_image_test_instance.height = "225";

  var final_plot_image_cf = document.getElementById('final_plot_image_cf');
  final_plot_image_cf.src = "img/chinese_horse_chestnut.jpg";
  final_plot_image_cf.width = "300";
  final_plot_image_cf.height = "225";

  document.getElementById('cfclass1button').innerHTML = "Chinese horse chestnut";
  document.getElementById('cfclass2button').innerHTML = "Chinese redbud";
  document.getElementById('cfclass3button').innerHTML = "Nanmu";
  document.getElementById('cfclass4button').innerHTML = "Crape myrtle";

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Activation degree</b>"], ["<b>Factual rule</b>"], ["<b>Factual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [
        ["<b>R4</b>", "R5"],
        ["<b>1.0</b>", "0.0"],
        ["<b>IF Perimeter=MF2 AND Area=MF3 THEN Leaf IS Anhui_Barberry</b>", "IF Area=MF4 THEN Leaf IS Anhui_Barberry"],
        ["<b>The leaf is Anhui Barberry because perimeter is very small and area is very small.</b>", "The leaf is Anhui Barberry because area is not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_area = {
    x: [112823.0, 112823.0, 325474.0, 326683.0, 112823.0],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_area = {
    x: [293411, 293411],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var area_text = {
    x: [618220],
    y: [1.05],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2382.518, 2477.288, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_perimeter = {
    x: [2332.469263, 2332.469263],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var perimeter_text = {
    x: [5770],
    y: [1.05],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

  var data = [trace_perimeter, test_instance_line_perimeter, perimeter_text, trace_area, test_instance_line_area, area_text, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
    //xaxis: {range: [1850, 9700]}
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.6], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.6], anchor: 'x3' }

  var layout = {
    //grid: {rows: 2, columns: 3, pattern: 'independent'},
    //subplots: ['x1y1', 'x2y2', 'x3y2', 'x4y2'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },

    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis),
  };

  var myPlot = document.getElementById('InteractiveElement5');
  Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });

  var cfbutton = document.getElementById('cfclass1button');
  cfbutton.disabled = true;
  var cfbutton2 = document.getElementById('cfclass2button');
  var cfbutton3 = document.getElementById('cfclass3button');
  var cfbutton4 = document.getElementById('cfclass4button');
  cfbutton2.disabled = false;
  cfbutton3.disabled = false;
  cfbutton4.disabled = false;

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Relevance score</b>"], ["<b>Counterfactual rule</b>"], ["<b>Counterfactual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R2</b>", "R3", "R1"],
      ["<b>2.682</b>", "2.682", "3.032"],
      ["<b>IF Perimeter=MF0 AND Area=MF1 THEN Leaf IS Chinese_horse_chestnut</b>", "IF Perimeter=MF1 AND Area=MF2 THEN Leaf IS Chinese_horse_chestnut", "IF Area=MF0 THEN Leaf IS Chinese_horse_chestnut"],
      ["<b>The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.</b>", "The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.", "The leaf is Chinese horse chestnut because area is not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2382.518, 2477.288, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    domain: { x: [0.5, 1], y: [0.35, 0.65] }
  };

  var text_perimeter = {
    x: [5770],
    y: [1.025],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area = {
    x: [112823, 112823, 325474, 326683, 112823],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    domain: { x: [0.5, 1], y: [0, 0.3] }
  };

  var text_area = {
    x: [618220],
    y: [1.025],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

var cf_data = [trace_perimeter, text_perimeter, trace_area, text_area, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0.0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.55], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.55], anchor: 'x3' }

  var cf_layout = {
    //grid: {rows: 1, columns: 3, pattern: 'independent'},
    //subplots: ['xy', 'x2y', 'x3y'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },
    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis)
  };

  Plotly.newPlot('InteractiveElement6', cf_data, cf_layout, { displayModeBar: false });

  var trace1 = { // class 1.0
    x: [3326.436001, 3437.313201, 3385.146679, 3692.048266, 3559.247184, 3479.957862, 3575.3031, 3480.023879, 3555.486866, 3682.315293],
    y: [656104.0, 711827.0, 715232.0, 745941.0, 755141.0, 764054.0, 768026.0, 768525.0, 769234.0, 775039.0],
    mode: 'markers',
    type: 'scatter',
    name: 'CF class<br>(FL)',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'green' }
  };

  var trace2 = { // class 2.0
    //	y: [920207.0,922188.0,924251.0,930828.0,938827.0,947855.0,967536.0,980293.0,994317.0,995655.0,1006143.0,214844.0,220552.0,221067.0,229484.0,231796.0,232934.0,234236.0,235988.0,237104.0,238313.0,243581.0,243811.0,244291.0,244329.0,248844.0,251734.0,254532.0,257441.0,262224.0,262229.0,263981.0,266921.0,275528.0,275533.0,276186.0,277963.0,278061.0,279535.0,283601.0,283619.0,284553.0,285183.0,293411.0,295009.0,295217.0,297745.0,302402.0,302710.0,307102.0,309667.0,318933.0,320402.0,320753.0,320767.0,321514.0,322762.0,325474.0],
    //    x: [3823.136577,3918.356923,3910.232032,3881.528496,3869.202595,3958.342638,3933.653388,4308.849348,4136.163056,4168.214788,3928.048266,1919.959595,1953.248917,1882.344371,1959.574819,1973.415439,2042.604256,2026.469263,2053.876334,2011.190042,2088.452019,1956.871283,2022.344371,1936.912914,2041.373808,2119.474314,2077.055049,2151.917964,2185.758585,2145.883476,2120.829653,2136.930158,2189.29769,2203.113924,2249.942351,2176.143361,2219.574819,2169.273303,2188.243866,2190.770778,2187.214429,2275.515944,2203.356565,2332.469263,2246.594155,2310.33427,2341.356565,2302.861182,2292.368758,2257.623592,2313.866233,2395.398195,2327.304833,2340.819551,2382.518036,2306.275395,2287.790114,2377.966738],
    y: [293411],
    x: [2332.469263],
    mode: 'markers',
    type: 'scatter',
    name: 'Test<br>instance',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'red' }
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

  var data_final_plot = [trace2, trace1, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];

  var layout_final_plot = {
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

  latestElement8ieDataArray = data_final_plot;
  latestElement8ieLayoutObject = layout_final_plot;
  Plotly.newPlot('InteractiveElement8', data_final_plot, layout_final_plot, { displayModeBar: false });
  renderIE7(dsLocalTestInstance, dsLocalClass)
}

function testinstance3(button) {
  button.disabled = true;
  var button1 = document.getElementById('testinstance1button');
  var button2 = document.getElementById('testinstance2button');
  var button4 = document.getElementById('testinstance4button');
  var button5 = document.getElementById('testinstance5button');
  button1.disabled = false;
  button2.disabled = false;
  button4.disabled = false;
  button5.disabled = false;

  dsLocalTestInstance = { name: 'testInstance3', area: 432550, perimeter: 2793.547473 };
  if (dsLocalClass === "Chinese redbud") {
    dsLocalClass = "Chinese horse chestnut";
  }
  

  var image_test_instance = document.getElementById('image_test_instance');
  image_test_instance.src = "img/chinese_redbud.jpg";
  image_test_instance.width = "300";
  image_test_instance.height = "225";

  var image_cf = document.getElementById('image_cf');
  image_cf.src = "img/chinese_horse_chestnut.jpg";
  image_cf.width = "300";
  image_cf.height = "225";

  var final_plot_image_test_instance = document.getElementById('final_plot_image_test_instance');
  final_plot_image_test_instance.src = "img/chinese_redbud.jpg";
  final_plot_image_test_instance.width = "300";
  final_plot_image_test_instance.height = "225";

  var final_plot_image_cf = document.getElementById('final_plot_image_cf');
  final_plot_image_cf.src = "img/chinese_horse_chestnut.jpg";
  final_plot_image_cf.width = "300";
  final_plot_image_cf.height = "225";

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Activation degree</b>"], ["<b>Factual rule</b>"], ["<b>Factual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R7</b>", "R6"],
      ["<b>1.0</b>", "0.0"],
      ["<b>IF Perimeter=MF4 AND Area=MF5 THEN Leaf IS Chinese_redbud</b>", "IF Perimeter=MF3 THEN Leaf IS Chinese_redbud"],
      ["<b>The leaf is Chinese redbud because perimeter is very small and area is not very small.</b>", "The leaf is Chinese redbud because perimeter is very large."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  };

  document.getElementById('cfclass1button').innerHTML = "Chinese horse chestnut";
  document.getElementById('cfclass2button').innerHTML = "Anhui Barberry";
  document.getElementById('cfclass3button').innerHTML = "Nanmu";
  document.getElementById('cfclass4button').innerHTML = "Crape myrtle";

  var trace_area = {
    x: [325474.0, 326683.0, 1123619.0, 1123619.0, 325474.0],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_area = {
    x: [432550, 432550],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var area_text = {
    x: [618220],
    y: [1.05],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2964.304, 3056.765, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_perimeter = {
    x: [2793.547473, 2793.547473],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var perimeter_text = {
    x: [5770],
    y: [1.05],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

  var data = [trace_perimeter, test_instance_line_perimeter, perimeter_text, trace_area, test_instance_line_area, area_text, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
    //xaxis: {range: [1850, 9700]}
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.65], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.65], anchor: 'x3' }

  var layout = {
    //grid: {rows: 2, columns: 3, pattern: 'independent'},
    //subplots: ['x1y1', 'x2y2', 'x3y2', 'x4y2'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },

    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis),
  };

  var myPlot = document.getElementById('InteractiveElement5');
  Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });

  var cfbutton = document.getElementById('cfclass1button');
  cfbutton.disabled = true;
  var cfbutton2 = document.getElementById('cfclass2button');
  var cfbutton3 = document.getElementById('cfclass3button');
  var cfbutton4 = document.getElementById('cfclass4button');
  cfbutton2.disabled = false;
  cfbutton3.disabled = false;
  cfbutton4.disabled = false;

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Relevance score</b>"], ["<b>Counterfactual rule</b>"], ["<b>Counterfactual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R2</b>", "R3", "R1"],
      ["<b>2.467</b>", "2.467", "3.176"],
      ["<b>IF Perimeter=MF0 AND Area=MF1 THEN Leaf IS Chinese_horse_chestnut</b>", "IF Perimeter=MF1 AND Area=MF2 THEN Leaf IS Chinese_horse_chestnut", "IF Area=MF0 THEN Leaf IS Chinese_horse_chestnut"],
      ["<b>The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.</b>", "The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.", "The leaf is Chinese horse chestnut because area is not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2382.518, 2477.288, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    domain: { x: [0.5, 1], y: [0.35, 0.65] }
  };

  var text_perimeter = {
    x: [5770],
    y: [1.025],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area = {
    x: [112823, 112823, 325474, 326683, 112823],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    domain: { x: [0.5, 1], y: [0, 0.3] }
  };

  var text_area = {
    x: [618220],
    y: [1.025],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

var cf_data = [trace_perimeter, text_perimeter, trace_area, text_area, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0.0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.55], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.55], anchor: 'x3' }

  var cf_layout = {
    //grid: {rows: 1, columns: 3, pattern: 'independent'},
    //subplots: ['xy', 'x2y', 'x3y'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },
    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis)
  };

  Plotly.newPlot('InteractiveElement6', cf_data, cf_layout, { displayModeBar: false });

  var trace1 = { // class 1.0
    x: [3326.436001, 3437.313201, 3385.146679, 3692.048266, 3559.247184, 3479.957862, 3575.3031, 3480.023879, 3555.486866, 3682.315293],
    y: [656104.0, 711827.0, 715232.0, 745941.0, 755141.0, 764054.0, 768026.0, 768525.0, 769234.0, 775039.0],
    //y: [656104],
    //x: [3326.436001],
    mode: 'markers',
    type: 'scatter',
    name: 'CF class<br>(FL)',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'green' }
  };

  var trace3 = { // class 3.0
    //	y: [326683.0,329343.0,336922.0,337142.0,341930.0,342251.0,356991.0,381311.0,386085.0,399086.0,414051.0,417094.0,418705.0,420067.0,422148.0,432550.0,436905.0,447403.0,451667.0,462175.0,478749.0,491096.0,607463.0,643460.0,746391.0,775853.0,284048.0,303380.0,334973.0,355970.0,361966.0,368138.0,372720.0,378703.0,384632.0,389951.0,397914.0,415820.0,426844.0,434846.0,437880.0,442237.0,447297.0,463010.0,470751.0,471086.0,480070.0,481079.0,482921.0,486516.0,487734.0,489022.0,492642.0,496158.0,501495.0,514924.0,519882.0,529061.0,530404.0,541015.0,584578.0,1091964.0,1094623.0,1095579.0,1106097.0,1111124.0,1121034.0,1123619.0,349045.0,350832.0,354676.0,357879.0],
    //    x: [2394.802307,2384.795165,2437.179941,2386.73629,2366.9373,2467.304833,2500.978931,2536.961687,2569.020561,2726.826694,2680.96883,2713.848989,2729.589104,2657.630735,2760.383043,2793.547473,2806.660172,2836.358657,2884.584053,2859.73124,2868.015511,2907.838887,3248.456203,3389.787156,3802.418757,3814.865366,5203.976331,6539.301367,6156.223156,7298.494367,6725.59278,7046.938018,7474.785781,7399.080154,6572.480082,6982.237441,6368.306417,7808.390904,7732.487225,7805.94011,7775.13607,7254.217239,8235.628494,7208.511611,8349.618393,8366.581813,7236.70252,8018.616301,8154.758436,9216.575895,7909.111683,7890.449778,8845.189027,8656.128061,8798.537223,7585.271063,9046.887512,8926.76262,8214.966589,9326.443861,9660.198262,6989.439318,6435.621859,5897.41789,6388.718539,6635.012911,6768.658439,6335.789606,2964.303966,2890.262336,3155.188309,3042.186217],
    y: [432550],
    x: [2793.547473],
    mode: 'markers',
    type: 'scatter',
    name: 'Test<br>instance',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'red' }
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

  var data_final_plot = [trace3, trace1, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];

  var layout_final_plot = {
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

  latestElement8ieDataArray = data_final_plot;
  latestElement8ieLayoutObject = layout_final_plot;
  Plotly.newPlot('InteractiveElement8', data_final_plot, layout_final_plot, { displayModeBar: false });
  renderIE7(dsLocalTestInstance, dsLocalClass)
}

function testinstance4(button) {

  var myPlot = document.getElementById('InteractiveElement5');
  Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });
  button.disabled = true;
  var button1 = document.getElementById('testinstance1button');
  var button2 = document.getElementById('testinstance2button');
  var button3 = document.getElementById('testinstance3button');
  var button5 = document.getElementById('testinstance5button');
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button5.disabled = false;

  dsLocalTestInstance = { name: 'testInstance4', area: 358769, perimeter: 3414.833837 };
  if (dsLocalClass === "Nanmu") {
    dsLocalClass = "Chinese horse chestnut";
  }
  

  var image_test_instance = document.getElementById('image_test_instance');
  image_test_instance.src = "img/nanmu.jpg";
  image_test_instance.width = "300";
  image_test_instance.height = "225";

  var image_cf = document.getElementById('image_cf');
  image_cf.src = "img/chinese_horse_chestnut.jpg";
  image_cf.width = "300";
  image_cf.height = "225";

  var final_plot_image_test_instance = document.getElementById('final_plot_image_test_instance');
  final_plot_image_test_instance.src = "img/nanmu.jpg";
  final_plot_image_test_instance.width = "300";
  final_plot_image_test_instance.height = "225";

  var final_plot_image_cf = document.getElementById('final_plot_image_cf');
  final_plot_image_cf.src = "img/chinese_horse_chestnut.jpg";
  final_plot_image_cf.width = "300";
  final_plot_image_cf.height = "225";

  document.getElementById('cfclass1button').innerHTML = "Chinese horse chestnut";
  document.getElementById('cfclass2button').innerHTML = "Anhui Barberry";
  document.getElementById('cfclass3button').innerHTML = "Chinese redbud";
  document.getElementById('cfclass4button').innerHTML = "Crape myrtle";

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Activation degree</b>"], ["<b>Factual rule</b>"], ["<b>Factual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R8</b>", "R10", "R9"],
      ["<b>1.0</b>", "0.334", "0.0"],
      ["<b>IF Perimeter=MF5 AND Area=MF6 THEN Leaf IS Nanmu</b>", "IF Perimeter=MF7 AND Area=MF8 THEN Leaf IS Nanmu", "IF Perimeter=MF6 AND Area=MF7 THEN Leaf IS Nanmu"],
      ["<b>The leaf is Nanmu because perimeter is small and area is very small.</b>", "The leaf is Nanmu because perimeter is very small and area is very small.", "The leaf is Nanmu because perimeter is medium and area is very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_area = {
    x: [277540.0, 313713.0, 601679.0, 607463.0, 277540.0],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_area = {
    x: [358769, 358769],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var area_text = {
    x: [618220],
    y: [1.05],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_perimeter = {
    x: [3155.188, 3162.88, 4036.419, 4528.174, 3155.188],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_perimeter = {
    x: [3414.833837, 3414.833837],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var perimeter_text = {
    x: [5770],
    y: [1.05],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

  var data = [trace_perimeter, test_instance_line_perimeter, perimeter_text, trace_area, test_instance_line_area, area_text, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
    //xaxis: {range: [1850, 9700]}
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.5], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.5], anchor: 'x3' }

  var layout = {
    //grid: {rows: 2, columns: 3, pattern: 'independent'},
    //subplots: ['x1y1', 'x2y2', 'x3y2', 'x4y2'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },

    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis),
  };

  var myPlot = document.getElementById('InteractiveElement5');
  Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });

  var cfbutton = document.getElementById('cfclass1button');
  cfbutton.disabled = true;
  var cfbutton2 = document.getElementById('cfclass2button');
  var cfbutton3 = document.getElementById('cfclass3button');
  var cfbutton4 = document.getElementById('cfclass4button');
  cfbutton2.disabled = false;
  cfbutton3.disabled = false;
  cfbutton4.disabled = false;

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Relevance score</b>"], ["<b>Counterfactual rule</b>"], ["<b>Counterfactual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R2</b>", "R3", "R1"],
      ["<b>2.667</b>", "3.019", "3.232"],
      ["<b>IF Perimeter=MF0 AND Area=MF1 THEN Leaf IS Chinese_horse_chestnut</b>", "IF Perimeter=MF1 AND Area=MF2 THEN Leaf IS Chinese_horse_chestnut", "IF Area=MF0 THEN Leaf IS Chinese_horse_chestnut"],
      ["<b>The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.</b>", "The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.", "The leaf is Chinese horse chestnut because area is not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2382.518, 2477.288, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    domain: { x: [0.5, 1], y: [0.35, 0.65] }
  };

  var text_perimeter = {
    x: [5770],
    y: [1.025],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area = {
    x: [112823, 112823, 325474, 326683, 112823],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    domain: { x: [0.5, 1], y: [0, 0.3] }
  };

  var text_area = {
    x: [618220],
    y: [1.025],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

var cf_data = [trace_perimeter, text_perimeter, trace_area, text_area, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0.0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.55], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.55], anchor: 'x3' }

  var cf_layout = {
    //grid: {rows: 1, columns: 3, pattern: 'independent'},
    //subplots: ['xy', 'x2y', 'x3y'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },
    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis)
  };

  Plotly.newPlot('InteractiveElement6', cf_data, cf_layout, { displayModeBar: false });

  var trace1 = { // class 1.0
    x: [3326.436001, 3437.313201, 3385.146679, 3692.048266, 3559.247184, 3479.957862, 3575.3031, 3480.023879, 3555.486866, 3682.315293],
    y: [656104.0, 711827.0, 715232.0, 745941.0, 755141.0, 764054.0, 768026.0, 768525.0, 769234.0, 775039.0],
    mode: 'markers',
    type: 'scatter',
    name: 'CF class<br>(FL)',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'green' }
  };

  var trace4 = { // class 4.0
    //	y: [561767.0,567663.0,587000.0,589675.0,593628.0,611364.0,631801.0,652510.0,667296.0,667984.0,690910.0,694774.0,267091.0,276766.0,286769.0,298002.0,313713.0,316517.0,319250.0,320954.0,334613.0,344136.0,353741.0,358769.0,359217.0,384758.0,394982.0,396652.0,397790.0,415386.0,427805.0,431413.0,433519.0,435325.0,437264.0,454179.0,469774.0,472499.0,476454.0,479559.0,482767.0,494218.0,494234.0,511537.0,511577.0,516259.0,519952.0,543161.0,546009.0,548851.0,555336.0,566870.0,581962.0,582167.0,585467.0,586265.0,586582.0,587593.0,599995.0,601679.0],
    //    x: [4647.77828,5266.846389,5006.035206,4933.702161,5084.076836,5138.478857,5316.16724,5126.721497,5369.373301,5251.959087,6054.299274,6003.429217,2818.299782,2844.792206,2477.287589,2872.684558,3134.331311,2561.201369,2980.851081,3030.833837,3162.879651,3201.880518,2947.946535,3414.833837,2846.858223,3322.331311,3288.556708,3056.764861,3172.456203,3377.260244,3368.88261,3576.516303,3606.367025,3307.309017,3338.051224,3216.906997,3345.375034,3540.776188,3352.061325,3659.90613,3441.191268,3556.301008,3572.720272,4036.418757,3784.433042,3697.188309,3357.683692,7039.020054,3681.129435,3589.656347,3605.708078,3690.075611,3854.835062,3501.423807,3870.097039,3617.413706,3717.379218,3700.945669,3881.753893,3792.349781],
    y: [358769],
    x: [3414.833837],
    mode: 'markers',
    type: 'scatter',
    name: 'Test<br>instance',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'red' }
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

  var data_final_plot = [trace4, trace1, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];

  var layout_final_plot = {
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

  latestElement8ieDataArray = data_final_plot;
  latestElement8ieLayoutObject = layout_final_plot;
  Plotly.newPlot('InteractiveElement8', data_final_plot, layout_final_plot, { displayModeBar: false });
  renderIE7(dsLocalTestInstance, dsLocalClass)
}

function testinstance5(button) {
  button.disabled = true;
  var button1 = document.getElementById('testinstance1button');
  var button2 = document.getElementById('testinstance2button');
  var button3 = document.getElementById('testinstance3button');
  var button4 = document.getElementById('testinstance4button');
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;


  dsLocalTestInstance = { name: 'testInstance5', area: 209532, perimeter: 3757.557067 };
  if (dsLocalClass === "Crape myrtle") {
    dsLocalClass = "Chinese horse chestnut";
  }
  


  var test_instance_image = document.getElementById('image_test_instance');
  test_instance_image.src = "img/crape_myrtle.jpg";
  test_instance_image.width = "300";
  test_instance_image.height = "225";

  var image_cf = document.getElementById('image_cf');
  image_cf.src = "img/chinese_horse_chestnut.jpg";
  image_cf.width = "300";
  image_cf.height = "225";

  var final_plot_image_test_instance = document.getElementById('final_plot_image_test_instance');
  final_plot_image_test_instance.src = "img/crape_myrtle.jpg";
  final_plot_image_test_instance.width = "300";
  final_plot_image_test_instance.height = "225";

  var final_plot_image_cf = document.getElementById('final_plot_image_cf');
  final_plot_image_cf.src = "img/chinese_horse_chestnut.jpg";
  final_plot_image_cf.width = "300";
  final_plot_image_cf.height = "225";

  document.getElementById('cfclass1button').innerHTML = "Chinese horse chestnut";
  document.getElementById('cfclass2button').innerHTML = "Anhui Barberry";
  document.getElementById('cfclass3button').innerHTML = "Chinese redbud";
  document.getElementById('cfclass4button').innerHTML = "Nanmu";

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Activation degree</b>"], ["<b>Factual rule</b>"], ["<b>Factual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R11</b>"],
      ["<b>1.0</b>"],
      ["<b>IF Perimeter=MF8 AND Area=MF9 THEN Leaf IS Crape_myrtle</b>"],
      ["<b>The leaf is Crape myrtle because perimeter is medium and area is very small.</b>"],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  }

  var trace_area = {
    x: [112823.0, 112823.0, 277540.0, 284048.0, 112823.0],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_area = {
    x: [209532, 209532],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var area_text = {
    x: [618220],
    y: [1.05],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_perimeter = {
    x: [2844.792, 2867.462, 9662.2, 9662.2, 2844.792],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var test_instance_line_perimeter = {
    x: [3757.557067, 3757.557067],
    y: [0, 1],
    type: 'scatter',
    mode: 'lines',
    line: { dash: "dash" },
    marker: { color: 'black' },
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    //domain: {x:[0.5, 1], y:[0,0.3]}
  };

  var perimeter_text = {
    x: [5770],
    y: [1.05],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  }

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  }

  var data = [trace_perimeter, test_instance_line_perimeter, perimeter_text, trace_area, test_instance_line_area, area_text, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
    //xaxis: {range: [1850, 9700]}
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.75], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.75], anchor: 'x3' }

  var layout = {
    //grid: {rows: 2, columns: 3, pattern: 'independent'},
    //subplots: ['x1y1', 'x2y2', 'x3y2', 'x4y2'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },

    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis),
  };

  var myPlot = document.getElementById('InteractiveElement5');
  Plotly.newPlot('InteractiveElement5', data, layout, { displayModeBar: false });

  var cfbutton = document.getElementById('cfclass1button');
  cfbutton.disabled = true;
  var cfbutton2 = document.getElementById('cfclass2button');
  var cfbutton3 = document.getElementById('cfclass3button');
  var cfbutton4 = document.getElementById('cfclass4button');
  cfbutton2.disabled = false;
  cfbutton3.disabled = false;
  cfbutton4.disabled = false;

  var table = {
    type: 'table',
    columnorder: [0, 1, 2, 3],
    columnwidth: [20, 25, 85, 90],
    header: {
      values: [["<b>Rule ID</b>"], ["<b>Relevance score</b>"], ["<b>Counterfactual rule</b>"], ["<b>Counterfactual explanation</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [["<b>R2</b>", "R3", "R1"],
      ["<b>2.520</b>", "2.677", "3.218"],
      ["<b>IF Perimeter=MF0 AND Area=MF1 THEN Leaf IS Chinese_horse_chestnut</b>", "IF Perimeter=MF1 AND Area=MF2 THEN Leaf IS Chinese_horse_chestnut", "IF Area=MF0 THEN Leaf IS Chinese_horse_chestnut"],
      ["<b>The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.</b>", "The leaf is Chinese horse chestnut because perimeter is very small and area is not very small.", "The leaf is Chinese horse chestnut because area is not very small."],
      ],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] },
      //domain: {x: [0, 0.5], y: [0.5,1]},
      //domain: {column: 0, row: 0}
    },
    xaxis: 'x1',
    yaxis: 'y1',
    domain: { row: 1, column: 0 }
  };

  var trace_perimeter = {
    x: [1882.34, 1882.34, 2382.518, 2477.288, 1882.34],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Perimeter',
    //title: 'Perimeter',
    fill: 'toself',
    xaxis: 'x2',
    yaxis: 'y2',
    domain: { x: [0.5, 1], y: [0.35, 0.65] }
  };

  var text_perimeter = {
    x: [5770],
    y: [1.025],
    mode: 'text',
    //name: 'Perimeter',
    text: ['<b>Perimeter</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var trace_area = {
    x: [112823, 112823, 325474, 326683, 112823],
    y: [0, 1, 1, 0, 0],
    type: 'scatter',
    //name: 'Area',
    //title: 'Area',
    fill: 'toself',
    xaxis: 'x3',
    yaxis: 'y3',
    domain: { x: [0.5, 1], y: [0, 0.3] }
  };

  var text_area = {
    x: [618220],
    y: [1.025],
    mode: 'text',
    //name: 'Area',
    text: ['<b>Area</b>'],
    font: { size: 14 },
    textposition: 'top',
    type: 'scatter',
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_area_scaling = {  
    x: [112823.0, 1123619.0],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x3',
    yaxis: 'y3',
  };

  var trace_perimeter_scaling = {  
    x: [1882.34, 9662.20],
    y: [0, 0],  
    mode: 'none',
    line: {dash: "dash"},
    name: '',
    showlegend: false,
    marker: { size: 1, color: 'black' },  
    xaxis: 'x2',
    yaxis: 'y2',
  };

  var cf_data = [trace_perimeter, text_perimeter, trace_area, text_area, trace_area_scaling, trace_perimeter_scaling, table];

  var axis = {
    showline: false,
    zeroline: true,
    showgrid: true,
    mirror: true,
    ticklen: 4,
    gridcolor: '#ffffff',
    tickfont: { size: 12 },
  }

  var axis1_table = { domain: [0, 1], anchor: 'y1' }
  var axis2_table = { domain: [0, 0.5], anchor: 'x1' }
  var axis1_2 = { domain: [0.0, 0.45], anchor: 'y2' }
  var axis2_2 = { domain: [0, 0.55], anchor: 'x2' }
  var axis1_3 = { domain: [0.55, 1], anchor: 'y3' }
  var axis2_3 = { domain: [0, 0.55], anchor: 'x3' }

  var cf_layout = {
    //grid: {rows: 1, columns: 3, pattern: 'independent'},
    //subplots: ['xy', 'x2y', 'x3y'],
    showlegend: false,
    height: 650,
    //title: "Test instance: area = 846440, perimeter = 4914.454",
    //xaxis: { range: [0, 45] },
    //yaxis: { range: [0, 1.1] },
    xaxis1: Object.assign(axis1_table, axis),
    yaxis1: Object.assign(axis2_table, axis),
    xaxis2: Object.assign(axis1_2, axis),
    yaxis2: Object.assign(axis2_2, axis),
    xaxis3: Object.assign(axis1_3, axis),
    yaxis3: Object.assign(axis2_3, axis)
  }

  Plotly.newPlot('InteractiveElement6', cf_data, cf_layout, { displayModeBar: false });

  var trace1 = { // class 1.0
    x: [3326.436001, 3437.313201, 3385.146679, 3692.048266, 3559.247184, 3479.957862, 3575.3031, 3480.023879, 3555.486866, 3682.315293],
    y: [656104.0, 711827.0, 715232.0, 745941.0, 755141.0, 764054.0, 768026.0, 768525.0, 769234.0, 775039.0],
    mode: 'markers',
    type: 'scatter',
    name: 'CF class<br>(FL)',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'green' }
  };

  var trace5 = { // class 5.0
    //	y: [476564.0,112823.0,115582.0,143189.0,156439.0,158002.0,180081.0,188627.0,188774.0,198225.0,198990.0,205252.0,205655.0,209532.0,213648.0,214745.0,218501.0,220764.0,221338.0,223325.0,223453.0,225910.0,226131.0,227030.0,228131.0,228955.0,229320.0,229953.0,231316.0,231791.0,234261.0,235805.0,236897.0,236977.0,237086.0,239775.0,240371.0,240688.0,241368.0,241635.0,242771.0,248304.0,248883.0,249328.0,250473.0,251600.0,254261.0,256489.0,258378.0,260886.0,265287.0,268625.0,271608.0,272387.0,272523.0,275644.0,277540.0],
    //    x: [4528.174383,2893.462479,2826.565076,3272.038164,3166.748842,2867.462479,3268.1803,3428.98434,3427.812768,3488.506202,3378.682825,3245.34473,3430.873734,3757.557067,3450.623951,3545.643287,3653.466663,3748.797616,3620.25346,3529.182392,3653.934701,3237.361974,3459.636144,3603.182392,3624.780372,3632.145812,3612.09408,3497.594514,3544.721497,3592.177341,3519.626043,3453.761036,3472.440185,3362.06551,3584.915365,3430.54069,3399.552883,3396.38131,3420.94271,3404.682825,3382.523446,3532.405697,3705.224023,3505.025971,3568.638236,3363.77828,3631.224023,3495.425033,3582.430083,3613.584412,3518.364066,3726.478857,3555.41789,3618.412839,3723.449419,3645.442277,3740.922507],
    y: [209532],
    x: [3757.557067],
    mode: 'markers',
    type: 'scatter',
    name: 'Test<br>instance',
    hovertemplate: 'Area:%{y}<br>Perimeter:%{x}',
    marker: { size: 6, color: 'red' }
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

  var data_final_plot = [trace5, trace1, trace_perimeter_very_small, trace_perimeter_small, trace_perimeter_medium, trace_perimeter_large, trace_perimeter_very_large, trace_area_very_small, trace_area_not_very_small, trace_rule_markers];

  var layout_final_plot = {
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

  latestElement8ieDataArray = data_final_plot;
  latestElement8ieLayoutObject = layout_final_plot;
  Plotly.newPlot('InteractiveElement8', data_final_plot, layout_final_plot, { displayModeBar: false });
  renderIE7(dsLocalTestInstance, dsLocalClass)
}

