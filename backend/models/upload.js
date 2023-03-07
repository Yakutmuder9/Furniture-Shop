import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]
}, { timestamps: true });


const singleFileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const SingleFile =  mongoose.model('SingleFile', singleFileSchema);
export const MultipleFile =  mongoose.model('MultipleFile', mulitipleFileSchema);