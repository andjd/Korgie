var Organ = React.createClass({
  render: function() {
    return (
      <div className="organ">
        <div>
          {window.createToneArray().map(function(tone){
            return < OrganKey key={tone} tone={tone} />;
          })}
        </div>
        < Recorder className="organ-recorder"/>
      </div>
    );
  }

});
