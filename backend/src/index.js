//import {createServer} from 'http';
import app from './app';
import initializeDatabase from './db';

const start = async()=>{



  const controller = await initializeDatabase();
  app.get('/', (req, res, next)=>{
    try{
      res.json({message:"Hello"});
    } catch(err){
        next(err);
    }
  });
  









  app.get('/Subscribe', async(req, res, next)=>{
    try{
      const result = await controller.ReadSubscribe();
      res.send(result);
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
      res.send(result);
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
      res.send(result);
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
      res.send(result);
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
      res.send(result);
    } catch(err){
      next(err)
    }
  });

  app.get('/Image/create', async(req, res, next)=>{
    const { image , price , idproduct } = req.query;
    try{
      
      const result = await controller.CreateImage({image , price , idproduct });
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
    const { id, image , price , idproduct } = req.query;
    try {
      const result = await controller.UpdateImage(id, { image , price , idproduct });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });








  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ success: false, message: err.message });
  });

  app.listen(8080, ()=>{console.log("Listening on port 8080")});
  
  

}
start()

