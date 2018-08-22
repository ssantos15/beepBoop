$(document).ready(function() {
  $("#beepBoop").submit(function(event) {
    debugger;
    event.preventDefault();
    var inputNumber = parseInt($("#number").val());
    var result=[];
    for(index=0;index<=inputNumber;index++) {
        if(index===0) {
          result.push("Beep")
        }else if(index===1){
          result.push("Boop")
        }else if(index%3===0){
          result.push("I'm sorry, Dave. I'm afraid I can't do that.")
        }else{
          result.push(index)
        }
    }
    $(".output").append("<p>" + result + "</p>")

  });
});
