//formlar dersine kadar olan derslerin hepsi ornekler.js dosyasının içinde.

//cons-let dersi const-let.js de. arrow-functions dersi arrow-functions.js de. package.json da script bölümü içinde ki babel kısmının giriş dosyasını arrow-functions.js olarak değiştirdik ki arrow-functions.js ekranda gözüksün

        //formlar, diziler
        
        //https://tr.reactjs.org/docs/events.html  sitesinde desteklenen olaylar başlığı altında tüm olay çeşitlerini görebiliriz. mesela formlara özel olaylar vb.

        const root = document.getElementById('root');

        const app = {
                title:"Todo Application",
                description: "Lorem, ipsum dolor.",
                items:[]
        };


        const onFormSubmit = () => {

                let item = event.target.elements.txtItem.value;//elements ile formun içinde ki elementlere ulaşabiliyoruz

                if(item){
                        app.items.push(item);
                        event.target.elements.txtItem.value='';
                        render();
                }

                event.preventDefault();
        }

        const clearItems=()=>{
                app.items = [];
                render();
        }

        const render=()=>{

                let template = (
                        <div>
                                <h1>{app.title}</h1>
                                <div>{app.description}</div>
                                <ul>
                                        {
                                                app.items.map((item, index)=><li key={index}>{item}</li>)
                                        }
                                </ul>
                                <p>
                                        <button onClick={clearItems}>Clear Items</button>
                                </p>
                                <p>{app.items.length}</p>
                                <form onSubmit={onFormSubmit}>
                                        <input type="text" name="txtItem"/>
                                        <button type="submit">Add Item</button>
                                </form>
                        </div>
                );
        
                ReactDOM.render(template,root);
        }
        
        render();