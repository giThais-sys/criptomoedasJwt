import Usuario from '../models/usuarioModel.js'
 
export const store= async (req, res)=> {
    try {
        const usuario= await Usuario.create(req.body)
        return res.status(201).json(usuario)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}

export const index = async (req,res)=> {
    try {
        const usuarios= await Usuario.find().exec()
        return res.status(200).json(usuarios)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const usuario= await Usuario.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(usuario)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const usuario= await Usuario.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(usuario)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

