$.getJSON("https://api.countapi.xyz/hit/fforfachriza.github.io/236837886", function (response) {
  $("#visitor").text(response.value);
});
