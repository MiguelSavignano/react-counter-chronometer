class Hi extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'timerStart')
    this.state = {
      count: 0,
      timer: 0
    }
  }
  onCountUp(){
    if( this.state.count == 0 )
      this.timerStart()
    this.setState({
      count: this.state.count + 1
    })
  }
  timerStart(){
    var myVar = setInterval((time) => {
      this.setState({
        timer: this.state.timer + 0.1
      })
    }, 100);
    // clearTimeout(myVar);
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
