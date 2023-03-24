import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form"

export function Herois(){
    const {register, handleSubmit} = useForm();
    const [heroi, setHeroi] = useState();

    function onSubmitHeroi(heroi) {
       setHeroi(heroi);
    }
    return(
        <div className="herois">
            <form action="" onSubmit={handleSubmit(onSubmitHeroi)}>
                <label htmlFor="nome" >Nome do heroi</label><br />
                <input type="text" id="nome" {...register("nome")} />
                <label htmlFor="poder">Poder</label><br />
                <input type="text" id="poder" {...register("poder")}/>
                <label htmlFor="fraqueza">Fraqueza</label> <br />
                <input type="text" id="fraqueza" {...register("fraqueza")}/>
                <label htmlFor="historia">Historia</label> <br />
                <textarea id="historia" cols="23" {...register("historia")}></textarea>
                <button type="submit">
                    Cadastrar heroi
                </button>
            </form>

            {   
                heroi && 
                <Alert variant="success">
                  Nome:{heroi.nome} <br/>
                  Poder: {heroi.poder} <br/>
                  Fraqueza: {heroi.fraqueza} <br/>
                  Historia: {heroi.fraqueza}<br/>
                  </Alert>
            }
        </div>
    )
}