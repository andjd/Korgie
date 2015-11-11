var KeyActions = window.KeyActions = {};

KeyActions.keyPressed = function(tone) {
  var payload = {actionType: "start", tone: tone};

  AppDispatcher.dispatch(payload);
};

KeyActions.keyLifted = function(tone) {
  var payload = {actionType: "stop", tone: tone};

  AppDispatcher.dispatch(payload);
};
