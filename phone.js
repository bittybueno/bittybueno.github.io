$(document).ready(function() { // do this when the document is loaded
  $("#dialer").show(); // show the element with ID "element"
  $("#add_contact").hide(); // hide the element with ID "otherElement"
  $("#contact_list").hide(); 
});

$("#tab_dialer").click(function() { // when "button_id" is clicked
  $("#dialer").show(); // show element
  $("#contact_list").hide();  // hide other element
  $("#add_contact").hide(); 
});

$("#tab_contacts").click(function() { // when "button_id" is clicked
  $("#contact_list").show(); // show element
  $("#dialer").hide();  // hide other element
  $("#add_contact").hide(); 
});

$("#tab_add_contact").click(function() { // when "button_id" is clicked
  $("#add_contact").show(); // show element
  $("#dialer").hide();  // hide other element
  $("#contact_list").hide();  
});

$("#dialer_pad button").click(function() {
  $("#number_input").val($("#number_input").val() + this.innerText);
})

$("#button_dialer_clear").click(function() {
  $("#number_input").val("");
})