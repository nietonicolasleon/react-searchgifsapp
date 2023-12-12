import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () =>{

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);

    // Handle Add
    /*
    const handleAdd = () =>{
        setCategories( cats => [...cats, 'item']);
    }
    */

    return(
        <>
            <h2 className="title">Épica Aplicación de Búsqueda de GIFs con React</h2>
            <div className="instructions">
                <p className="i-items">Ingrese en la barra de búsqueda el nombre de una serie o tópico de interés.</p>
                <p className="i-items">Tras una breve carga, aparecerán alrededor de 10 (diez) GIFs relacionados a lo ingresado.</p>
            </div>
            <AddCategory setCategories={setCategories} />
            <br/>
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;