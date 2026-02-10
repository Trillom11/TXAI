function trapezoid1c_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid1_b = document.getElementById('trapezoid1_b');
	var trapezoid1_c = document.getElementById('trapezoid1_c');
	var trapezoid1_d = document.getElementById('trapezoid1_d');
        let tr1_b = trapezoid1_b.value;
        let tr1_c = trapezoid1_c.value;
	    let tr1_d = trapezoid1_d.value; 
        try {
          if(tr1_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr1_c)) throw new Error("The entered value is not a number.");
          if(Number(tr1_b) >= Number(tr1_c)) throw new Error("Value 1[C] must be greater than value 1[B].");
          if(Number(tr1_c) >= Number(tr1_d)) throw new Error("Value 1[C] must be less than value 1[D].");
          trapezoid1_c.onchange(this);	
	      trapezoid1_c.oldvalue = Number(trapezoid1_c.value);
          update_fig1();
        }
        catch(err) {
          trapezoid1_c.value = trapezoid1_c.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid1d_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid1_c = document.getElementById('trapezoid1_c');
	var trapezoid1_d = document.getElementById('trapezoid1_d');
	var trapezoid2_c = document.getElementById('trapezoid2_c');
        let tr1_c = trapezoid1_c.value;
        let tr1_d = trapezoid1_d.value;
        let tr2_c = trapezoid2_c.value;
        try {
          if(tr1_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr1_d)) throw new Error("The entered value is not a number.");
          if(Number(tr1_d) <= Number(tr1_c)) throw new Error("Value 1[D] must be greater than value 1[C].");
          if(Number(tr1_d) >= Number(tr2_c)) throw new Error("Value 1[D] must be less than value 2[C].");
          trapezoid1_d.onchange(this);	
	      trapezoid1_d.oldvalue = Number(trapezoid1_d.value);
          update_fig1();
        }
        catch(err) {
          trapezoid1_d.value = trapezoid1_d.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid2a_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid1_b = document.getElementById('trapezoid1_b');
	var trapezoid2_a = document.getElementById('trapezoid2_a');
	var trapezoid2_b = document.getElementById('trapezoid2_b');
        let tr1_b = trapezoid1_b.value;
        let tr2_a = trapezoid2_a.value;
        let tr2_b = trapezoid2_b.value;
        try {
          if(tr2_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr2_a)) throw new Error("The entered value is not a number.");
          if(Number(tr2_a) <= Number(tr1_b)) throw new Error("Value 2[A] must be greater than value 1[B].");
          if(Number(tr2_a) >= Number(tr2_b)) throw new Error("Value 2[A] must be less than value 2[B].");
          trapezoid2_a.onchange(this);	
	  trapezoid2_a.oldvalue = Number(trapezoid2_a.value);
          update_fig1();
        }
        catch(err) {
          trapezoid2_a.value = trapezoid2_a.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid2b_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid2_a = document.getElementById('trapezoid2_a');
	var trapezoid2_b = document.getElementById('trapezoid2_b');
	var trapezoid2_c = document.getElementById('trapezoid2_c');
        let tr2_a = trapezoid2_a.value;
        let tr2_b = trapezoid2_b.value;
        let tr2_c = trapezoid2_c.value;
        try {
          if(tr2_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr2_b)) throw new Error("The entered value is not a number.");
          if(Number(tr2_b) <= Number(tr2_a)) throw new Error("Value 2[B] must be greater than value 2[A].");
          if(Number(tr2_c) >= Number(tr2_a)) throw new Error("Value 2[B] must be less than value 2[C].");
          trapezoid2_b.onchange(this);	
	  trapezoid2_b.oldvalue = Number(trapezoid2_b.value);
          update_fig1();
        }
        catch(err) {
          trapezoid2_b.value = trapezoid2_b.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid2c_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid2_b = document.getElementById('trapezoid2_b');
	var trapezoid2_c = document.getElementById('trapezoid2_c');
	var trapezoid2_d = document.getElementById('trapezoid2_d');
        let tr2_b = trapezoid2_b.value;
        let tr2_c = trapezoid2_c.value;
    	let tr2_d = trapezoid2_d.value; 
        try {
          if(tr2_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr2_c)) throw new Error("The entered value is not a number.");
          if(Number(tr2_b) >= Number(tr2_c)) throw new Error("Value 2[C] must be greater than value 2[B].");
          if(Number(tr2_c) >= Number(tr2_d)) throw new Error("Value 2[C] must be less than value 2[D].");
          trapezoid2_c.onchange(this);	
	      trapezoid2_c.oldvalue = Number(trapezoid2_c.value);
          update_fig1();
        }
        catch(err) {
          trapezoid2_c.value = trapezoid2_c.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid2d_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid2_c = document.getElementById('trapezoid2_c');
	var trapezoid2_d = document.getElementById('trapezoid2_d');
	var trapezoid3_c = document.getElementById('trapezoid3_c');
        let tr2_c = trapezoid2_c.value;
        let tr2_d = trapezoid2_d.value;
        let tr3_c = trapezoid3_c.value;
        try {
          if(tr2_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr2_d)) throw new Error("The entered value is not a number.");
          if(Number(tr2_d) <= Number(tr2_c)) throw new Error("Value 2[D] must be greater than value 2[C].");
          if(Number(tr2_d) >= Number(tr3_c)) throw new Error("Value 2[D] must be less than value 3[C].");
          trapezoid2_d.onchange(this);	
	  trapezoid2_d.oldvalue = Number(trapezoid2_d.value);
          update_fig1();
        }
        catch(err) {
          trapezoid2_d.value = trapezoid2_d.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid3a_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid2_b = document.getElementById('trapezoid2_b');
	var trapezoid3_a = document.getElementById('trapezoid3_a');
	var trapezoid3_b = document.getElementById('trapezoid3_b');
        let tr2_b = trapezoid2_b.value;
        let tr3_a = trapezoid3_a.value;
        let tr3_b = trapezoid3_b.value;
        try {
          if(tr3_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr3_a)) throw new Error("The entered value is not a number.");
          if(Number(tr3_a) <= Number(tr2_b)) throw new Error("Value 3[A] must be greater than value 2[B].");
          if(Number(tr3_a) >= Number(tr3_b)) throw new Error("Value 3[A] must be less than value 3[B].");
          trapezoid3_a.onchange(this);	
	  trapezoid3_a.oldvalue = Number(trapezoid3_a.value);
          update_fig1();
        }
        catch(err) {
          trapezoid3_a.value = trapezoid3_a.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid3b_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid3_a = document.getElementById('trapezoid3_a');
	var trapezoid3_b = document.getElementById('trapezoid3_b');
	var trapezoid3_c = document.getElementById('trapezoid3_c');
        let tr3_a = trapezoid3_a.value;
        let tr3_b = trapezoid3_b.value;
        let tr3_c = trapezoid3_c.value;
        try {
          if(tr3_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr3_b)) throw new Error("The entered value is not a number.");
          if(Number(tr3_b) <= Number(tr3_a)) throw new Error("Value 3[B] must be greater than value 3[A].");
          if(Number(tr3_b) >= Number(tr3_c)) throw new Error("Value 3[B] must be less than value 3[C].");
          trapezoid3_b.onchange(this);	
	  trapezoid3_b.oldvalue = Number(trapezoid3_b.value);
          update_fig1();
        }
        catch(err) {
          trapezoid3_b.value = trapezoid3_b.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid3c_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid3_b = document.getElementById('trapezoid3_b');
	var trapezoid3_c = document.getElementById('trapezoid3_c');
	var trapezoid3_d = document.getElementById('trapezoid3_d');
        let tr3_b = trapezoid3_b.value;
        let tr3_c = trapezoid3_c.value;
	    let tr3_d = trapezoid3_d.value; 
        try {
          if(tr3_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr3_c)) throw new Error("The entered value is not a number.");
          if(Number(tr3_c) <= Number(tr3_b)) throw new Error("Value 3[C] must be greater than value 3[B].");
          if(Number(tr3_c) >= Number(tr3_d)) throw new Error("Value 3[C] must be less than value 3[D].");
          trapezoid3_c.onchange(this);	
	  trapezoid3_c.oldvalue = Number(trapezoid3_c.value);
          update_fig1();
        }
        catch(err) {
          trapezoid3_c.value = trapezoid3_c.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid3d_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid3_c = document.getElementById('trapezoid3_c');
	var trapezoid3_d = document.getElementById('trapezoid3_d');
	var trapezoid4_c = document.getElementById('trapezoid4_c');
        let tr3_c = trapezoid3_c.value;
        let tr3_d = trapezoid3_d.value;
        let tr4_c = trapezoid4_c.value;
        try {
          if(tr3_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr3_d)) throw new Error("The entered value is not a number.");
          if(Number(tr3_d) <= Number(tr3_c)) throw new Error("Value 3[D] must be greater than value 3[C].");
          if(Number(tr3_d) >= Number(tr4_c)) throw new Error("Value 3[D] must be less than value 4[C].");
          trapezoid3_d.onchange(this);	
	  trapezoid3_d.oldvalue = Number(trapezoid3_d.value);
          update_fig1();
        }
        catch(err) {
          trapezoid3_d.value = trapezoid3_d.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid4a_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid3_b = document.getElementById('trapezoid3_b');
	var trapezoid4_a = document.getElementById('trapezoid4_a');
	var trapezoid4_b = document.getElementById('trapezoid4_b');
        let tr3_b = trapezoid3_b.value;
        let tr4_a = trapezoid4_a.value;
        let tr4_b = trapezoid4_b.value;
        try {
          if(tr4_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr4_a)) throw new Error("The entered value is not a number.");
          if(Number(tr3_b) >= Number(tr4_a)) throw new Error("Value 4[A] must be greater than value 3[B].");
          if(Number(tr4_a) >= Number(tr4_b)) throw new Error("Value 4[A] must be less than value 4[B].");
          trapezoid4_a.onchange(this);	
	  trapezoid4_a.oldvalue = Number(trapezoid4_a.value);
          update_fig1();
        }
        catch(err) {
          trapezoid4_a.value = trapezoid4_a.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid4b_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid4_a = document.getElementById('trapezoid4_a');
	var trapezoid4_b = document.getElementById('trapezoid4_b');
	var trapezoid4_c = document.getElementById('trapezoid4_c');
        let tr4_a = trapezoid4_a.value;
        let tr4_b = trapezoid4_b.value;
        let tr4_c = trapezoid4_c.value;
        try {
          if(tr4_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr4_b)) throw new Error("The entered value is not a number.");
          if(Number(tr4_b) <= Number(tr4_a)) throw new Error("Value 4[B] must be greater than value 4[A].");
          if(Number(tr4_b) >= Number(tr4_c)) throw new Error("Value 4[B] must be less than value 4[C].");
          trapezoid4_b.onchange(this);	
	  trapezoid4_b.oldvalue = Number(trapezoid4_b.value);
          update_fig1();
        }
        catch(err) {
          trapezoid4_b.value = trapezoid4_b.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid4c_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid4_b = document.getElementById('trapezoid4_b');
	var trapezoid4_c = document.getElementById('trapezoid4_c');
	var trapezoid4_d = document.getElementById('trapezoid4_d');
        let tr4_b = trapezoid4_b.value;
        let tr4_c = trapezoid4_c.value;
	    let tr4_d = trapezoid4_d.value; 
        try {
          if(tr4_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr4_c)) throw new Error("The entered value is not a number.");
          if(Number(tr4_c) <= Number(tr4_b)) throw new Error("Value 4[C] must be greater than value 4[B].");
          if(Number(tr4_c) >= Number(tr4_d)) throw new Error("Value 4[C] must be less than value 4[D].");
          trapezoid4_c.onchange(this);	
	  trapezoid4_c.oldvalue = Number(trapezoid4_c.value);
          update_fig1();
        }
        catch(err) {
          trapezoid4_c.value = trapezoid4_c.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid4d_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid4_c = document.getElementById('trapezoid4_c');
	var trapezoid4_d = document.getElementById('trapezoid4_d');
	var trapezoid5_c = document.getElementById('trapezoid5_c');
        let tr4_c = trapezoid4_c.value;
        let tr4_d = trapezoid4_d.value;
        let tr5_c = trapezoid5_c.value;
        try {
          if(tr4_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr4_d)) throw new Error("The entered value is not a number.");
          if(Number(tr4_d) <= Number(tr4_c)) throw new Error("Value 4[D] must be greater than value 4[C].");
          if(Number(tr4_d) >= Number(tr5_c)) throw new Error("Value 4[D] must be less than value 5[C].");
          trapezoid4_d.onchange(this);	
	  trapezoid4_d.oldvalue = Number(trapezoid4_d.value);
          update_fig1();
        }
        catch(err) {
          trapezoid4_d.value = trapezoid4_d.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid5a_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid4_b = document.getElementById('trapezoid4_b');
	var trapezoid5_a = document.getElementById('trapezoid5_a');
	var trapezoid5_b = document.getElementById('trapezoid5_b');
        let tr4_b = trapezoid4_b.value;
        let tr5_a = trapezoid5_a.value;
        let tr5_b = trapezoid5_b.value;
        try {
          if(tr5_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr5_a)) throw new Error("The entered value is not a number.");
          if(Number(tr5_a) >= Number(tr5_b)) throw new Error("Value 5[A] must be less than value 5[B].");
          if(Number(tr5_a) <= Number(tr4_b)) throw new Error("Value 5[A] must be greater than value 4[B].");
          trapezoid5_a.onchange(this);	
	  trapezoid5_a.oldvalue = Number(trapezoid5_a.value);
          update_fig1();
        }
        catch(err) {
          trapezoid5_a.value = trapezoid5_a.oldvalue;
          alert(err);
        }
    }    
}

