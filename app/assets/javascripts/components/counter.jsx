class Counter extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, ['timerStart', 'restart', 'onCountUp', 'finish'])
    this.state = { count: 0, timer: this.props.MAX_TIMER, maxCout: 0 }
  }
  finish(){
    return (this.state.timer <= 0)
  }
  onCountUp(){
    const {count, timer} = this.state
    if( count == 0 ) this.timerStart()
    if(timer > 0.0)  this.setState({ count: count + 1 })
  }
  timerStart(){
    var interval_fnc = setInterval(() => {
      const {count, maxCout, timer} = this.state
      if(this.finish()){
        this.setState({ maxCout: (count > maxCout) ? count : maxCout  })
        clearTimeout(this.state.interval_fnc);
      }else{
        this.setState({ timer: (this.state.timer - 0.1).toFixed(1) })
      }
    }, 100);
    this.setState({ interval_fnc: interval_fnc })
  }
  restart(){
    clearTimeout(this.state.interval_fnc)
    this.setState({ count: 0, timer: this.props.MAX_TIMER })
  }
  render() {
    const {count, timer, maxCout} = this.state
    return (
      <div>
        { count == 0 ?
          <h4>Cuantas veces puedes hacer click en el boton en 10 segundos?</h4>
          :
          <h2>{timer}</h2>
        }
        { (maxCout != 0) && <h4>clicks maximos: {maxCout}</h4> }
        <br/>
        <h4>clicks: {count}</h4> <br/>
      <br/>
      <button className="btn btn-info btn-lg"
          onClick={this.onCountUp}>
          { this.finish() ? 'Se acabo' : 'click!'}
        </button> <br/><br/>
        <button className="btn btn-info btn-lg"
                onClick={this.restart}>
          Restart
        </button>
      </div>
    );
  }
}
