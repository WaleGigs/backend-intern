import Book from "../models/Book.js"
 export const createEvent = async (req,res)=>{
    const newEvent = new Book(req.body)
    try {
        const savedEvent = await newEvent.save()
        res.status(200).json({success:true, message:'Successfully created', data:savedEvent})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:'Failed to created, Try again'})
    }
 }

 export const updateEvent = async (req,res) =>{
    const id = req.params.id
    try {
        const updatedEvent = await Book.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({success:true, message:'Successfully updated', data:updatedEvent})

    } catch (error) {
        res.status(500).json({success:false, message:'fail to update'})
    }
 }
 
 export const deleteEvent = async (req,res) =>{
    const id = req.params.id
    try {
        await Book.findByIdAndDelete(id)
        res.status(200).json({success:true, message:'Successfully deleted'})

    } catch (error) {
        res.status(500).json({success:false, message:'fail to delete'})
    }
 }
 export const getSingleEvent = async (req,res) =>{
    const id = req.params.id
    try {
      const book =  await Book.findById(id)
        res.status(200).json({success:true, message:'Successfully gotten', data:book})

    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    }
 }
  export const getAllEvent = async (req,res) =>{
    const page = parseInt(req.query.page)
    console.log(page)
    try {
        const books =  await Book.find({}).skip(page * 8 ).limit(8)
        res.status(200).json({success:true, counts:books.length, message:'Successful', data:books})
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    }
 }
 export const getEventBySearch = async(req,res) =>{
    const city = new RegExp(req.query.city, 'i')
    // const maxGroupSize = parseInt(req.query.maxGroupSize)
    try {
        const books = await Book.find()
        res.status(200).json({success:true,  message:'Successful', data:books})
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    }
 }
 export const getFeaturedEvent = async (req,res) =>{
    try {
        const books =  await Book.find({featured:true}).limit(8)
        res.status(200).json({success:true, message:'Successful', data:books})
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    }
 }
 export const getEventCount = async (req,res) =>{
    try {
        const eventCount = await Book.estimatedDocumentCount()
        res.status(200).json({success:true,  data:eventCount})
    } catch (error) {
        res.status(404).json({success:false, message:'fail to fetch'})
        
    }
 }