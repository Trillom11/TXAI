/*var data = { type: 'scatter',
             name: "Explanation: <b>Anna goes to school because she is 15-year-old.</b>"
};

var annotations = [
    {
      text: 'Subject:',
      x: 0.82,
      y: 1.35,
      yref: 'paper',
      align: 'center',
      showarrow: false
    },
    {
      text: 'Verb:',
      x: 1.75,
      y: 1.35,
      yref: 'paper',
      align: 'center',
      showarrow: false
    },
    {
      text: 'Complement:',
      x: 2.9,
      y: 1.35,
      yref: 'paper',
      align: 'center',
      showarrow: false
    },
    {
      text: 'Causal clause:',
      x: 4.1,
      y: 1.35,
      yref: 'paper',
      align: 'center',
      showarrow: false
    }
]

var layout = {
  //showlegend: false,
  //autosize: false,
  //width: 1000,
  height: 275,
  title: "Explanation: <b>Anna goes to school because she is 15-year-old.</b>",
  xaxis: {
    visible: false,
  },
  yaxis: {
    visible: false,
  },
  annotations: annotations,
  updatemenus: [{
        x: 0.32,
        y: 1.0,
	type: "buttons",
        yanchor: 'top',
        buttons: [{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'Anna'
        }, {
            method: 'restyle',
            args: ['line.color', 'blue'],
            label: 'Peter'
        }, {
            method: 'restyle',
            args: ['line.color', 'green'],
            label: 'Anna and Peter'
        }]
        }, {
        x: 0.46,
        y: 1.0,
	type: "buttons",
        yanchor: 'top',
        buttons: [{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'to go'
        },{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'to hang out'
        },{
            method: 'restyle',
            args: ['line.color', 'blue'],
            label: 'to swim'
        }]
    }, {
        x: 0.61,
        y: 1.0,
	type: "buttons",
        yanchor: 'top',
        buttons: [{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'to school'
        },{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'together'
        },{
            method: 'restyle',
            args: ['line.color', 'blue'],
            label: 'to the beach'
        }]
    }, {
        x: 0.8,
        y: 1.0,
        yanchor: 'top',
	type: "buttons",
        buttons: [{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: '15-year-old'
        }, {
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'hang out together'
        }, {
            method: 'restyle',
            args: ['line.color', 'blue'],
            label: 'hate each other'
        }]
    }]
};

var ie4plot = document.getElementById('InteractiveElement4');
Plotly.newPlot('InteractiveElement4', [], layout, {displayModeBar: false});

ie4plot.on('plotly_selected', function(eventData) {
    // get event information from layout
    console.log(eventData);
});
*/