function trapezoid5b_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var trapezoid5_a = document.getElementById('trapezoid5_a');
	var trapezoid5_b = document.getElementById('trapezoid5_b');
	var trapezoid5_c = document.getElementById('trapezoid5_c');
        let tr5_a = trapezoid5_a.value;
        let tr5_b = trapezoid5_b.value;
        let tr5_c = trapezoid5_c.value;
        try {
          if(tr5_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
          if(isNaN(tr5_b)) throw new Error("The entered value is not a number.");
          if(Number(tr5_b) <= Number(tr5_a)) throw new Error("Value 5[B] must be greater than value 5[A].");
          if(Number(tr5_b) >= Number(tr5_c)) throw new Error("Value 5[B] must be less than value 5[C].");
          trapezoid5_b.onchange(this);	
	  trapezoid5_b.oldvalue = Number(trapezoid5_b.value);
          update_fig1();
        }
        catch(err) {
          trapezoid5_b.value = trapezoid5_b.oldvalue;
          alert(err);
        }
    }    
}

function term1_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var term1 = document.getElementById('term1');
	let term1value = term1.value;
        try {
          if(term1value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
	  term1.onchange(this);	
	  term1.oldvalue = term1.value;
          update_fig1();
        }
        catch(err) {
	  term1.value = term1value;
          //alert(err);
        }  
    }    
}

function term2_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var term2 = document.getElementById('term2');
	let term2value = term2.value;
        try {
          if(term2value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
          update_fig1();
        }
        catch(err) {
	  term2.value = term2value;
        }  
    }    
}

function term3_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var term3 = document.getElementById('term3');
	let term3value = term3.value;
        try {
          if(term3value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
          update_fig1();
        }
        catch(err) {
	  term3.value = term3value;
        }  
    }    
}

function term4_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var term4 = document.getElementById('term4');
	let term4value = term4.value;
        try {
          if(term4value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
          update_fig1();
        }
        catch(err) {
	  term4.value = term4value;
        }  
    }    
}

function term5_enter(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
	var term5 = document.getElementById('term5');
	let term5value = term5.value;
        try {
          if(term5value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
          update_fig1();
        }
        catch(err) {
	  term5.value = term5value;
        }  
    }    
}

