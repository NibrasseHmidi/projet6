const fs = require("fs")
module.exports=(req,res,next)=>{

    if(typeof(req.file)==='undefined'|| typeof(req.body)==='undefined'){
        return res.status(400).json({

            errors:"Problem with sending data"
        })    }


        console.log(req.file);
        let name = req.body.name
        let pic = req.file.path

        if(!(req.file.mimetype).includes('jpeg')&& !(req.file.mimetype).includes('jpg')&&!(req.file.mimetype).includes('png')){
fs.unlinkSync(pic)
return res.status(400).json({
    errors:"file not support"
})
        }
if (req.file.size > 1024*1024){
fs.unlinkSync(pic)
return res.status(400).json({
    errors:"file is Too large"
})
} 

if (!name|| !image){
    return res.status(400).json({
        errors:"all field are required"
    })
}
        next()
}