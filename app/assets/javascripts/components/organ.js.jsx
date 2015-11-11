var Organ = React.createClass({
  render: function() {
    return (
      <div className="organ">
      {window.createToneArray().map(function(tone){
        return < OrganKey key={tone} tone={tone} />;
      })}
      < Recorder className="organ-recorder"/>
      </div>
    );
  }

});
