const postModel =  require('../Model/model.post')


let postRead = async (req,res)=>{
    try
    {
        const post = await postModel.find().sort({Date: -1});
        res.status(200).send({status: 1 , post})
    }
    catch(err)
    {
        res.status(500).send({status:0,msg:"error while fetching",err})
    }
}

let postReadById = async (req,res)=>{
    try{
        const post = await postModel.findById(req.params.id);
        if(!post){
            return res.status(404).send({mes:"NO POST FOUND"})
        }
        res.status(200).send({status: 1, post})
     }
    catch(err){
        res.status(500).send({status:0 , msg:"error while reading the doc",err});
    }
}

let deletePost = async (req,res)=> {
    try{
        const post = await postModel.findByIdAndDelete(req.params.id);
        if(!post){
           return res.status(404).send({mes:"NO POST DELTED"})
        }
        res.status(200).send({status: 1, post})
     }
    catch(err){
        res.status(500).send({status:0 , msg:"error while deleting the doc",err})
    }
}


module.exports = {postRead,postReadById,deletePost};