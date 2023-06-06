import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      
    },
    userEmail: {
      type: String,
      required: true,
    },
    firstName: {
        type: String,
        required: true,
      },
      eventName: {
        type: String,
        required: true,
      },
      guestSize: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      time :
       {
         type : String,
         },
    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "booking",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
// .getTimezoneOffset()