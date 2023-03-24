import { useForm } from "react-hook-form"

export function Herois(){
    const {register, handleSubmit} = useForm();

    function onSubmitHeroi(heroi) {
        let mensagem = `
            Nome: ${heroi.nome}
            Poder: ${heroi.poder}
            Fraqueza: ${heroi.fraqueza}
            Historia: ${heroi.historia}
                    `
            alert(mensagem);
    }
    return(
        <div className="herois">
            <form action="" onSubmit={handleSubmit(onSubmitHeroi)}>
                <label htmlFor="nome" >Nome do heroi</label>
                <input type="text" id="nome" {...register("nome")} />
                <label htmlFor="poder">Poder</label>
                <input type="text" id="poder" {...register("poder")}/>
                <label htmlFor="fraqueza">Fraqueza</label>
                <input type="text" id="fraqueza" {...register("fraqueza")}/>
                <label htmlFor="historia">Historia</label>
                <textarea id="historia" cols="23" {...register("historia")}></textarea>
                <button type="submit">
                    Cadastrar heroi
                </button>
            </form>
        </div>
    )
}