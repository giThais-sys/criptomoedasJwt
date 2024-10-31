import {Schema,model} from 'mongoose'

const usuarioSchema= new Schema ({
    id: {type: Number, required: true},
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    dataCriacaoUsuario: { type: Date, required: true },
    idCarteira: {
        type: Schema.Types.ObjectId,
        ref: 'Carteiras',
        required: true
    },
    permissoes: {type: String, required: true},
    statusConta: {type: Boolean, required: true}

})

export default model ('Usuario', usuarioSchema)