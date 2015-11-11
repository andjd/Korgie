var $document = $(document);
$document.on("keydown", function(event) {
  var keycode = event.keyCode;
  var tone = KEY_MAP[keycode];
  KeyActions.keyPressed(tone);
});

$document.on("keyup", function(event) {
  var keycode = event.keyCode;
  var tone = KEY_MAP[keycode];
  KeyActions.keyLifted(tone);
});
