document.getElementById("calculate-btn").addEventListener("click", function() {
  var mInput = parseFloat(document.getElementById("m").value);
  var cmResult = mInput * 100;
  document.getElementById("cm").value = cmResult;
});

document.getElementById("reset-btn").addEventListener("click", function() {
  document.getElementById("m").value = "";
  document.getElementById("cm").value = "";
});
