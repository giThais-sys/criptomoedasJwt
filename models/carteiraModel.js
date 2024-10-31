import {Schema,model} from 'mongoose'

const carteiraSchema= new Schema ({
    id: { type: Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true 
    },
      usuarioId: { type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true 
    },
        saldo: {type: Number, required: true},
        tipo: { type: String, required: true },
        dataCriacaoCarteira: { type: Date, required: true },
    });

export default model ('Carteira', carteiraSchema)