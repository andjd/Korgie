var OrganHelper = window.OrganHelper = {};

OrganHelper.createToneArray = function() {
  var tones = [];
  for (var tone in window.TONES) {
    tones.push(tone);
  }
  return tones;
};

var Organ = React.createClass({
  render: function() {
    return (
      <div className="organ">
      {OrganHelper.createToneArray().map(function(tone){
        return < OrganKey key={tone} tone={tone} />;
      })}
      </div>
    );
  }

});
