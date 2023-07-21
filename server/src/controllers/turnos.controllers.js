import turnosModel from '../models/turnos.model.js'


export const getTurnos = async (req, res) => {
    try {
        const turnos = await turnosModel.find();
    res.status(200).json(turnos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    

}

export const createTurnos=async(req,res)=>{
    const{date,price,user}=req.body
    try {
        const newTurnos=new turnosModel({
            date,
            price,
            user
        })
        await newTurnos.save()
        res.status(201).json(newTurnos)
    } catch (error) {
        res.status(500).json({message:error.message})
    
    }
}

export const getTurnosById=async(req,res)=>{
    const{id}=req.params
    try {
    const turno = await turnosModel.findById(id)
    if(turno){
        res.status(200).json(turno)
    }else{
        res.status(404).json({message:"No existe el turno"})
    } 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateTurnos=async(req,res)=>{
    const{id}=req.params
    const{date,price,user}=req.body
    try {
        const turno=await turnosModel.findByIdAndUpdate(id,{
            date,
            price,
            user
        })
        res.status(200).json(turno)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

export const deleteTurnos=async(req,res)=>{
    const{id}=req.params
    try {
        await turnosModel.findByIdAndDelete(id)
        res.status(200).json({message:"Turno eliminado"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }


}