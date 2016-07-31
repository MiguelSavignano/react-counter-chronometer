class Hi extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'timerStart')
    this.state = {
      count: 0,
      timer: 10
    }
  }
  onCountUp(){
    if( this.state.count == 0 ) this.timerStart()
    if(this.state.timer >= 0){
      this.setState({ count: this.state.count + 1 })
    }
  }
  timerStart(){
    var interval_fnc = setInterval((time) => {
      if(this.state.timer <= 0) clearTimeout(this.state.interval_fnc);
      this.setState({ timer: this.state.timer - 0.1 })
    }, 100);
    this.setState({ interval_fnc: interval_fnc })
  }
  render() {
    const {count, timer} = this.state
    return (
      <div>
        timer  : {timer} <br/>
        clicks: {count} <br/>
        <button className="btn btn-info"
          onClick={this.onCountUp.bind(this)}>
          click
        </button>
      </div>
    );
  }
}
