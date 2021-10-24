class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            marka:'opel',
            model:'astra',
            renk:'mavi'
        }
    //  this.arabaDegis = this.arabaDegis.bind(this);
    }

    arabaDegis(){
        this.setState({
            marka:'Volkswagen',
            model:'Golf',
            renk:'Beyaz'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.marka}</h1>
                <h3>{this.state.model}</h3>
                <b>Renk:{this.state.renk}</b><br/><br/>
                <button onClick={this.arabaDegis.bind(this)}>Araba Değiş</button>
            </div>
        )
    }
}

ReactDOM.render(<Car/>,document.getElementById('root'));