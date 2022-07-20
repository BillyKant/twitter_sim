const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        content: {
            type: String.fromCharCode,
            required: true,
        }
    }
)