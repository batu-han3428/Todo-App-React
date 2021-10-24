//jsx - javascript xml
        
var root = document.getElementById('root');

//temel jsx yazımı
var template = 
<div>
        <h1>Hello World</h1>{/*babel yüklediğimiz için jsx formatında ki söz dizimimizi reacta otomatik çeviriyor. o yüzden altta ki gibi bir yazım yapmamıza gerek kalmadı. terminale npx babel src/app.js --out-file=public/scripts/app.js yazdığında giriş ve çıkış dosyasını belirtiyoruz. çıkış dosyasına react kodlarına dönüştürülmüş haliyle çıkartıyor.  npx babel src/app.js --out-file=public/scripts/app.js --watch yaparsan eğer hep çalışır vaziyette kalacak. anlık değişiklikleri algılayacak.  */}
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius nobis nisi aliquid deleniti. Optio voluptates temporibus ullam fugiat? A vero saepe voluptatibus, sunt ad dolores deserunt at facilis commodi!</div>
        <ul>
                <li>
                1.
                </li>
                <li>
                2.
                </li>
        </ul>
</div>;
//yazım kolaylığı açısından yukarıda ki npx bilgilerini package.json script bölümü içinde verip, o bölümün adlarını terminalde çalıştırdık. mesela npm run babel gibi..




//React bize react ve reactdom isminde iki obje veriyor. bu objeleri console a yazarakta inceleyebilirsin

//React
// var template = React.createElement(
//     'h1',
//     null,//id vermek isteseydik buraya id ismi girecektik
//     'My first react app!'
// );//react objesi sayesinde element oluşturuyoruz.


var template2 = (<div id="product-details">
        <h2 id="product-name">Samsung S9</h2>
        <p id="product-price">price:3000TL</p>
        <p id="product-desc">desrcription:iyi bir telefon</p>
</div>);




//yukarıda ki gibi static veriler yerine daha dinamik hale getirebiliriz.

var Name = "Samsung S9";
var price = 3000;
var desc = "iyi bir telefon";

var template3 = (
        <div id="product-details">
                <h2 id="product-name">{Name}</h2>{/*Jsx expressions */}
                <p id="product-price">{price}TL</p>
                <p id="product-desc">{desc}</p>
        </div>
);




//yukarıda ki gibi ayrı ayrı değişkenler yerine tek bir obje altında da birleştire biliriz



var product = {
        Name : "Samsung S10",
        price : 4000,
        desc : "Çok iyi bir telefon",
        color:['kırmızı','mavi']
}

var paraBirimi = (p) => {return p.price+"TL"}

var template4 = (
        <div id="product-details">
                <h2 id="product-name">{product.Name}</h2>
                <p id="product-price">{paraBirimi(product)}</p>
                <p id="product-desc">{product.desc}</p>
        </div>
);




//Jsx Koşullu ifadeler


function getDescription(description){
        if(description){
                return <p id="product-desc">{description}</p>;
        } 
}

var template5 = (
        <div id="product-details">
                <h2 id="product-name">{product.Name?product.Name:'isimsiz'}</h2>
                {
                        product.price>0 
                                &&
                        <p id="product-price">{paraBirimi(product)}</p>
                }
                {getDescription(product.desc==0?'ücretsiz':product.desc)}
                {product.color.length>0?'birden fazla renk seçeneği mevcut':'renk seçeneği yok'}
        </div>
);



//events(olaylar)
var number =0;     

function addOne(){
        console.log('add one');
}

var minusOne = () => {
        console.log('minus one');
}

var btnOneClassName = "btnRed";

var template6 = (
        <div>
                <h1>Number:{number}</h1>
                <button id="btnPlusOne" className={btnOneClassName} onClick={()=>console.log('add one')}>+1</button>
                <button id="btnMinusOne" className="btnBlue" onClick={minusOne}>-1</button>
        </div>
);

       

//data binding

//yukarıda ki örnekte butonlara basıldığında console a yazı yazdırdık. fakat tanımlamış olduğumuz number değişkeninin verisini artırıp eksilttiğimizde index.html e anlık yansıtmak istediğimizde çalışmaz. bunun için data binding işlemi yapmamız gerekiyor.

var number1 =0;     

function renderApp(){
        var template7 = (
                <div>
                        <h1>Number:{number}</h1>
                        <button id="btnPlusOne" className={btnOneClassName} onClick={()=>{number++; renderApp();}}>+1</button>
                        <button id="btnMinusOne" className="btnBlue" onClick={()=>{number--; renderApp();}}>-1</button>
                </div>
        );

        //ReactDom
        ReactDOM.render(template7, root);//reactDOM sayesinde seçili elementin içine oluşturduğumuz elementi atıyoruz
}

function zaman(){
        var template8 = (
                <div>
                        <h1>Saat: {new Date().toLocaleTimeString()}</h1>
                </div>
        );
        ReactDOM.render(template8, root);
}

renderApp();

setInterval(zaman,1000);