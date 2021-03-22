function finalAdd() {
  var first = parseInt(document.getElementById("firstAdd").value);

  var second = parseInt(document.getElementById("secondAdd").value);

  var final = first + second;

  document.getElementById("finalAdd").innerHTML = final;
}

function finalSub() {
  var first = document.getElementById("firstSub").value;

  var second = document.getElementById("secondSub").value;

  var final = first - second;

  document.getElementById("finalSub").innerHTML = final;
}

function finalDiv() {
  var first = parseInt(document.getElementById("firstDiv").value);

  var second = parseInt(document.getElementById("secondDiv").value);

  var final = first / second;

  document.getElementById("finalDiv").innerHTML = final;
}
