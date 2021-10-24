import React from 'react';

const TodoItem = (props) => {
    return(
        <li className="list-group-item">
            {props.item}
            <button className="btn-close float-end" onClick={()=>props.deleteItem(props.item)}></button>
        </li>
    )
}

// class TodoItem extends React.Component{
//     render(){
//         return(
//             <li>
//                 {this.props.item}
//                 <button onClick={()=>this.props.deleteItem(this.props.item)}>X</button>
//             </li>
//         )
//     }
// }

export default TodoItem;