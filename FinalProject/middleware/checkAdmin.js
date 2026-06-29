export default async(req, res, next)=>{

    try {
        if(!req.user){
            return res.status(404).send({message: "User didn't find"})
        }

        if(req.user.role !== "admin"){
            return res.status(500).json({message: "U do not have a permission"})
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message})
        
    }

}