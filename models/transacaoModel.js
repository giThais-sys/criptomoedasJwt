import {Schema,model} from 'mongoose'

const transacaoSchema= new Schema ({
    id: { type: Schema.Types.ObjectId,
        ref: 'Transacao',
        required: true

    },
    carteiraOrigem: {type: Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true 
    },
    carteiraDestino: {type: Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true
    },
    valorTransacao: {
        type: Number,
        required: true  
    },
    tipoTransacao: {
        type: String,
        required: true
    },
    statusTransacao:{
        type: String,
        required: true
    },
    dataTransacao: {
        type: Date,
        required:true
    },
    tipoMoeda: {
        type: String,
        required: true
    },
    detalhesTransacao: {
        type: String,
        required: true
    }    
})

export default model ('Transacao', transacaoSchema)