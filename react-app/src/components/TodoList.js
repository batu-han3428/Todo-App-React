import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) =>{
    return (
        <div className="col-md-4 mx-auto">
            <ul className="list-group">
                {
                    props.items.map((item, index)=><TodoItem deleteItem={props.deleteItem} key={index} item={item}/>)
                }
            </ul> 
            {props.items.length > 0 ?  
                <p>
                    <button className="btn btn-outline-danger mt-3 w-100" onClick={props.clearItems}>Clear Items</button>
                </p>
                :
                <p className="alert alert-warning">
                    Başlamak için bir eleman ekle..
                </p>
            }
        </div>
    );
}


// class TodoList extends React.Component{
//     render(){
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.items.map((item, index)=><TodoItem deleteItem={this.props.deleteItem} key={index} item={item}/>)
//                     }
//                 </ul>  
//                 <p>
//                     <button onClick={this.props.clearItems}>Clear Items</button>
//                 </p>
//                 <p>0</p>
//             </div>
//         );
//     }
// }


export default TodoList;