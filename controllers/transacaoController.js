import Transacao from '../models/transacaoModel.js'

export const store = async (req, res)=> {
    try {
        const transacao= await Transacao.create(req.body)
        return res.status(201).json(transacao)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const transacoes= await Transacao.find().exec()
        return res.status(200).json(transacoes)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const show = async (req,res)=> {
    try {
        const transacao= await Transacao.findById(req.params.id).exec()
        return res.status(200).json(transacao)
    }catch (error){
       return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const transacao= await Transacao.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(transacao)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const transacao= await Transacao.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(transacao)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}