export const test = async (req, res) =>{
   try{
       res.json({text:'hello word'})
   }  catch (e) {
       console.log(e)
   }
}