const Items = require('../models/product')

//sort,filter,select,pagination



const getAllProducts = async(req,res)=>{
  const queryObj ={}
  let page=Number(req.query.page) || 1;
  let limit =Number( req.query.limit) || 3
  
  let skip = ( page-1)*limit
  let apiData = Items.find(req.query).skip(skip).limit(limit);
  const {sort,select,title} = req.query;

  if(sort){
    queryObj.sort = sort.replace(',',' ')
    //console.log(queryObj);
         apiData= apiData.sort(queryObj.sort);
  }
 if(select){
  queryObj.select = select.replace(',',' ');
  apiData=apiData.select(queryObj.select);
 }
 if(title){
   queryObj.title = {title:{$regex:title,$options:'i'}}
   apiData=apiData.find(queryObj.title)
 }
  
  const items = await apiData;
  res.status(200).json({items})
}

const  getVegetables = async(req,res)=>{
    res.status(200).json({msg:"Get Vegetables only"})
}
module.exports ={ getAllProducts, getVegetables}