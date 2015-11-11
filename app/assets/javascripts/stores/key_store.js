(function (root) {
    var _notes = [];

  // debugger;
  var NoteStore = root.NoteStore = $.extend({}, EventEmitter.prototype, {

  all: function() {

    return _notes.slice();
  },

  addNote: function(note) {
    //Only play add a note once time?
    if (_notes.indexOf(note) === -1) {
      _notes.push(note);
    }
  },

  removeNote: function(note) {
    _notes = _notes.filter(function (n){
      return (note !== n);
    });
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
    if (noteAction.actionType == "start"){
      NoteStore.addNote(noteAction.tone);
    } else if (noteAction.actionType == "stop") {
      NoteStore.removeNote(noteAction.tone);
    }
    console.log(NoteStore.all())
    return true;
  }),
});
}(this));
