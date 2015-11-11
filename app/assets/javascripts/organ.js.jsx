$(document).ready(function(){
  React.render(
    React.createElement(Organ),
    document.getElementById("musicbox")
  );
  React.render(
    React.createElement(Jukebox),
    document.getElementById('jukebox')
  );

});
