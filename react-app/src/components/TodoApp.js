import React from "react";
import Header from './Header';
import TodoList from './TodoList';
import Action from './Action';


export default class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            title:"Todo Application",
            description: "React ile yapıldı.",
            items:[]
        };
    }

    //https://tr.reactjs.org/docs/state-and-lifecycle.html
    //Yaşam döngüsü

    componentDidMount(){//Componentin oluşturulma aşamasında çalışır
        console.log('component oluşturuldu');
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        if(items){
            this.setState({
                items:items
            })
        }
    }

    componentDidUpdate(prevProps, prevState){//prevState, state in güncellenmeden önce ki hali. Propsta, propsların güncellenmeden önce ki hali
        console.log('component güncellendiğinde çalışır');
        if(prevState.items.length !== this.state.items.length){//state de değişiklik olup olmadığını sorguladık
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items',json);
        }
    }//componentin propsları veya state i değiştiğinde çalışır

    componentWillUnmount(){
        console.log('component silindiğinde çalışır');//sayfalar arası geçişte işlemler yapılabilir
    }

    deleteItem(item){

        this.setState((prevState)=>{
            const arr = prevState.items.filter((i)=>{
                return item != i
            })
            return {
                items:arr
            }
        })
    }

    clearItems(){
        this.setState({
            items:[]
        })
    }

    addItem(item){
        if(!item){
            return 'bu alan boş geçilemez';
        }else if(this.state.items.indexOf(item)>-1){
            return 'bu değer zaten kayıtlı'
        }else{
            this.setState({
                items:this.state.items.concat(item)
            })
        }  
    }

    render(){
        // const app = {
        //     title:"Todo Application",
        //     description: "Lorem, ipsum dolor.",
        //     items:['1','2']
        // }; // burada ki app yerine state kullanacağız. çünkü burada app üzerinde bir değişiklik olduğunda her defasında render methodunu çalıştırmamız gerekiyor. fakat state de öyle bir şey yapmamıza gerek kalmıyor
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5">
                        <div class="card text-center">
                            <div class="card-header">
                                <Header title={this.state.title} dest={this.state.description}/>
                            </div>
                            <div class="card-body">
                                <TodoList deleteItem={this.deleteItem} clearItems={this.clearItems} items={this.state.items}/>
                            </div>
                            <div class="card-footer text-muted">
                                <Action addItem={this.addItem}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}//Ana Component