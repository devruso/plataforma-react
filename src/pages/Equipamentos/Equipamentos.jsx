import { useForm } from "react-hook-form"

export function Equipamentos(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    function registraEquipamento(equipamento){
        console.log(equipamento)
    }
    return(
    <form onSubmit={handleSubmit(registraEquipamento)}>
        <label for="marca">Marca</label>
        <br />
        <input type="text" id="marca" {...register("marca", {required:true, maxLength:255})} />
        {errors.marca && <span className="invalid">Digite uma marca válida!</span>}
        <br />
        <label for="serie">Serie</label>
        <br />
        <input type="number" id="serie" {...register("serie", {required:true, maxLength:255})}/>
        {errors.serie && <span className="invalid">Digite uma serie válida!</span>}
        <br />
        <label for="problema">Problema</label>
        <br />
        <input type="text" id="problema" {...register("problema", {required:true, maxLength:255})}/>
        {errors.problema && <span className="invalid">Digite um problema válido!</span>}
        <br />
        <label for="dataEntrada">Data de Entrada</label>
        <br />
        <input type="date" id="dataEntrada" {...register("dataEntrada", {required:true, maxLength:255})}/>
        <br />
        {errors.dataEntrada && <span className="invalid">Digite uma data válida!</span>}
        <label for="dataEntrega">Previsão de entrega</label>
        <br />
        <input type="date" id="dataEntrega" {...register("dataEntrega", {required:true, maxLength:255})}/>
        <br />
        {errors.dataEntrega && <span className="invalid">Digite um nome válido!</span>}
        <br />
        <label for="Status">Status</label>
        <select name="status" id="status" {...register("status", {required:true, maxLength:255})}>
            <option value=""selected disabled></option>
            <option value="1">Entregue</option>
            <option value="2">A caminho</option>
            <option value="3">Nao enviado</option>
        </select>
        {errors.status && <span className="invalid">Selecione uma opção válida!</span>}
        <button type="submit">Enviar</button>
    </form>
    )
}