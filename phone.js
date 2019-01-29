$(document).ready(function() { // do this when the document is loaded
  $("#dialer").show(); // show the element with ID "element"
  $("#add_contact").hide(); // hide the element with ID "otherElement"
  $("#contact_list").hide(); 
});

$("#button1").click(function() { // when "button_id" is clicked
  $("#dialer").show(); // show element
  $("#contact_list").hide();  // hide other element
  $("#add_contact").hide(); 
});

$("#button2").click(function() { // when "button_id" is clicked
  $("#contact_list").show(); // show element
  $("#dialer").hide();  // hide other element
  $("#add_contact").hide(); 
});

$("#button3").click(function() { // when "button_id" is clicked
  $("#add_contact").show(); // show element
  $("#dialer").hide();  // hide other element
  $("#contact_list").hide();  
});