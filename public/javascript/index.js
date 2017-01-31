
$(document).ready(function() {
  $("#upload").click(function() {
    var reader = new FileReader();
    var list = document.getElementById("fileName");
    reader.onloadend = function () {
      post('./index.php', {data: reader.result});
    };
    
    // reads data from the uploaded file
    reader.readAsText(list.files[0]);
  });

  $("#run").click(function() {
    post('./index.php', {run:"1"});
  });
});


