class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            number:0
        }
    }

    addOne(){
        // this.setState({
        //     number:this.state.number+1
        // })
        this.setState((prevState)=>{
            return{
                number:prevState.number+1
            }
        })
    }

    minusOne(){
        this.setState({
            number:this.state.number-1
        })
    }

    reset(){
        this.setState({number:0})
    }

    render(){
        return(
            <div>
                <h1>Number:{this.state.number}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>,document.getElementById('root'));