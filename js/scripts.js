//frontendLogic
$(document).ready(function() {
  $("#beepBoop").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#number").val());
//BackendLogic
    var result=[];
    for(var index=0;index<=inputNumber;index++) {
      if((index.toString().includes("1"))||(index.toString().includes("0"))||(index%3===0))
      {
        if(index%3===0) {
          result.push("I'm sorry, Dave. I'm afraid I can't do that.")
        }else if(index.toString().includes("1")){
          result.push("Boop");
        }else if(index.toString().includes("0")){
          result.push("Beep");
        }
      }else{
          result.push(index);
        }
      }
//frontendLogic
    $(".output").append("<p>" + result + "</p>")
  });
});
