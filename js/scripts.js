$(document).ready(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault()
   var q1 = parseInt($("input:radio[name=q1]:checked").val());
   var q2 = parseInt($("input:radio[name=q2]:checked").val());
   var q3 =parseInt($("input:radio[name=q3]:checked").val());
   var q4 =parseInt($("input:radio[name=q4]:checked").val());
   var q5 =parseInt($("input:radio[name=q5]:checked").val());



   var total=q1+q2+q3+q4+q5;
  alert("You scored " + total + " out of 10");
 });
  $("#style").submit(function(event){
    event.preventDefault();
    $(".edit").show();
    $(".nav").hide();
    $("#style").hide()
  })


});
