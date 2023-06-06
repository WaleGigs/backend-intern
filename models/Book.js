import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    // distance: {
    //   type: Number,
    //   required: true,
    // },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
   
    maxGroupSize: {
      type: Number,
      required: true,
    },

  

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