function term1_onchange(textbox)
{
  var term1 = document.getElementById('term1');
  let term1value = term1.value;
  try {
    if(term1value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
    }  
}

function term2_onchange(textbox)
{
  var term2 = document.getElementById('term2');
  let term2value = term2.value;
  try {
    if(term2value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
    }  
}

function term3_onchange(textbox)
{
  var term3 = document.getElementById('term3');
  let term3value = term3.value;
  try {
    if(term3value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
    }  
}

function term4_onchange(textbox)
{
  var term4 = document.getElementById('term4');
  let term4value = term4.value;
  try {
    if(term4value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
    }  
}

function term5_onchange(textbox)
{
  var term5 = document.getElementById('term5');
  let term5value = term5.value;
  try {
    if(term5value.trim() == "") throw new Error("The textbox is empty. Please enter a linguistic term.");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
    }  
}

var trace_dashline = {  
  x: [1882.34, 9662.20],
  y: [0.5, 0.5],  
  mode: 'lines',
  line: {dash: "dash"},
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  showlegend: false,
  marker: { size: 6, color: 'black' },  
}

var trace1_2partitions = {  
  x: [1882.34, 1882.34, 5577.78, 5966.77, 1882.34],
  y: [0,1,1,0,0],  
  mode: 'lines+markers',
  name: 'small',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_2partitions = {
  x: [5577.78, 5966.77, 9662.20, 9662.20, 5577.78],
  y: [0,1,1,0,0],  
  mode: 'lines+markers',
  name: 'large',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var dots_2partitions = {
  x: [5772.27],
  y: [0.5],
  mode: 'markers',
  showlegend: false,
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red'
};

// Define Layout
var layout = {
  title: "Perimeter-related fuzzy sets",
  //showlegend: false,
  //xaxis: {range: [1882.34, 9662.20]},
  xaxis: {range: [1850, 9700]},
  legend: {
          x: 1,
	  //xanchor: 'right',
	  y: 0.5
	},
  sliders: [{
	name: "perimeter_partitions_slider",
    pad: {t: 15},
    currentvalue: {
      xanchor: 'center',
      prefix: 'Number of partitions: ',
      font: {
        color: '#888',
        size: 20
      }
    },
    steps: [{
      label: '2',
      method: 'restyle',
	  //data: data_2partitions,
      args: ['data', 'data_2partitions']
    }, {
      label: '3',
      method: 'restyle',
	  //data: data_3partitions,
      args: ['data', 'data_3partitions']
    }, {
      label: '4',
      method: 'restyle',
	  //data: data_4partitions,
      args: ['data', 'data_4partitions']
    }, {
      label: '5',
      method: 'restyle',
      //data: data_5partitions,
	  args: ['data', 'data_5partitions']
    }],
  }],
  orientation: 'vertical'
};

var myPlot = document.getElementById('InteractiveElement2');
Plotly.newPlot("InteractiveElement2", [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions], layout, {displayModeBar: false});

// onchange events for trapezoids 1 and 2:

function trapezoid1c_onchange(textbox){
  var trapezoid1_b = document.getElementById('trapezoid1_b');
  var trapezoid1_c = document.getElementById('trapezoid1_c');
  var trapezoid2_a = document.getElementById('trapezoid2_a');
  var trapezoid1_d = document.getElementById('trapezoid1_d');
  let tr1_b = trapezoid1_b.value;
  let tr1_c = trapezoid1_c.value;
  let tr1_d = trapezoid1_d.value; 
  try {
    if(tr1_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr1_c)) throw new Error("The entered value is not a number.");
    if(Number(tr1_b) >= Number(tr1_c)) throw new Error("Value 1[C] must be greater than value 1[B].");
    if(Number(tr1_c) >= Number(tr1_d)) throw new Error("Value 1[C] must be less than value 1[D].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid2_a.value = trapezoid1_c.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid1d_onchange(textbox){
  var trapezoid1_c = document.getElementById('trapezoid1_c');
  var trapezoid1_d = document.getElementById('trapezoid1_d');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  let tr1_c = trapezoid1_c.value;
  let tr1_d = trapezoid1_d.value;
  let tr2_c = trapezoid2_c.value; 
  try {
    if(tr1_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr1_d)) throw new Error("The entered value is not a number.");
    if(Number(tr1_d) <= Number(tr1_c)) throw new Error("Value 1[D] must be greater than value 1[C].");
    if(Number(tr1_d) >= Number(tr2_c)) throw new Error("Value 1[D] must be less than value 2[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid2_b.value = trapezoid1_d.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid2a_onchange(textbox){
  var trapezoid1_b = document.getElementById('trapezoid1_b');
  var trapezoid2_a = document.getElementById('trapezoid2_a');
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid1_c = document.getElementById('trapezoid1_c');
  let tr1_b = trapezoid1_b.value;
  let tr2_a = trapezoid2_a.value;
  let tr2_b = trapezoid2_b.value; 
  try {
    if(tr2_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr2_a)) throw new Error("The entered value is not a number.");
    if(Number(tr2_a) <= Number(tr1_b)) throw new Error("Value 2[A] must be greater than value 1[B].");
    if(Number(tr2_a) >= Number(tr2_b)) throw new Error("Value 2[A] must be less than value 2[B].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid1_c.value = trapezoid2_a.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid2b_onchange(textbox){
  var trapezoid2_a = document.getElementById('trapezoid2_a');
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid1_d = document.getElementById('trapezoid1_d');
  let tr2_a = trapezoid2_a.value;
  let tr2_b = trapezoid2_b.value;
  let tr2_c = trapezoid2_c.value; 
  try {
    if(tr2_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr2_b)) throw new Error("The entered value is not a number.");
    if(Number(tr2_b) <= Number(tr2_a)) throw new Error("Value 2[B] must be greater than value 2[A].");
    if(Number(tr2_b) >= Number(tr2_c)) throw new Error("Value 2[B] must be less than value 2[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid1_d.value = trapezoid2_b.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid2c_onchange(textbox){
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid2_d = document.getElementById('trapezoid2_d');
  var trapezoid3_a = document.getElementById('trapezoid3_a');
  let tr2_b = trapezoid2_b.value;
  let tr2_c = trapezoid2_c.value;
  let tr2_d = trapezoid2_d.value; 
  try {
    if(tr2_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr2_c)) throw new Error("The entered value is not a number.");
    if(Number(tr2_c) <= Number(tr2_b)) throw new Error("Value 2[C] must be greater than value 2[B].");
    if(Number(tr2_c) >= Number(tr2_d)) throw new Error("Value 2[C] must be less than value 2[D].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid3_a.value = trapezoid2_c.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid2d_onchange(textbox){
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid2_d = document.getElementById('trapezoid2_d');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  let tr2_c = trapezoid2_c.value;
  let tr2_d = trapezoid2_d.value;
  let tr3_c = trapezoid3_c.value; 
  try {
    if(tr2_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr2_d)) throw new Error("The entered value is not a number.");
    if(Number(tr2_d) <= Number(tr2_c)) throw new Error("Value 2[D] must be greater than value 2[C].");
    if(Number(tr2_d) >= Number(tr3_c)) throw new Error("Value 2[D] must be less than value 3[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid3_b.value = trapezoid2_d.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid3a_onchange(textbox){
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid3_a = document.getElementById('trapezoid3_a');
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  let tr2_b = trapezoid2_b.value;
  let tr3_a = trapezoid3_a.value;
  let tr3_b = trapezoid3_b.value; 
  try {
    if(tr3_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr3_a)) throw new Error("The entered value is not a number.");
    if(Number(tr3_a) <= Number(tr2_b)) throw new Error("Value 3[A] must be greater than value 2[B].");
    if(Number(tr3_a) >= Number(tr3_b)) throw new Error("Value 3[A] must be less than value 3[B].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid2_c.value = trapezoid3_a.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid3b_onchange(textbox){
  var trapezoid3_a = document.getElementById('trapezoid3_a');
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid2_d = document.getElementById('trapezoid2_d');
  let tr3_a = trapezoid3_a.value;
  let tr3_b = trapezoid3_b.value;
  let tr3_c = trapezoid3_c.value; 
  try {
    if(tr3_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr3_b)) throw new Error("The entered value is not a number.");
    if(Number(tr3_b) <= Number(tr3_a)) throw new Error("Value 3[B] must be greater than value 3[A].");
    if(Number(tr3_b) >= Number(tr3_c)) throw new Error("Value 3[B] must be less than value 3[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid2_d.value = trapezoid3_b.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid3c_onchange(textbox){
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid3_d = document.getElementById('trapezoid3_d');
  var trapezoid4_a = document.getElementById('trapezoid4_a');
  let tr3_b = trapezoid3_b.value;
  let tr3_c = trapezoid3_c.value;
  let tr3_d = trapezoid3_d.value; 
  try {
    if(tr3_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr3_c)) throw new Error("The entered value is not a number.");
    if(Number(tr3_c) <= Number(tr3_b)) throw new Error("Value 3[C] must be greater than value 3[B].");
    if(Number(tr3_c) >= Number(tr3_d)) throw new Error("Value 3[C] must be less than value 3[D].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid4_a.value = trapezoid3_c.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid3d_onchange(textbox){
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid3_d = document.getElementById('trapezoid3_d');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  let tr3_c = trapezoid3_c.value;
  let tr3_d = trapezoid3_d.value;
  let tr4_c = trapezoid4_c.value; 
  try {
    if(tr3_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr3_d)) throw new Error("The entered value is not a number.");
    if(Number(tr3_d) <= Number(tr3_c)) throw new Error("Value 3[D] must be greater than value 3[C].");
    if(Number(tr3_d) >= Number(tr4_c)) throw new Error("Value 3[D] must be less than value 4[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid4_b.value = trapezoid3_d.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid4a_onchange(textbox){
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid4_a = document.getElementById('trapezoid4_a');
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  let tr3_b = trapezoid3_b.value;
  let tr4_a = trapezoid4_a.value;
  let tr4_b = trapezoid4_b.value; 
  try {
    if(tr4_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr4_a)) throw new Error("The entered value is not a number.");
    if(Number(tr4_a) <= Number(tr3_b)) throw new Error("Value 4[A] must be greater than value 3[B].");
    if(Number(tr4_a) >= Number(tr4_b)) throw new Error("Value 4[A] must be less than value 4[B].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid3_c.value = trapezoid4_a.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid4b_onchange(textbox){
  var trapezoid4_a = document.getElementById('trapezoid4_a');
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid3_d = document.getElementById('trapezoid3_d');
  let tr4_a = trapezoid4_a.value;
  let tr4_b = trapezoid4_b.value;
  let tr4_c = trapezoid4_c.value; 
  try {
    if(tr4_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr4_b)) throw new Error("The entered value is not a number.");
    if(Number(tr4_b) <= Number(tr4_a)) throw new Error("Value 4[B] must be greater than value 4[A].");
    if(Number(tr4_b) >= Number(tr4_c)) throw new Error("Value 4[B] must be less than value 4[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid3_d.value = trapezoid4_b.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid4c_onchange(textbox){
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid4_d = document.getElementById('trapezoid4_d');
  var trapezoid5_a = document.getElementById('trapezoid5_a');
  let tr4_b = trapezoid4_b.value;
  let tr4_c = trapezoid4_c.value;
  let tr4_d = trapezoid4_d.value; 
  try {
    if(tr4_c.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr4_c)) throw new Error("The entered value is not a number.");
    if(Number(tr4_c) <= Number(tr4_b)) throw new Error("Value 4[C] must be greater than value 4[B].");
    if(Number(tr4_c) >= Number(tr4_d)) throw new Error("Value 4[C] must be less than value 4[D].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid5_a.value = trapezoid4_c.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid4d_onchange(textbox){
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid4_d = document.getElementById('trapezoid4_d');
  var trapezoid5_c = document.getElementById('trapezoid5_c');
  var trapezoid5_b = document.getElementById('trapezoid5_b');
  let tr4_c = trapezoid4_c.value;
  let tr4_d = trapezoid4_d.value;
  let tr5_c = trapezoid5_c.value;
  try {
    if(tr4_d.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr4_d)) throw new Error("The entered value is not a number.");
    if(Number(tr4_d) <= Number(tr4_c)) throw new Error("Value 4[D] must be greater than value 4[C].");
    if(Number(tr4_d) >= Number(tr5_c)) throw new Error("Value 4[D] must be less than value 5[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid5_b.value = trapezoid4_d.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid5a_onchange(textbox){
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid5_a = document.getElementById('trapezoid5_a');
  var trapezoid5_b = document.getElementById('trapezoid5_b');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  let tr4_b = trapezoid4_b.value;
  let tr5_a = trapezoid5_a.value;
  let tr5_b = trapezoid5_b.value; 
  try {
    if(tr5_a.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr5_a)) throw new Error("The entered value is not a number.");
    if(Number(tr5_a) <= Number(tr4_b)) throw new Error("Value 5[A] must be greater than value 4[B].");
    if(Number(tr5_a) >= Number(tr5_b)) throw new Error("Value 5[A] must be less than value 5[B].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid4_c.value = trapezoid5_a.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

function trapezoid5b_onchange(textbox){
  var trapezoid5_a = document.getElementById('trapezoid5_a');
  var trapezoid5_b = document.getElementById('trapezoid5_b');
  var trapezoid5_c = document.getElementById('trapezoid5_c');
  var trapezoid4_d = document.getElementById('trapezoid4_d');
  let tr5_a = trapezoid5_a.value;
  let tr5_b = trapezoid5_b.value;
  let tr5_c = trapezoid5_c.value; 
  try {
    if(tr5_b.trim() == "") throw new Error("The textbox is empty. Please enter a numerical value.");
    if(isNaN(tr5_b)) throw new Error("The entered value is not a number.");
    if(Number(tr5_b) <= Number(tr5_a)) throw new Error("Value 5[B] must be greater than value 5[A].");
    if(Number(tr5_b) >= Number(tr5_c)) throw new Error("Value 5[B] must be less than value 5[C].");
    if (typeof textbox.oldvalue == 'undefined') textbox.oldvalue = textbox.defaultValue;
    trapezoid4_d.value = trapezoid5_b.value;
  }
  catch(err) {
    textbox.value = textbox.oldvalue;
    alert(err);
  }  
}

myPlot.on('plotly_sliderchange', function(sliderData){

var trace_dashline = {  
  x: [1882.34, 9662.20],
  y: [0.5, 0.5],  
  mode: 'lines',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  line: {dash: "dash"},
  showlegend: false,
  marker: { size: 6, color: 'black' },  
}

var trace1_2partitions = {  
  x: [1882.34, 1882.34, 5577.78, 5966.77, 1882.34],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_2partitions = {
  x: [5577.78, 5966.77, 9662.20, 9662.20, 5577.78],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var dots_2partitions = {
  x: [5772.27],
  y: [0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

var trace1_3partitions = {  
  x: [1882.34, 1882.34, 4281.13, 4670.13, 1882.34],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_3partitions = {
  x: [4281.13, 4670.13, 6874.41, 7263.41, 4281.13],
  y: [0,1,1,0,0],  
  name: 'medium',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var trace3_3partitions = {
  x: [6871.41, 7263.41, 9662.20, 9662.20, 6871.41],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'green' },
  fill: 'toself',
};

var dots_3partitions = {
  x: [4475.63, 7068.91],
  y: [0.5, 0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

var trace1_4partitions = {  
  x: [1882.34, 1882.34, 3632.81, 4021.78, 1882.34],
  y: [0,1,1,0,0],  
  name: 'very small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_4partitions = {
  x: [3632.81, 4021.78, 5577.78, 5966.77, 3632.81],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var trace3_4partitions = {
  x: [5577.78, 5966.77, 7522.74, 7911.74, 5577.78],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'green' },
  fill: 'toself',
};

var trace4_4partitions = {
  x: [7522.74, 7911.74, 9662.20, 9662.20, 7522.74],
  y: [0,1,1,0,0],  
  name: 'very large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 4:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'gray' },
  fill: 'toself',
};

var dots_4partitions = {
  x: [3827.31, 5772.27, 7717.24],
  y: [0.5, 0.5, 0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

var trace1_5partitions = {  
  x: [1882.34, 1882.34, 3243.81, 3632.81, 1882.34],
  y: [0,1,1,0,0],  
  name: 'very small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_5partitions = {
  x: [3243.81, 3632.81, 4799.78, 5188.78, 3243.81],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var trace3_5partitions = {
  x: [4799.78, 5188.78, 6355.75, 6744.75, 4799.78],
  y: [0,1,1,0,0],  
  name: 'medium',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'green' },
  fill: 'toself',
};

var trace4_5partitions = {
  x: [6355.75, 6744.75, 7911.72, 8300.72, 6355.75],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 4:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'gray' },
  fill: 'toself',
};

var trace5_5partitions = {
  x: [7911.72, 8300.72, 9662.20, 9662.20, 7911.72],
  y: [0,1,1,0,0],  
  name: 'very large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 5:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'magenta' },
  fill: 'toself',
};

var dots_5partitions = {
  x: [3438.31, 4994.28, 6550.25, 8106.22],
  y: [0.5, 0.5, 0.5, 0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

  var trapezoid1_a = document.getElementById('trapezoid1_a');
  var trapezoid1_b = document.getElementById('trapezoid1_b');
  var trapezoid1_c = document.getElementById('trapezoid1_c');
  var trapezoid1_d = document.getElementById('trapezoid1_d');
  var trapezoid2_a = document.getElementById('trapezoid2_a');
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid2_d = document.getElementById('trapezoid2_d');
  var trapezoid3_a = document.getElementById('trapezoid3_a');
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid3_d = document.getElementById('trapezoid3_d');
  var trapezoid4_a = document.getElementById('trapezoid4_a');
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid4_d = document.getElementById('trapezoid4_d');
  var trapezoid5_a = document.getElementById('trapezoid5_a');
  var trapezoid5_b = document.getElementById('trapezoid5_b');
  var trapezoid5_c = document.getElementById('trapezoid5_c');
  var trapezoid5_d = document.getElementById('trapezoid5_d');

  var term3 = document.getElementById('term3');
  var term4 = document.getElementById('term4');
  var term5 = document.getElementById('term5');

  var term3_label = document.getElementById('term3_label');
  var term4_label = document.getElementById('term4_label');
  var term5_label = document.getElementById('term5_label');

  var trapezoid3a_label = document.getElementById('trapezoid3a_label');
  var trapezoid3b_label = document.getElementById('trapezoid3b_label');
  var trapezoid3c_label = document.getElementById('trapezoid3c_label');
  var trapezoid3d_label = document.getElementById('trapezoid3d_label');
  var trapezoid4a_label = document.getElementById('trapezoid4a_label');
  var trapezoid4b_label = document.getElementById('trapezoid4b_label');
  var trapezoid4c_label = document.getElementById('trapezoid4c_label');
  var trapezoid4d_label = document.getElementById('trapezoid4d_label');
  var trapezoid5a_label = document.getElementById('trapezoid5a_label');
  var trapezoid5b_label = document.getElementById('trapezoid5b_label');
  var trapezoid5c_label = document.getElementById('trapezoid5c_label');
  var trapezoid5d_label = document.getElementById('trapezoid5d_label');

  var trapezoid3_label = document.getElementById('trapezoid3_label');
  var trapezoid4_label = document.getElementById('trapezoid4_label');
  var trapezoid5_label = document.getElementById('trapezoid5_label');

  console.log('Slider set to', sliderData.slider.active);
  while(InteractiveElement2.data.length>0)
  {
      Plotly.deleteTraces(InteractiveElement2, [0]);
  }
  if (sliderData.slider.active == 0)
    {console.log('2 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions]);
     term1.value = "small";
     term2.value = "large";
     term3.style = "visibility: hidden";
     term4.style = "visibility: hidden";
     term5.style = "visibility: hidden";
     term3_label.style = "visibility: hidden";
     term4_label.style = "visibility: hidden";
     term5_label.style = "visibility: hidden";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 5577.78;
     trapezoid1_d.value = 5966.77;
     trapezoid2_a.value = 5577.78;
     trapezoid2_b.value = 5966.77;
     trapezoid2_c.value = 9662.20;
     trapezoid2_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 5577.78;
     trapezoid1_d.oldvalue = 5966.77;
     trapezoid2_a.oldvalue = 5577.78;
     trapezoid2_b.oldvalue = 5966.77;
     trapezoid2_c.oldvalue = 9662.20;
     trapezoid2_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = true;
     trapezoid2_d.disabled = true;
     trapezoid3_a.style = "visibility: hidden";
     trapezoid3_b.style = "visibility: hidden";
     trapezoid3_c.style = "visibility: hidden";
     trapezoid3_d.style = "visibility: hidden";     
     trapezoid4_a.style = "visibility: hidden";
     trapezoid4_b.style = "visibility: hidden";
     trapezoid4_c.style = "visibility: hidden";
     trapezoid4_d.style = "visibility: hidden";
     trapezoid5_a.style = "visibility: hidden";
     trapezoid5_b.style = "visibility: hidden";
     trapezoid5_c.style = "visibility: hidden";
     trapezoid5_d.style = "visibility: hidden";
     trapezoid3a_label.style = "visibility: hidden";
     trapezoid3b_label.style = "visibility: hidden";
     trapezoid3c_label.style = "visibility: hidden";
     trapezoid3d_label.style = "visibility: hidden";
     trapezoid4a_label.style = "visibility: hidden";
     trapezoid4b_label.style = "visibility: hidden";
     trapezoid4c_label.style = "visibility: hidden";
     trapezoid4d_label.style = "visibility: hidden";
     trapezoid5a_label.style = "visibility: hidden";
     trapezoid5b_label.style = "visibility: hidden";
     trapezoid5c_label.style = "visibility: hidden";
     trapezoid5d_label.style = "visibility: hidden";
     trapezoid3_label.style = "visibility: hidden";
     trapezoid4_label.style = "visibility: hidden";
     trapezoid5_label.style = "visibility: hidden";
	}
  else if (sliderData.slider.active == 1)
    {console.log('3 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_3partitions, trace2_3partitions, trace3_3partitions, dots_3partitions]);
     term1.value = "small";
     term2.value = "medium";
     term3.value = "large";
     term3.style = "visibility: visible";
     term4.style = "visibility: hidden";
     term5.style = "visibility: hidden";
     term3_label.style = "visibility: visible";
     term4_label.style = "visibility: hidden";
     term5_label.style = "visibility: hidden";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 4281.13;
     trapezoid1_d.value = 4670.13;
     trapezoid2_a.value = 4281.13;
     trapezoid2_b.value = 4670.13;
     trapezoid2_c.value = 6874.41;
     trapezoid2_d.value = 7263.41;
     trapezoid3_a.value = 6871.41;
     trapezoid3_b.value = 7263.41;
     trapezoid3_c.value = 9662.20;
     trapezoid3_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 4281.13;
     trapezoid1_d.oldvalue = 4670.13;
     trapezoid2_a.oldvalue = 4281.13;
     trapezoid2_b.oldvalue = 4670.13;
     trapezoid2_c.oldvalue = 6874.41;
     trapezoid2_d.oldvalue = 7263.41;
     trapezoid3_a.oldvalue = 6871.41;
     trapezoid3_b.oldvalue = 7263.41;
     trapezoid3_c.oldvalue = 9662.20;
     trapezoid3_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = false;
     trapezoid2_d.disabled = false;
     trapezoid3_c.disabled = true;
     trapezoid3_d.disabled = true;
     trapezoid3_a.style = "visibility: visible";
     trapezoid3_b.style = "visibility: visible";
     trapezoid3_c.style = "visibility: visible";
     trapezoid3_d.style = "visibility: visible";     
     trapezoid4_a.style = "visibility: hidden";
     trapezoid4_b.style = "visibility: hidden";
     trapezoid4_c.style = "visibility: hidden";
     trapezoid4_d.style = "visibility: hidden";
     trapezoid5_a.style = "visibility: hidden";
     trapezoid5_b.style = "visibility: hidden";
     trapezoid5_c.style = "visibility: hidden";
     trapezoid5_d.style = "visibility: hidden";    
     trapezoid3a_label.style = "visibility: visible";
     trapezoid3b_label.style = "visibility: visible";
     trapezoid3c_label.style = "visibility: visible";
     trapezoid3d_label.style = "visibility: visible";
     trapezoid4a_label.style = "visibility: hidden";
     trapezoid4b_label.style = "visibility: hidden";
     trapezoid4c_label.style = "visibility: hidden";
     trapezoid4d_label.style = "visibility: hidden";
     trapezoid5a_label.style = "visibility: hidden";
     trapezoid5b_label.style = "visibility: hidden";
     trapezoid5c_label.style = "visibility: hidden";
     trapezoid5d_label.style = "visibility: hidden";
     trapezoid3_label.style = "visibility: visible";
     trapezoid4_label.style = "visibility: hidden";
     trapezoid5_label.style = "visibility: hidden";
}
  else if (sliderData.slider.active == 2)
    {console.log('4 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_4partitions, trace2_4partitions, trace3_4partitions, trace4_4partitions, dots_4partitions]);
     term1.value = "very small";
     term2.value = "small";
     term3.value = "large";
     term4.value = "very large";
     term3.style = "visibility: visible";
     term4.style = "visibility: visible";
     term5.style = "visibility: hidden";
     term3_label.style = "visibility: visible";
     term4_label.style = "visibility: visible";
     term5_label.style = "visibility: hidden";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 3632.81;
     trapezoid1_d.value = 4021.78;
     trapezoid2_a.value = 3632.81;
     trapezoid2_b.value = 4021.78;
     trapezoid2_c.value = 5577.78;
     trapezoid2_d.value = 5966.77;
     trapezoid3_a.value = 5577.78;
     trapezoid3_b.value = 5966.77;
     trapezoid3_c.value = 7522.74;
     trapezoid3_d.value = 7911.74;
     trapezoid4_a.value = 7522.74;
     trapezoid4_b.value = 7911.74;
     trapezoid4_c.value = 9662.20;
     trapezoid4_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 3632.81;
     trapezoid1_d.oldvalue = 4021.78;
     trapezoid2_a.oldvalue = 3632.81;
     trapezoid2_b.oldvalue = 4021.78;
     trapezoid2_c.oldvalue = 5577.78;
     trapezoid2_d.oldvalue = 5966.77;
     trapezoid3_a.oldvalue = 5577.78;
     trapezoid3_b.oldvalue = 5966.77;
     trapezoid3_c.oldvalue = 7522.74;
     trapezoid3_d.oldvalue = 7911.74;
     trapezoid4_a.oldvalue = 7522.74;
     trapezoid4_b.oldvalue = 7911.74;
     trapezoid4_c.oldvalue = 9662.20;
     trapezoid4_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = false;
     trapezoid2_d.disabled = false;     
     trapezoid3_c.disabled = false;
     trapezoid3_d.disabled = false;
     trapezoid4_c.disabled = true;
     trapezoid4_d.disabled = true;
     trapezoid3_a.style = "visibility: visible";
     trapezoid3_b.style = "visibility: visible";
     trapezoid3_c.style = "visibility: visible";
     trapezoid3_d.style = "visibility: visible";     
     trapezoid4_a.style = "visibility: visible";
     trapezoid4_b.style = "visibility: visible";
     trapezoid4_c.style = "visibility: visible";
     trapezoid4_d.style = "visibility: visible";
     trapezoid5_a.style = "visibility: hidden";
     trapezoid5_b.style = "visibility: hidden";
     trapezoid5_c.style = "visibility: hidden";
     trapezoid5_d.style = "visibility: hidden";
     trapezoid3a_label.style = "visibility: visible";
     trapezoid3b_label.style = "visibility: visible";
     trapezoid3c_label.style = "visibility: visible";
     trapezoid3d_label.style = "visibility: visible";
     trapezoid4a_label.style = "visibility: visible";
     trapezoid4b_label.style = "visibility: visible";
     trapezoid4c_label.style = "visibility: visible";
     trapezoid4d_label.style = "visibility: visible";
     trapezoid5a_label.style = "visibility: hidden";
     trapezoid5b_label.style = "visibility: hidden";
     trapezoid5c_label.style = "visibility: hidden";
     trapezoid5d_label.style = "visibility: hidden";
     trapezoid3_label.style = "visibility: visible";
     trapezoid4_label.style = "visibility: visible";
     trapezoid5_label.style = "visibility: hidden";
	}
  else if (sliderData.slider.active == 3)
    {console.log('5 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_5partitions, trace2_5partitions, trace3_5partitions, trace4_5partitions, trace5_5partitions, dots_5partitions]);
     term1.value = "very small";
     term2.value = "small";
     term3.value = "medium";
     term4.value = "large";
     term5.value = "very large";
     term3.style = "visibility: visible";
     term4.style = "visibility: visible";
     term5.style = "visibility: visible";
     term3_label.style = "visibility: visible";
     term4_label.style = "visibility: visible";
     term5_label.style = "visibility: visible";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 3243.81;
     trapezoid1_d.value = 3632.81;
     trapezoid2_a.value = 3243.81;
     trapezoid2_b.value = 3632.81;
     trapezoid2_c.value = 4799.78;
     trapezoid2_d.value = 5188.78;
     trapezoid3_a.value = 4799.78;
     trapezoid3_b.value = 5188.78;
     trapezoid3_c.value = 6355.75;
     trapezoid3_d.value = 6744.75;
     trapezoid4_a.value = 6355.75;
     trapezoid4_b.value = 6744.75;
     trapezoid4_c.value = 7911.72;
     trapezoid4_d.value = 8300.72;     
     trapezoid5_a.value = 7911.72;
     trapezoid5_b.value = 8300.72;
     trapezoid5_c.value = 9662.20;
     trapezoid5_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 3243.81;
     trapezoid1_d.oldvalue = 3632.81;
     trapezoid2_a.oldvalue = 3243.81;
     trapezoid2_b.oldvalue = 3632.81;
     trapezoid2_c.oldvalue = 4799.78;
     trapezoid2_d.oldvalue = 5188.78;
     trapezoid3_a.oldvalue = 4799.78;
     trapezoid3_b.oldvalue = 5188.78;
     trapezoid3_c.oldvalue = 6355.75;
     trapezoid3_d.oldvalue = 6744.75;
     trapezoid4_a.oldvalue = 6355.75;
     trapezoid4_b.oldvalue = 6744.75;
     trapezoid4_c.oldvalue = 7911.72;
     trapezoid4_d.oldvalue = 8300.72;     
     trapezoid5_a.oldvalue = 7911.72;
     trapezoid5_b.oldvalue = 8300.72;
     trapezoid5_c.oldvalue = 9662.20;
     trapezoid5_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = false;
     trapezoid2_d.disabled = false;     
     trapezoid3_c.disabled = false;
     trapezoid3_d.disabled = false;     
     trapezoid4_c.disabled = false;
     trapezoid4_d.disabled = false;
     trapezoid5_c.disabled = true;
     trapezoid5_d.disabled = true;
     trapezoid3_a.style = "visibility: visible";
     trapezoid3_b.style = "visibility: visible";
     trapezoid3_c.style = "visibility: visible";
     trapezoid3_d.style = "visibility: visible";     
     trapezoid4_a.style = "visibility: visible";
     trapezoid4_b.style = "visibility: visible";
     trapezoid4_c.style = "visibility: visible";
     trapezoid4_d.style = "visibility: visible";
     trapezoid5_a.style = "visibility: visible";
     trapezoid5_b.style = "visibility: visible";
     trapezoid5_c.style = "visibility: visible";
     trapezoid5_d.style = "visibility: visible";
     trapezoid3a_label.style = "visibility: visible";
     trapezoid3b_label.style = "visibility: visible";
     trapezoid3c_label.style = "visibility: visible";
     trapezoid3d_label.style = "visibility: visible";
     trapezoid4a_label.style = "visibility: visible";
     trapezoid4b_label.style = "visibility: visible";
     trapezoid4c_label.style = "visibility: visible";
     trapezoid4d_label.style = "visibility: visible";
     trapezoid5a_label.style = "visibility: visible";
     trapezoid5b_label.style = "visibility: visible";
     trapezoid5c_label.style = "visibility: visible";
     trapezoid5d_label.style = "visibility: visible";
     trapezoid3_label.style = "visibility: visible";
     trapezoid4_label.style = "visibility: visible";
     trapezoid5_label.style = "visibility: visible";
    }  
});

function update_fig1() {
  var myPlot = document.getElementById('InteractiveElement2');
  var active_slider_position = myPlot.layout.sliders[0].active;
  if (typeof active_slider_position == 'undefined') 
    active_slider_position = 0;  
  /*
  var trapezoid1_a = document.getElementById('trapezoid1_a').valueAsNumber
  var trapezoid1_b = document.getElementById('trapezoid1_b').valueAsNumber
  var trapezoid1_c = document.getElementById('trapezoid1_c').valueAsNumber
  var trapezoid1_d = document.getElementById('trapezoid1_d').valueAsNumber
  var trapezoid2_a = document.getElementById('trapezoid2_a').valueAsNumber
  var trapezoid2_b = document.getElementById('trapezoid2_b').valueAsNumber
  var trapezoid2_c = document.getElementById('trapezoid2_c').valueAsNumber
  var trapezoid2_d = document.getElementById('trapezoid2_d').valueAsNumber
  var trapezoid3_a = document.getElementById('trapezoid3_a').valueAsNumber
  var trapezoid3_b = document.getElementById('trapezoid3_b').valueAsNumber
  var trapezoid3_c = document.getElementById('trapezoid3_c').valueAsNumber
  var trapezoid3_d = document.getElementById('trapezoid3_d').valueAsNumber
  var trapezoid4_a = document.getElementById('trapezoid4_a').valueAsNumber
  var trapezoid4_b = document.getElementById('trapezoid4_b').valueAsNumber
  var trapezoid4_c = document.getElementById('trapezoid4_c').valueAsNumber
  var trapezoid4_d = document.getElementById('trapezoid4_d').valueAsNumber
  var trapezoid5_a = document.getElementById('trapezoid5_a').valueAsNumber
  var trapezoid5_b = document.getElementById('trapezoid5_b').valueAsNumber
  var trapezoid5_c = document.getElementById('trapezoid5_c').valueAsNumber
  var trapezoid5_d = document.getElementById('trapezoid5_d').valueAsNumber
  */

  var trapezoid1_a = Number(document.getElementById('trapezoid1_a').value)
  var trapezoid1_b = Number(document.getElementById('trapezoid1_b').value)
  var trapezoid1_c = Number(document.getElementById('trapezoid1_c').value)
  var trapezoid1_d = Number(document.getElementById('trapezoid1_d').value)
  var trapezoid2_a = Number(document.getElementById('trapezoid2_a').value)
  var trapezoid2_b = Number(document.getElementById('trapezoid2_b').value)
  var trapezoid2_c = Number(document.getElementById('trapezoid2_c').value)
  var trapezoid2_d = Number(document.getElementById('trapezoid2_d').value)
  var trapezoid3_a = Number(document.getElementById('trapezoid3_a').value)
  var trapezoid3_b = Number(document.getElementById('trapezoid3_b').value)
  var trapezoid3_c = Number(document.getElementById('trapezoid3_c').value)
  var trapezoid3_d = Number(document.getElementById('trapezoid3_d').value)
  var trapezoid4_a = Number(document.getElementById('trapezoid4_a').value)
  var trapezoid4_b = Number(document.getElementById('trapezoid4_b').value)
  var trapezoid4_c = Number(document.getElementById('trapezoid4_c').value)
  var trapezoid4_d = Number(document.getElementById('trapezoid4_d').value)
  var trapezoid5_a = Number(document.getElementById('trapezoid5_a').value)
  var trapezoid5_b = Number(document.getElementById('trapezoid5_b').value)
  var trapezoid5_c = Number(document.getElementById('trapezoid5_c').value)
  var trapezoid5_d = Number(document.getElementById('trapezoid5_d').value)

  var term1 = document.getElementById('term1').value
  var term2 = document.getElementById('term2').value
  var term3 = document.getElementById('term3').value
  var term4 = document.getElementById('term4').value
  var term5 = document.getElementById('term5').value

  var trace1_2partitions = {  
    x: [trapezoid1_a, trapezoid1_b, trapezoid1_c, trapezoid1_d, trapezoid1_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term1,
    hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'blue' },
    fill: 'toself',
  }

  var trace2_2partitions = {
    x: [trapezoid2_a, trapezoid2_b, trapezoid2_c, trapezoid2_d, trapezoid2_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term2,
    hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'orange' },
    fill: 'toself',
  };

  var dots_2partitions = {
    x: [trapezoid1_c + ((trapezoid1_d - trapezoid1_c) / 2)],
    y: [0.5],
    mode: 'markers',
    name: '',
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    showlegend: false,
    marker: { size: 10, color: 'red' },
    type: 'scatter',
    color: 'red'
  };

  var trace1_3partitions = {  
    x: [trapezoid1_a, trapezoid1_b, trapezoid1_c, trapezoid1_d, trapezoid1_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term1,
    hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'blue' },
    fill: 'toself',
  }

  var trace2_3partitions = {
    x: [trapezoid2_a, trapezoid2_b, trapezoid2_c, trapezoid2_d, trapezoid2_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term2,
    hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    marker: { size: 6, color: 'orange' },
    fill: 'toself',
  };

  var trace3_3partitions = {
    x: [trapezoid3_a, trapezoid3_b, trapezoid3_c, trapezoid3_d, trapezoid3_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term3,
    hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'green' },
    fill: 'toself',
  };

  var dots_3partitions = {
    x: [trapezoid1_c + ((trapezoid1_d - trapezoid1_c) / 2), trapezoid2_c + ((trapezoid2_d - trapezoid2_c) / 2)],
    y: [0.5, 0.5],
    mode: 'markers',
    showlegend: false,
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    marker: { size: 10, color: 'red' },
    name: '',
    type: 'scatter',
    color: 'red'
  };

  var trace1_4partitions = {  
    x: [trapezoid1_a, trapezoid1_b, trapezoid1_c, trapezoid1_d, trapezoid1_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term1,
    hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'blue' },
    fill: 'toself',
  }

  var trace2_4partitions = {
    x: [trapezoid2_a, trapezoid2_b, trapezoid2_c, trapezoid2_d, trapezoid2_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term2,
    hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'orange' },
    fill: 'toself',
  };

  var trace3_4partitions = {
    x: [trapezoid3_a, trapezoid3_b, trapezoid3_c, trapezoid3_d, trapezoid3_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term3,
    hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'green' },
    fill: 'toself',
  };

  var trace4_4partitions = {
    x: [trapezoid4_a, trapezoid4_b, trapezoid4_c, trapezoid4_d, trapezoid4_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term4,
    hovertemplate: '<i>Trapezoid 4:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'gray' },
    fill: 'toself',
  };

  var dots_4partitions = {
    x: [trapezoid1_c + ((trapezoid1_d - trapezoid1_c) / 2), trapezoid2_c + ((trapezoid2_d - trapezoid2_c) / 2), trapezoid3_c + ((trapezoid3_d - trapezoid3_c) / 2)],
    y: [0.5, 0.5, 0.5],
    mode: 'markers',
    name: '',
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    showlegend: false,
    marker: { size: 10, color: 'red' },
    type: 'scatter',
    color: 'red'
  };

  var trace1_5partitions = {  
    x: [trapezoid1_a, trapezoid1_b, trapezoid1_c, trapezoid1_d, trapezoid1_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term1,
    hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'blue' },
    fill: 'toself',
  }

  var trace2_5partitions = {
    x: [trapezoid2_a, trapezoid2_b, trapezoid2_c, trapezoid2_d, trapezoid2_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term2,
    hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'orange' },
    fill: 'toself',
  };

  var trace3_5partitions = {
    x: [trapezoid3_a, trapezoid3_b, trapezoid3_c, trapezoid3_d, trapezoid3_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term3,
    hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'green' },
    fill: 'toself',
  };

  var trace4_5partitions = {
    x: [trapezoid4_a, trapezoid4_b, trapezoid4_c, trapezoid4_d, trapezoid4_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term4,
    hovertemplate: '<i>Trapezoid 4:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'gray' },
    fill: 'toself',
  };

  var trace5_5partitions = {
    x: [trapezoid5_a, trapezoid5_b, trapezoid5_c, trapezoid5_d, trapezoid5_a],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: term5,
    hovertemplate: '<i>Trapezoid 5:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'magenta' },
    fill: 'toself',
  };

  var dots_5partitions = {
    x: [trapezoid1_c + ((trapezoid1_d - trapezoid1_c) / 2), trapezoid2_c + ((trapezoid2_d - trapezoid2_c) / 2), trapezoid3_c + ((trapezoid3_d - trapezoid3_c) / 2), trapezoid4_c + ((trapezoid4_d - trapezoid4_c) / 2)],
    y: [0.5, 0.5, 0.5, 0.5],
    mode: 'markers',
    showlegend: false,
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    name: '',
    marker: { size: 10, color: 'red' },
    type: 'scatter',
    color: 'red'
  };

  var trace_dashline = {  
    x: [1882.34, 9662.20],
    y: [0.5, 0.5],
    mode: 'lines',
    name: '',
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    line: {dash: "dash"},
    showlegend: false,
    marker: { size: 6, color: 'black' },  
  }

  while(InteractiveElement2.data.length>0)
  {
    Plotly.deleteTraces(InteractiveElement2, [0]);
  }

  if (active_slider_position == 0)
    {
      console.log('2 new partitions');
      Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions]);
    }
  else if (active_slider_position == 1)
    {
      console.log('3 new partitions');
      Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_3partitions, trace2_3partitions, trace3_3partitions, dots_3partitions]);
    }
  else if (active_slider_position == 2)
    {
      console.log('4 new partitions');
      Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_4partitions, trace2_4partitions, trace3_4partitions, trace4_4partitions, dots_4partitions]);
    }
  else if (active_slider_position == 3)
    {
      console.log('5 new partitions');
      Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_5partitions, trace2_5partitions, trace3_5partitions, trace4_5partitions, trace5_5partitions, dots_5partitions]);
    }
}

function reset_the_plot(){
  var trace_dashline = {  
    x: [1882.34, 9662.20],
    y: [0.5, 0.5],  
    mode: 'lines',
    line: {dash: "dash"},
    name: '',
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    showlegend: false,
    marker: { size: 6, color: 'black' },  
  }

  var trace1_2partitions = {  
    x: [1882.34, 1882.34, 5577.78, 5966.77, 1882.34],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: 'small',
    hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'blue' },
    fill: 'toself',
  }

  var trace2_2partitions = {
    x: [5577.78, 5966.77, 9662.20, 9662.20, 5577.78],
    y: [0,1,1,0,0],  
    mode: 'lines+markers',
    name: 'large',
    hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
    text: ["A", "B", "C", "D", "A"],
    marker: { size: 6, color: 'orange' },
    fill: 'toself',
  };

  var dots_2partitions = {
    x: [5772.27],
    y: [0.5],
    mode: 'markers',
    showlegend: false,
    name: '',
    hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
    marker: { size: 10, color: 'red' },
    type: 'scatter',
    color: 'red'
  };

  // Define Layout
  var layout = {
    title: "Perimeter-related fuzzy sets",
    //showlegend: false,
    //xaxis: {range: [1882.34, 9662.20]},
    xaxis: {range: [1850, 9700]},
    legend: {
          x: 1,
	  //xanchor: 'right',
	  y: 0.5
	},
    sliders: [{
	name: "perimeter_partitions_slider",
        active: 0,
    pad: {t: 15},
    currentvalue: {
      xanchor: 'center',
      prefix: 'Number of partitions: ',
      font: {
        color: '#888',
        size: 20
      }
    },
    steps: [{
      label: '2',
      method: 'restyle',
	  //data: data_2partitions,
      args: ['data', 'data_2partitions']
    }, {
      label: '3',
      method: 'restyle',
	  //data: data_3partitions,
      args: ['data', 'data_3partitions']
    }, {
      label: '4',
      method: 'restyle',
	  //data: data_4partitions,
      args: ['data', 'data_4partitions']
    }, {
      label: '5',
      method: 'restyle',
      //data: data_5partitions,
	  args: ['data', 'data_5partitions']
    }],
  }],
  orientation: 'vertical'
  };

  var trapezoid1_a = document.getElementById('trapezoid1_a');
  var trapezoid1_b = document.getElementById('trapezoid1_b');
  var trapezoid1_c = document.getElementById('trapezoid1_c');
  var trapezoid1_d = document.getElementById('trapezoid1_d');
  var trapezoid2_a = document.getElementById('trapezoid2_a');
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid2_d = document.getElementById('trapezoid2_d');
  var trapezoid3_a = document.getElementById('trapezoid3_a');
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid3_d = document.getElementById('trapezoid3_d');
  var trapezoid4_a = document.getElementById('trapezoid4_a');
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid4_d = document.getElementById('trapezoid4_d');
  var trapezoid5_a = document.getElementById('trapezoid5_a');
  var trapezoid5_b = document.getElementById('trapezoid5_b');
  var trapezoid5_c = document.getElementById('trapezoid5_c');
  var trapezoid5_d = document.getElementById('trapezoid5_d');

  var term3 = document.getElementById('term3');
  var term4 = document.getElementById('term4');
  var term5 = document.getElementById('term5');

  var term3_label = document.getElementById('term3_label');
  var term4_label = document.getElementById('term4_label');
  var term5_label = document.getElementById('term5_label');

  var trapezoid3a_label = document.getElementById('trapezoid3a_label');
  var trapezoid3b_label = document.getElementById('trapezoid3b_label');
  var trapezoid3c_label = document.getElementById('trapezoid3c_label');
  var trapezoid3d_label = document.getElementById('trapezoid3d_label');
  var trapezoid4a_label = document.getElementById('trapezoid4a_label');
  var trapezoid4b_label = document.getElementById('trapezoid4b_label');
  var trapezoid4c_label = document.getElementById('trapezoid4c_label');
  var trapezoid4d_label = document.getElementById('trapezoid4d_label');
  var trapezoid5a_label = document.getElementById('trapezoid5a_label');
  var trapezoid5b_label = document.getElementById('trapezoid5b_label');
  var trapezoid5c_label = document.getElementById('trapezoid5c_label');
  var trapezoid5d_label = document.getElementById('trapezoid5d_label');

  var trapezoid3_label = document.getElementById('trapezoid3_label');
  var trapezoid4_label = document.getElementById('trapezoid4_label');
  var trapezoid5_label = document.getElementById('trapezoid5_label');
  
  var myPlot = document.getElementById('InteractiveElement2');
  while(myPlot.data.length>0)
  {
      Plotly.deleteTraces(myPlot, [0]);
  }
  myPlot.layout.sliders[0].active = 0;
  //console.log('2 partitions');
  //Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions]);
  term1.value = "small";
  term2.value = "large";
  term3.style = "visibility: hidden";
  term4.style = "visibility: hidden";
  term5.style = "visibility: hidden";
  term3_label.style = "visibility: hidden";
  term4_label.style = "visibility: hidden";
  term5_label.style = "visibility: hidden";
  trapezoid1_a.value = 1882.34;
  trapezoid1_b.value = 1882.34;
  trapezoid1_c.value = 5577.78;
  trapezoid1_d.value = 5966.77;
  trapezoid2_a.value = 5577.78;
  trapezoid2_b.value = 5966.77;
  trapezoid2_c.value = 9662.20;
  trapezoid2_d.value = 9662.20;
  trapezoid1_a.oldvalue = 1882.34;
  trapezoid1_b.oldvalue = 1882.34;
  trapezoid1_c.oldvalue = 5577.78;
  trapezoid1_d.oldvalue = 5966.77;
  trapezoid2_a.oldvalue = 5577.78;
  trapezoid2_b.oldvalue = 5966.77;
  trapezoid2_c.oldvalue = 9662.20;
  trapezoid2_d.oldvalue = 9662.20;
  trapezoid2_c.disabled = true;
  trapezoid2_d.disabled = true;
  trapezoid3_a.style = "visibility: hidden";
  trapezoid3_b.style = "visibility: hidden";
  trapezoid3_c.style = "visibility: hidden";
  trapezoid3_d.style = "visibility: hidden";     
  trapezoid4_a.style = "visibility: hidden";
  trapezoid4_b.style = "visibility: hidden";
  trapezoid4_c.style = "visibility: hidden";
  trapezoid4_d.style = "visibility: hidden";
  trapezoid5_a.style = "visibility: hidden";
  trapezoid5_b.style = "visibility: hidden";
  trapezoid5_c.style = "visibility: hidden";
  trapezoid5_d.style = "visibility: hidden";
  trapezoid3a_label.style = "visibility: hidden";
  trapezoid3b_label.style = "visibility: hidden";
  trapezoid3c_label.style = "visibility: hidden";
  trapezoid3d_label.style = "visibility: hidden";
  trapezoid4a_label.style = "visibility: hidden";
  trapezoid4b_label.style = "visibility: hidden";
  trapezoid4c_label.style = "visibility: hidden";
  trapezoid4d_label.style = "visibility: hidden";
  trapezoid5a_label.style = "visibility: hidden";
  trapezoid5b_label.style = "visibility: hidden";
  trapezoid5c_label.style = "visibility: hidden";
  trapezoid5d_label.style = "visibility: hidden";
  trapezoid3_label.style = "visibility: hidden";
  trapezoid4_label.style = "visibility: hidden";
  trapezoid5_label.style = "visibility: hidden";

  //var active_slider_position = myPlot.layout.sliders[0].active;
  //active_slider_position = 0;

myPlot.on('plotly_sliderchange', function(sliderData){

var trace_dashline = {  
  x: [1882.34, 9662.20],
  y: [0.5, 0.5],  
  mode: 'lines',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  line: {dash: "dash"},
  showlegend: false,
  marker: { size: 6, color: 'black' },  
}

var trace1_2partitions = {  
  x: [1882.34, 1882.34, 5577.78, 5966.77, 1882.34],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_2partitions = {
  x: [5577.78, 5966.77, 9662.20, 9662.20, 5577.78],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var dots_2partitions = {
  x: [5772.27],
  y: [0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

var trace1_3partitions = {  
  x: [1882.34, 1882.34, 4281.13, 4670.13, 1882.34],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_3partitions = {
  x: [4281.13, 4670.13, 6874.41, 7263.41, 4281.13],
  y: [0,1,1,0,0],  
  name: 'medium',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var trace3_3partitions = {
  x: [6871.41, 7263.41, 9662.20, 9662.20, 6871.41],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'green' },
  fill: 'toself',
};

var dots_3partitions = {
  x: [4475.63, 7068.91],
  y: [0.5, 0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

var trace1_4partitions = {  
  x: [1882.34, 1882.34, 3632.81, 4021.78, 1882.34],
  y: [0,1,1,0,0],  
  name: 'very small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_4partitions = {
  x: [3632.81, 4021.78, 5577.78, 5966.77, 3632.81],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var trace3_4partitions = {
  x: [5577.78, 5966.77, 7522.74, 7911.74, 5577.78],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'green' },
  fill: 'toself',
};

var trace4_4partitions = {
  x: [7522.74, 7911.74, 9662.20, 9662.20, 7522.74],
  y: [0,1,1,0,0],  
  name: 'very large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 4:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'gray' },

  fill: 'toself',
};

var dots_4partitions = {
  x: [3827.31, 5772.27, 7717.24],
  y: [0.5, 0.5, 0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

var trace1_5partitions = {  
  x: [1882.34, 1882.34, 3243.81, 3632.81, 1882.34],
  y: [0,1,1,0,0],  
  name: 'very small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 1:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'blue' },
  fill: 'toself',
}

var trace2_5partitions = {
  x: [3243.81, 3632.81, 4799.78, 5188.78, 3243.81],
  y: [0,1,1,0,0],  
  name: 'small',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 2:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'orange' },
  fill: 'toself',
};

var trace3_5partitions = {
  x: [4799.78, 5188.78, 6355.75, 6744.75, 4799.78],
  y: [0,1,1,0,0],  
  name: 'medium',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 3:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'green' },
  fill: 'toself',
};

var trace4_5partitions = {
  x: [6355.75, 6744.75, 7911.72, 8300.72, 6355.75],
  y: [0,1,1,0,0],  
  name: 'large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 4:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'gray' },
  fill: 'toself',
};

var trace5_5partitions = {
  x: [7911.72, 8300.72, 9662.20, 9662.20, 7911.72],
  y: [0,1,1,0,0],  
  name: 'very large',
  mode: 'lines+markers',
  hovertemplate: '<i>Trapezoid 5:</i><br><b>%{text}:</b><br>Feature value: %{x}<br>Membership function value: %{y}',
  text: ["A", "B", "C", "D", "A"],
  marker: { size: 6, color: 'magenta' },
  fill: 'toself',
};

var dots_5partitions = {
  x: [3438.31, 4994.28, 6550.25, 8106.22],
  y: [0.5, 0.5, 0.5, 0.5],
  mode: 'markers',
  name: '',
  hovertemplate: 'Feature value: %{x}<br>Membership function value: %{y}',
  marker: { size: 10, color: 'red' },
  type: 'scatter',
  color: 'red',
  showlegend: false
};

  var trapezoid1_a = document.getElementById('trapezoid1_a');
  var trapezoid1_b = document.getElementById('trapezoid1_b');
  var trapezoid1_c = document.getElementById('trapezoid1_c');
  var trapezoid1_d = document.getElementById('trapezoid1_d');
  var trapezoid2_a = document.getElementById('trapezoid2_a');
  var trapezoid2_b = document.getElementById('trapezoid2_b');
  var trapezoid2_c = document.getElementById('trapezoid2_c');
  var trapezoid2_d = document.getElementById('trapezoid2_d');
  var trapezoid3_a = document.getElementById('trapezoid3_a');
  var trapezoid3_b = document.getElementById('trapezoid3_b');
  var trapezoid3_c = document.getElementById('trapezoid3_c');
  var trapezoid3_d = document.getElementById('trapezoid3_d');
  var trapezoid4_a = document.getElementById('trapezoid4_a');
  var trapezoid4_b = document.getElementById('trapezoid4_b');
  var trapezoid4_c = document.getElementById('trapezoid4_c');
  var trapezoid4_d = document.getElementById('trapezoid4_d');
  var trapezoid5_a = document.getElementById('trapezoid5_a');
  var trapezoid5_b = document.getElementById('trapezoid5_b');
  var trapezoid5_c = document.getElementById('trapezoid5_c');
  var trapezoid5_d = document.getElementById('trapezoid5_d');

  var term3 = document.getElementById('term3');
  var term4 = document.getElementById('term4');
  var term5 = document.getElementById('term5');

  var term3_label = document.getElementById('term3_label');
  var term4_label = document.getElementById('term4_label');
  var term5_label = document.getElementById('term5_label');

  var trapezoid3a_label = document.getElementById('trapezoid3a_label');
  var trapezoid3b_label = document.getElementById('trapezoid3b_label');
  var trapezoid3c_label = document.getElementById('trapezoid3c_label');
  var trapezoid3d_label = document.getElementById('trapezoid3d_label');
  var trapezoid4a_label = document.getElementById('trapezoid4a_label');
  var trapezoid4b_label = document.getElementById('trapezoid4b_label');
  var trapezoid4c_label = document.getElementById('trapezoid4c_label');
  var trapezoid4d_label = document.getElementById('trapezoid4d_label');
  var trapezoid5a_label = document.getElementById('trapezoid5a_label');
  var trapezoid5b_label = document.getElementById('trapezoid5b_label');
  var trapezoid5c_label = document.getElementById('trapezoid5c_label');
  var trapezoid5d_label = document.getElementById('trapezoid5d_label');

  var trapezoid3_label = document.getElementById('trapezoid3_label');
  var trapezoid4_label = document.getElementById('trapezoid4_label');
  var trapezoid5_label = document.getElementById('trapezoid5_label');

  console.log('Slider set to', sliderData.slider.active);
  while(InteractiveElement2.data.length>0)
  {
      Plotly.deleteTraces(InteractiveElement2, [0]);
  }
  if (sliderData.slider.active == 0)
    {console.log('2 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions]);
     term1.value = "small";
     term2.value = "large";
     term3.style = "visibility: hidden";
     term4.style = "visibility: hidden";
     term5.style = "visibility: hidden";
     term3_label.style = "visibility: hidden";
     term4_label.style = "visibility: hidden";
     term5_label.style = "visibility: hidden";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 5577.78;
     trapezoid1_d.value = 5966.77;
     trapezoid2_a.value = 5577.78;
     trapezoid2_b.value = 5966.77;
     trapezoid2_c.value = 9662.20;
     trapezoid2_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 5577.78;
     trapezoid1_d.oldvalue = 5966.77;
     trapezoid2_a.oldvalue = 5577.78;
     trapezoid2_b.oldvalue = 5966.77;
     trapezoid2_c.oldvalue = 9662.20;
     trapezoid2_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = true;
     trapezoid2_d.disabled = true;
     trapezoid3_a.style = "visibility: hidden";
     trapezoid3_b.style = "visibility: hidden";
     trapezoid3_c.style = "visibility: hidden";
     trapezoid3_d.style = "visibility: hidden";     
     trapezoid4_a.style = "visibility: hidden";
     trapezoid4_b.style = "visibility: hidden";
     trapezoid4_c.style = "visibility: hidden";
     trapezoid4_d.style = "visibility: hidden";
     trapezoid5_a.style = "visibility: hidden";
     trapezoid5_b.style = "visibility: hidden";
     trapezoid5_c.style = "visibility: hidden";
     trapezoid5_d.style = "visibility: hidden";
     trapezoid3a_label.style = "visibility: hidden";
     trapezoid3b_label.style = "visibility: hidden";
     trapezoid3c_label.style = "visibility: hidden";
     trapezoid3d_label.style = "visibility: hidden";
     trapezoid4a_label.style = "visibility: hidden";
     trapezoid4b_label.style = "visibility: hidden";
     trapezoid4c_label.style = "visibility: hidden";
     trapezoid4d_label.style = "visibility: hidden";
     trapezoid5a_label.style = "visibility: hidden";
     trapezoid5b_label.style = "visibility: hidden";
     trapezoid5c_label.style = "visibility: hidden";
     trapezoid5d_label.style = "visibility: hidden";
     trapezoid3_label.style = "visibility: hidden";
     trapezoid4_label.style = "visibility: hidden";
     trapezoid5_label.style = "visibility: hidden";
	}
  else if (sliderData.slider.active == 1)
    {console.log('3 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_3partitions, trace2_3partitions, trace3_3partitions, dots_3partitions]);
     term1.value = "small";
     term2.value = "medium";
     term3.value = "large";
     term3.style = "visibility: visible";
     term4.style = "visibility: hidden";
     term5.style = "visibility: hidden";
     term3_label.style = "visibility: visible";
     term4_label.style = "visibility: hidden";
     term5_label.style = "visibility: hidden";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 4281.13;
     trapezoid1_d.value = 4670.13;
     trapezoid2_a.value = 4281.13;
     trapezoid2_b.value = 4670.13;
     trapezoid2_c.value = 6874.41;
     trapezoid2_d.value = 7263.41;
     trapezoid3_a.value = 6871.41;
     trapezoid3_b.value = 7263.41;
     trapezoid3_c.value = 9662.20;
     trapezoid3_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 4281.13;
     trapezoid1_d.oldvalue = 4670.13;
     trapezoid2_a.oldvalue = 4281.13;
     trapezoid2_b.oldvalue = 4670.13;
     trapezoid2_c.oldvalue = 6874.41;
     trapezoid2_d.oldvalue = 7263.41;
     trapezoid3_a.oldvalue = 6871.41;
     trapezoid3_b.oldvalue = 7263.41;
     trapezoid3_c.oldvalue = 9662.20;
     trapezoid3_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = false;
     trapezoid2_d.disabled = false;
     trapezoid3_c.disabled = true;
     trapezoid3_d.disabled = true;
     trapezoid3_a.style = "visibility: visible";
     trapezoid3_b.style = "visibility: visible";
     trapezoid3_c.style = "visibility: visible";
     trapezoid3_d.style = "visibility: visible";     
     trapezoid4_a.style = "visibility: hidden";
     trapezoid4_b.style = "visibility: hidden";
     trapezoid4_c.style = "visibility: hidden";
     trapezoid4_d.style = "visibility: hidden";
     trapezoid5_a.style = "visibility: hidden";
     trapezoid5_b.style = "visibility: hidden";
     trapezoid5_c.style = "visibility: hidden";
     trapezoid5_d.style = "visibility: hidden";    
     trapezoid3a_label.style = "visibility: visible";
     trapezoid3b_label.style = "visibility: visible";
     trapezoid3c_label.style = "visibility: visible";
     trapezoid3d_label.style = "visibility: visible";
     trapezoid4a_label.style = "visibility: hidden";
     trapezoid4b_label.style = "visibility: hidden";
     trapezoid4c_label.style = "visibility: hidden";
     trapezoid4d_label.style = "visibility: hidden";
     trapezoid5a_label.style = "visibility: hidden";
     trapezoid5b_label.style = "visibility: hidden";
     trapezoid5c_label.style = "visibility: hidden";
     trapezoid5d_label.style = "visibility: hidden";
     trapezoid3_label.style = "visibility: visible";
     trapezoid4_label.style = "visibility: hidden";
     trapezoid5_label.style = "visibility: hidden";
}
  else if (sliderData.slider.active == 2)
    {console.log('4 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_4partitions, trace2_4partitions, trace3_4partitions, trace4_4partitions, dots_4partitions]);
     term1.value = "very small";
     term2.value = "small";
     term3.value = "large";
     term4.value = "very large";
     term3.style = "visibility: visible";
     term4.style = "visibility: visible";
     term5.style = "visibility: hidden";
     term3_label.style = "visibility: visible";
     term4_label.style = "visibility: visible";
     term5_label.style = "visibility: hidden";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 3632.81;
     trapezoid1_d.value = 4021.78;
     trapezoid2_a.value = 3632.81;
     trapezoid2_b.value = 4021.78;
     trapezoid2_c.value = 5577.78;
     trapezoid2_d.value = 5966.77;
     trapezoid3_a.value = 5577.78;
     trapezoid3_b.value = 5966.77;
     trapezoid3_c.value = 7522.74;
     trapezoid3_d.value = 7911.74;
     trapezoid4_a.value = 7522.74;
     trapezoid4_b.value = 7911.74;
     trapezoid4_c.value = 9662.20;
     trapezoid4_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 3632.81;
     trapezoid1_d.oldvalue = 4021.78;
     trapezoid2_a.oldvalue = 3632.81;
     trapezoid2_b.oldvalue = 4021.78;
     trapezoid2_c.oldvalue = 5577.78;
     trapezoid2_d.oldvalue = 5966.77;
     trapezoid3_a.oldvalue = 5577.78;
     trapezoid3_b.oldvalue = 5966.77;
     trapezoid3_c.oldvalue = 7522.74;
     trapezoid3_d.oldvalue = 7911.74;
     trapezoid4_a.oldvalue = 7522.74;
     trapezoid4_b.oldvalue = 7911.74;
     trapezoid4_c.oldvalue = 9662.20;
     trapezoid4_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = false;
     trapezoid2_d.disabled = false;     
     trapezoid3_c.disabled = false;
     trapezoid3_d.disabled = false;
     trapezoid4_c.disabled = true;
     trapezoid4_d.disabled = true;
     trapezoid3_a.style = "visibility: visible";
     trapezoid3_b.style = "visibility: visible";
     trapezoid3_c.style = "visibility: visible";
     trapezoid3_d.style = "visibility: visible";     
     trapezoid4_a.style = "visibility: visible";
     trapezoid4_b.style = "visibility: visible";
     trapezoid4_c.style = "visibility: visible";
     trapezoid4_d.style = "visibility: visible";
     trapezoid5_a.style = "visibility: hidden";
     trapezoid5_b.style = "visibility: hidden";
     trapezoid5_c.style = "visibility: hidden";
     trapezoid5_d.style = "visibility: hidden";
     trapezoid3a_label.style = "visibility: visible";
     trapezoid3b_label.style = "visibility: visible";
     trapezoid3c_label.style = "visibility: visible";
     trapezoid3d_label.style = "visibility: visible";
     trapezoid4a_label.style = "visibility: visible";
     trapezoid4b_label.style = "visibility: visible";
     trapezoid4c_label.style = "visibility: visible";
     trapezoid4d_label.style = "visibility: visible";
     trapezoid5a_label.style = "visibility: hidden";
     trapezoid5b_label.style = "visibility: hidden";
     trapezoid5c_label.style = "visibility: hidden";
     trapezoid5d_label.style = "visibility: hidden";
     trapezoid3_label.style = "visibility: visible";
     trapezoid4_label.style = "visibility: visible";
     trapezoid5_label.style = "visibility: hidden";
	}
  else if (sliderData.slider.active == 3)
    {console.log('5 partitions');
     Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_5partitions, trace2_5partitions, trace3_5partitions, trace4_5partitions, trace5_5partitions, dots_5partitions]);
     term1.value = "very small";
     term2.value = "small";
     term3.value = "medium";
     term4.value = "large";
     term5.value = "very large";
     term3.style = "visibility: visible";
     term4.style = "visibility: visible";
     term5.style = "visibility: visible";
     term3_label.style = "visibility: visible";
     term4_label.style = "visibility: visible";
     term5_label.style = "visibility: visible";
     trapezoid1_a.value = 1882.34;
     trapezoid1_b.value = 1882.34;
     trapezoid1_c.value = 3243.81;
     trapezoid1_d.value = 3632.81;
     trapezoid2_a.value = 3243.81;
     trapezoid2_b.value = 3632.81;
     trapezoid2_c.value = 4799.78;
     trapezoid2_d.value = 5188.78;
     trapezoid3_a.value = 4799.78;
     trapezoid3_b.value = 5188.78;
     trapezoid3_c.value = 6355.75;
     trapezoid3_d.value = 6744.75;
     trapezoid4_a.value = 6355.75;
     trapezoid4_b.value = 6744.75;
     trapezoid4_c.value = 7911.72;
     trapezoid4_d.value = 8300.72;     
     trapezoid5_a.value = 7911.72;
     trapezoid5_b.value = 8300.72;
     trapezoid5_c.value = 9662.20;
     trapezoid5_d.value = 9662.20;
     trapezoid1_a.oldvalue = 1882.34;
     trapezoid1_b.oldvalue = 1882.34;
     trapezoid1_c.oldvalue = 3243.81;
     trapezoid1_d.oldvalue = 3632.81;
     trapezoid2_a.oldvalue = 3243.81;
     trapezoid2_b.oldvalue = 3632.81;
     trapezoid2_c.oldvalue = 4799.78;
     trapezoid2_d.oldvalue = 5188.78;
     trapezoid3_a.oldvalue = 4799.78;
     trapezoid3_b.oldvalue = 5188.78;
     trapezoid3_c.oldvalue = 6355.75;
     trapezoid3_d.oldvalue = 6744.75;
     trapezoid4_a.oldvalue = 6355.75;
     trapezoid4_b.oldvalue = 6744.75;
     trapezoid4_c.oldvalue = 7911.72;
     trapezoid4_d.oldvalue = 8300.72;     
     trapezoid5_a.oldvalue = 7911.72;
     trapezoid5_b.oldvalue = 8300.72;
     trapezoid5_c.oldvalue = 9662.20;
     trapezoid5_d.oldvalue = 9662.20;
     trapezoid2_c.disabled = false;
     trapezoid2_d.disabled = false;     

     trapezoid3_c.disabled = false;
     trapezoid3_d.disabled = false;     
     trapezoid4_c.disabled = false;
     trapezoid4_d.disabled = false;
     trapezoid5_c.disabled = true;
     trapezoid5_d.disabled = true;
     trapezoid3_a.style = "visibility: visible";
     trapezoid3_b.style = "visibility: visible";
     trapezoid3_c.style = "visibility: visible";
     trapezoid3_d.style = "visibility: visible";     
     trapezoid4_a.style = "visibility: visible";
     trapezoid4_b.style = "visibility: visible";
     trapezoid4_c.style = "visibility: visible";
     trapezoid4_d.style = "visibility: visible";
     trapezoid5_a.style = "visibility: visible";
     trapezoid5_b.style = "visibility: visible";
     trapezoid5_c.style = "visibility: visible";
     trapezoid5_d.style = "visibility: visible";
     trapezoid3a_label.style = "visibility: visible";
     trapezoid3b_label.style = "visibility: visible";
     trapezoid3c_label.style = "visibility: visible";
     trapezoid3d_label.style = "visibility: visible";
     trapezoid4a_label.style = "visibility: visible";
     trapezoid4b_label.style = "visibility: visible";
     trapezoid4c_label.style = "visibility: visible";
     trapezoid4d_label.style = "visibility: visible";
     trapezoid5a_label.style = "visibility: visible";
     trapezoid5b_label.style = "visibility: visible";
     trapezoid5c_label.style = "visibility: visible";
     trapezoid5d_label.style = "visibility: visible";
     trapezoid3_label.style = "visibility: visible";
     trapezoid4_label.style = "visibility: visible";
     trapezoid5_label.style = "visibility: visible";
    }  
});

  //Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions]);
  //var myPlot = document.getElementById('InteractiveElement2');
  //var active_slider_position = myPlot.layout.sliders[0].active;
  //active_slider_position = 0;
  Plotly.addTraces(InteractiveElement2, [trace_dashline, trace1_2partitions, trace2_2partitions, dots_2partitions, layout, {displayModeBar: false}]);
}

