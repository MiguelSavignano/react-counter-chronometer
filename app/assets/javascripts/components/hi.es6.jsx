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
    this.timerStart()
    this.setState({
      count: this.state.count + 1
    })
  }
  timerStart(){
    var myVar = setInterval((time) => {
      // console.log(time)
      this.setState({
        timer: this.state.timer + 0.01
      })
    }, 1000);
    // clearTimeout(myVar);
  }
  render() {
    const {count, timer} = this.state
    return (
      <div>
        timer  : {timer}
        clicks: {count} <br/>
        <button className="btn btn-info"
          onClick={this.onCountUp.bind(this)}>
          click
        </button>
      </div>
    );
  }
}
