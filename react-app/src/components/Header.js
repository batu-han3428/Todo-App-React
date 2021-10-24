import React from 'react';

// Stateless Functional Components
//eğer state ve yaşam döngüsü methodlarını kullanmayacaksak, alttarafı basit bir jsx göndereceksek class yerine basit bir fonksiyon oluşturabiliriz.

const Header = (props) => {
    return (
            <div>
                <h1>{props.title}</h1>
                <div>{props.dest}</div>
            </div>
        );
}


// class Header extends React.Component{//baş harfi büyük olmak zorunda
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>{/*react.componentin içinde props propunu kullanarak gelen veriye ulaşabiliriz. console.log dan react.componenti yazdırdığında propsun react.componentin içinde tanımlandığını görebilirsin */}
//                 <div>{this.props.dest}</div>
//             </div>
//         );
//     }
// }//header componentimiz

export default Header;