function subj1(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";
  subject = button.value;
  button.disabled = true;
  var subj2button = document.getElementById('subj2button');
  var subj3button = document.getElementById('subj3button');
  subj2button.disabled = false;
  subj3button.disabled = false;
  subj_number = "singular";
  subj_subord_clause = "she";
  aux_verb_subord_clause = "is";

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function subj2(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  console.log(button.value);

  explanation = "Explanation: <b>";
  subject = button.value;
  button.disabled = true;
  var subj1button = document.getElementById('subj1button');
  var subj3button = document.getElementById('subj3button');
  subj1button.disabled = false;
  subj3button.disabled = false;
  subj_number = "singular";
  subj_subord_clause = "he";
  aux_verb_subord_clause = "is";

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;

  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function subj3(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  console.log(button.value);

  explanation = "Explanation: <b>";
  subject = button.value;
  button.disabled = true;
  var subj1button = document.getElementById('subj1button');
  var subj2button = document.getElementById('subj2button');
  subj1button.disabled = false;
  subj2button.disabled = false;
  subj_number = "plural";
  subj_subord_clause = "they";
  aux_verb_subord_clause = "are";

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  console.log("verb_inf = "+verb_inf);

  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") 
    {if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function verb1(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  button.disabled = true;
  var verb2button = document.getElementById('verb2button');
  var verb3button = document.getElementById('verb3button');
  verb2button.disabled = false;
  verb3button.disabled = false;

  var verb_inf = button.value;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function verb2(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  button.disabled = true;
  var verb1button = document.getElementById('verb1button');
  var verb3button = document.getElementById('verb3button');
  verb1button.disabled = false;
  verb3button.disabled = false;

  var verb_inf = button.value;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function verb3(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  button.disabled = true;
  var verb1button = document.getElementById('verb1button');
  var verb2button = document.getElementById('verb2button');
  verb1button.disabled = false;
  verb2button.disabled = false;

  var verb_inf = button.value;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function complement1(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  button.disabled = true;
  var comp2button = document.getElementById('comp2button');
  var comp3button = document.getElementById('comp3button');
  comp2button.disabled = false;
  comp3button.disabled = false;
  var comp = button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function complement2(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  button.disabled = true;
  var comp1button = document.getElementById('comp1button');
  var comp3button = document.getElementById('comp3button');
  comp1button.disabled = false;
  comp3button.disabled = false;
  var comp = button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function complement3(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  button.disabled = true;
  var comp1button = document.getElementById('comp1button');
  var comp2button = document.getElementById('comp2button');
  comp1button.disabled = false;
  comp2button.disabled = false;
  var comp = button.value;

  var clause;
  var clause1button = document.getElementById('cause1button'); 
  var clause2button = document.getElementById('cause2button'); 
  var clause3button = document.getElementById('cause3button'); 
  if (clause1button.disabled) clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + clause1button.value;
  else if (subj_number == "singular" && clause2button.disabled) clause = subj_subord_clause + " " + "hangs out together";
  else if (subj_number == "plural" && clause2button.disabled) clause = subj_subord_clause + " " + "hang out together";
  else if (subj_number == "singular" && clause3button.disabled) clause = subj_subord_clause + " " + "hates each other";
  else if (subj_number == "plural" && clause3button.disabled) clause = subj_subord_clause + " " + "hate each other";

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function cause1(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  button.disabled = true;
  var cause2button = document.getElementById('cause2button');
  var cause3button = document.getElementById('cause3button');
  cause2button.disabled = false;
  cause3button.disabled = false;

  var cause_selected;
  if (cause1button.disabled) cause_selected = cause1button.value;
  else if (cause2button.disabled) cause_selected = cause2button.value;
  else if (cause3button.disabled) cause_selected = cause3button.value;

  if (subj_number == "singular"){
    if (cause_selected == "hang out together") verb_subord_clause = "hangs out together"; 
    else if (cause_selected == "hate each other") verb_subord_clause = "hates each other";
  }else if (subj_number == "plural") {
    if (cause_selected == "hang out together") verb_subord_clause = "hang out together"; 
    else if (cause_selected == "hate each other") verb_subord_clause = "hate each other";}

  var clause = subj_subord_clause + " " + aux_verb_subord_clause + " " + cause_selected;

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function cause2(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  button.disabled = true;
  var cause1button = document.getElementById('cause1button');
  var cause3button = document.getElementById('cause3button');
  cause1button.disabled = false;
  cause3button.disabled = false;

  var cause_selected;
  if (cause1button.disabled) cause_selected = cause1button.value;
  else if (cause2button.disabled) cause_selected = cause2button.value;
  else if (cause3button.disabled) cause_selected = cause3button.value;

  if (subj_number == "singular"){
    if (cause_selected == "hang out together") verb_subord_clause = "hangs out together"; 
    else if (cause_selected == "hate each other") verb_subord_clause = "hates each other";
  }else if (subj_number == "plural") {
    if (cause_selected == "hang out together") verb_subord_clause = "hang out together"; 
    else if (cause_selected == "hate each other") verb_subord_clause = "hate each other";}

  var clause = subj_subord_clause + " " + verb_subord_clause;

  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}

function cause3(button){
  var ie4explanation = document.getElementById('ie4explanation');  
  //console.log(button.value);

  explanation = "Explanation: <b>";

  var subject;
  var subj1button = document.getElementById('subj1button'); 
  var subj2button = document.getElementById('subj2button'); 
  var subj3button = document.getElementById('subj3button'); 
  if (subj1button.disabled) {
    subject = subj1button.value;
    subj_number = "singular";
    subj_subord_clause = "she";
    aux_verb_subord_clause = "is";
  } else if (subj2button.disabled) {
    subject = subj2button.value;
    subj_number = "singular";
    subj_subord_clause = "he";
    aux_verb_subord_clause = "is";
  } else if (subj3button.disabled) { subject = subj3button.value;
    subj_number = "plural";
    subj_subord_clause = "they";
    aux_verb_subord_clause = "are";
  }

  var verb_inf;
  var verb1button = document.getElementById('verb1button'); 
  var verb2button = document.getElementById('verb2button'); 
  var verb3button = document.getElementById('verb3button'); 
  if (verb1button.disabled) verb_inf = verb1button.value;
  else if (verb2button.disabled) verb_inf = verb2button.value;
  else if (verb3button.disabled) verb_inf = verb3button.value;
  
  if (subj_number == "singular"){
    if (verb_inf == "to go") verb_main_clause = "goes"; 
    else if (verb_inf == "to hang out") verb_main_clause = "hangs out";
    else if (verb_inf == "to swim") verb_main_clause = "swims";
  }else if (subj_number == "plural") {
    if (verb_inf == "to go") verb_main_clause = "go";
    else if (verb_inf == "to hang out") verb_main_clause = "hang out";
    else if (verb_inf == "to swim") verb_main_clause = "swim";}

  var comp;
  var comp1button = document.getElementById('comp1button'); 
  var comp2button = document.getElementById('comp2button'); 
  var comp3button = document.getElementById('comp3button'); 
  if (comp1button.disabled) comp = comp1button.value;
  else if (comp2button.disabled) comp = comp2button.value;
  else if (comp3button.disabled) comp = comp3button.value;

  button.disabled = true;
  var cause1button = document.getElementById('cause1button');
  var cause2button = document.getElementById('cause2button');
  cause1button.disabled = false;
  cause2button.disabled = false;

  var cause_selected;
  if (cause1button.disabled) cause_selected = cause1button.value;
  else if (cause2button.disabled) cause_selected = cause2button.value;
  else if (cause3button.disabled) cause_selected = cause3button.value;

  if (subj_number == "singular"){
    if (cause_selected == "hang out together") verb_subord_clause = "hangs out together"; 
    else if (cause_selected == "hate each other") verb_subord_clause = "hates each other";
  }else if (subj_number == "plural") {
    if (cause_selected == "hang out together") verb_subord_clause = "hang out together"; 
    else if (cause_selected == "hate each other") verb_subord_clause = "hate each other";}

  var clause = subj_subord_clause + " " + verb_subord_clause;


  ie4explanation.innerHTML = explanation + subject + " " + verb_main_clause + " " + comp + " because " + clause + ".</b>";
}


