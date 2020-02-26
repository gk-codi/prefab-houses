//import {createServer} from 'http';
import app from './app';
import initializeDatabase from './db';
import multer from 'multer'
import path from 'path'





const multerStorage = multer.diskStorage({
  destination: path.join( __dirname, '../public/upload'),
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file
    const date = Date.now()
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}` 
    cb(null, filename)
  }
}) 
const upload = multer({ storage: multerStorage  })

 

const start = async()=>{



  const controller = await initializeDatabase();
  app.get('/', (req, res, next)=>{
    try{
      res.json({message:"Hello"});
    } catch(err){
        next(err);
    }
  });
  


  
  app.post('/auth', async (req, res, next) => {
    const { username, password } = req.body;
    /* var username = req.body.username;
	  var password = req.body.password; */
    /* const { username , password } = req.query; */
    try{
      const result = await controller.CheckAdmin({username , password });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });


  





    

  app.get('/Subscribe', async(req, res, next)=>{
    try{
      const result = await controller.ReadSubscribe();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get('/Subscribe/create', async(req, res, next)=>{
    const { location , email } = req.query;
    try{
      const result = await controller.CreateSubscribe({location , email });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/Subscribe/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteSubscribe(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/Subscribe/update", async (req, res, next) => {
    const { id, location, email } = req.query;
    try {
      const result = await controller.UpdateSubscribe(id, { location, email });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });












  app.get('/Admin', async(req, res, next)=>{
    try{
      const result = await controller.ReadAdmin();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get('/Admin/create', async(req, res, next)=>{
    const { username , password } = req.query;
    try{
      const result = await controller.CreateAdmin({username , password });
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/Admin/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteAdmin(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/Admin/update", async (req, res, next) => {
    const { id, username, password } = req.query;
    try {
      const result = await controller.UpdateAdmin(id, { username, password });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });










  app.get('/Product', async(req, res, next)=>{
    try{
      const result = await controller.ReadProduct();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get('/Product/create', async(req, res, next)=>{
    const { typename } = req.query;
    try{
      const result = await controller.CreateProduct({typename});
      res.json({success : true , result});
    } catch(err){
      next(err)
    } 
  });

  app.get("/Product/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteProduct(id);
      res.json({ success: true, result });
    } catch (err) {
     // console.log(err)
      next(err);
    }
  });

  app.get("/Product/update", async (req, res, next) => {
    const { id, typename} = req.query;
    try {
      const result = await controller.UpdateProduct(id, { typename});
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });







  app.get('/Color', async(req, res, next)=>{
    try{
      const result = await controller.ReadColor();
      res.json({success : true , result});
    } catch(err){
      next(err)
    }
  });

  app.get("/Color/update", async (req, res, next) => {
    const { type, color } = req.query;
    try {
      const result = await controller.UpdateColor({ type, color });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });










  app.get('/Image', async(req, res, next)=>{
    try{
      const result = await controller.ReadImage();
      const new_result = result.map(image => {
        return {...image, Image: `http://localhost:8080/upload/${image.Image}` }
      })
      res.json({success : true , result: new_result});
    } catch(err){
      next(err)
    }
  });

  app.post('/Image/create',upload.single('image') ,async(req, res, next)=>{
    const {  price , idproduct ,des , title} = req.query;
    const image = req.file&&req.file.filename;
    console.log(price , idproduct ,des , title, image)
    try{
      
      const result = await controller.CreateImage({image , price , idproduct ,des ,title});
      res.json({success : true , result});
    } catch(err){
      console.log(err)
      next(err)
    } 
  });

  app.get("/Image/delete", async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await controller.DeleteImage(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/Image/update", async (req, res, next) => {
    const { id, image , price , idproduct , des , title} = req.query;
    try {
      const result = await controller.UpdateImage(id, { image , price , idproduct , des , title});
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });



  /* app.post("/image_model",upload.single('image'), async (req, res, next)=>{
    console.log(req.file)
    console.log(req.body)
    res.json({message:'ok'})
  }) */






  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ success: false, message: err.message });
  });

  app.listen(8080, ()=>{console.log("Listening on port 8080")});
  
  

}
start()

