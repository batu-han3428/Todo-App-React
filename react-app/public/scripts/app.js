"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this;

    _classCallCheck(this, TodoApp);

    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      title: "Todo Application",
      description: "Lorem, ipsum dolor.",
      items: []
    };
    return _this;
  } //https://tr.reactjs.org/docs/state-and-lifecycle.html
  //Yaşam döngüsü


  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Componentin oluşturulma aşamasında çalışır
      console.log('component oluşturuldu');
      var json = localStorage.getItem('items');
      var items = JSON.parse(json);

      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      //prevState, state in güncellenmeden önce ki hali. Propsta, propsların güncellenmeden önce ki hali
      console.log('component güncellendiğinde çalışır');

      if (prevState.items.length !== this.state.items.length) {
        //state de değişiklik olup olmadığını sorguladık
        var json = JSON.stringify(this.state.items);
        localStorage.setItem('items', json);
      }
    } //componentin propsları veya state i değiştiğinde çalışır

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('component silindiğinde çalışır'); //sayfalar arası geçişte işlemler yapılabilir
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return 'bu alan boş geçilemez';
      } else if (this.state.items.indexOf(item) > -1) {
        return 'bu değer zaten kayıtlı';
      } else {
        this.setState({
          items: this.state.items.concat(item)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // const app = {
      //     title:"Todo Application",
      //     description: "Lorem, ipsum dolor.",
      //     items:['1','2']
      // }; // burada ki app yerine state kullanacağız. çünkü burada app üzerinde bir değişiklik olduğunda her defasında render methodunu çalıştırmamız gerekiyor. fakat state de öyle bir şey yapmamıza gerek kalmıyor
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: this.state.title,
        dest: this.state.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        deleteItem: this.deleteItem,
        clearItems: this.clearItems,
        items: this.state.items
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(React.Component); //Ana Component
// Stateless Functional Components
//eğer state ve yaşam döngüsü methodlarını kullanmayacaksak, alttarafı basit bir jsx göndereceksek class yerine basit bir fonksiyon oluşturabiliriz.


var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("div", null, props.dest));
}; // class Header extends React.Component{//baş harfi büyük olmak zorunda
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>{/*react.componentin içinde props propunu kullanarak gelen veriye ulaşabiliriz. console.log dan react.componenti yazdırdığında propsun react.componentin içinde tanımlandığını görebilirsin */}
//                 <div>{this.props.dest}</div>
//             </div>
//         );
//     }
// }//header componentimiz


var TodoList = function TodoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      deleteItem: props.deleteItem,
      key: index,
      item: item
    });
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.clearItems
  }, "Clear Items")), /*#__PURE__*/React.createElement("p", null, "0"));
}; // class TodoList extends React.Component{
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


var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", null, props.item, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.deleteItem(props.item);
    }
  }, "X"));
}; // class TodoItem extends React.Component{
//     render(){
//         return(
//             <li>
//                 {this.props.item}
//                 <button onClick={()=>this.props.deleteItem(this.props.item)}>X</button>
//             </li>
//         )
//     }
// }


var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);

  var _super2 = _createSuper(Action);

  function Action(props) {
    var _this2;

    _classCallCheck(this, Action);

    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ''
    };
    return _this2;
  }

  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      var error = this.props.addItem(item);
      this.setState({
        error: error
      });
      e.target.elements.txtItem.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), document.getElementById('root'));
