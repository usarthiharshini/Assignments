const getAllProducts = async(req,res)=>{
  res.status(200).json({msg:"Get all Items"})
}

const  getVegetables = async(req,res)=>{
    res.status(200).json({msg:"Get Vegetables only"})
}
module.exports ={ getAllProducts, getVegetables}