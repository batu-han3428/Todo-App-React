import React from 'react';


export default class Action extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state={
            error:''
        }
    }
    onFormSubmit(e){
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        const error = this.props.addItem(item);
        this.setState({
            error:error
        })
        e.target.elements.txtItem.value='';
    }
    render(){
        return (
            <div>        
                {this.state.error && <p className="badge rounded-pill bg-danger">{this.state.error}</p>}     
                <form onSubmit={this.onFormSubmit}>
                    <div class="input-group mb-3">
                        <input placeholder="Ekle.." className="form-control" type="text" name="txtItem"/>
                        <button class="btn btn-outline-secondary" type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        );
    }
}