import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas";
import {pumaArr, PumaItem} from "./Puma";
import {nikeArr, NikeItem} from "./Nike";


export type CrossModelsType = {
  [model: string] : AdidasItem[] | PumaItem[] | NikeItem[]
}

const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr,
    nike: nikeArr
}

export const Model = () => {
    const {model, id} = useParams();
    console.log(model);

    const currentModel =   model && crossModels[model]
      ?  crossModels[model].find(el => el.id === Number(id))
      : null

    return (
        <div style={{textAlign: "center"}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width:'300px', height: 'auto'}}/>

                    </>
                : <h2 style={{marginTop: "50px"}}>{`Модель отсутствует`}</h2>
            }
        </div>
    )

};

