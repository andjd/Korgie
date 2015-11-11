(function (root) {
    var _notes = [];

  var NoteStore = root.NoteStore = $.extend({}, EventEmitter.prototype, {

  all: function() {

    return _notes.slice();
  },

  addNote: function(note) {
    if (_notes.indexOf(note) === -1) {
      _notes.push(note);
    }
    NoteStore.emitChange();
  },

  removeNote: function(note) {
    _notes = _notes.filter(function (n){
      return (note !== n);
    });
    NoteStore.emitChange();
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  dispatcherIndexId: root.AppDispatcher.register(function(payload) {

    var noteAction = payload.noteAction;
    if (noteAction.actionType == "start") {
      NoteStore.addNote(noteAction.tone);
    }
    else if (noteAction.actionType == "stop") {
      NoteStore.removeNote(noteAction.tone);
    }
    return true;
  }),
});
}(this));
