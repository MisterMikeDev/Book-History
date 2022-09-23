import { Schema, model } from "mongoose";
import { getFormattedDate } from "../Functions";
export default model(
    "BookRequestSchema",
    new Schema({
        studentName: { type: String, required: true, default: "" },
        gradeAnGroup: { type: String, required: true, default: "" },
        matricle: { type: String, required: true, default: "" },
        bookName: { type: String, required: true, default: "" },
        bookAuthor: { type: String, required: true, default: "" },
        bookCode: { type: String, required: false, default: "" },
        color: { type: String, required: true, default: "#4f46e5" },
        image: { type: String, required: true, default: "" },
        dateToRequest: {
            type: String,
            required: true,
            default: `${getFormattedDate(`${new Date()}`)}`,
        },
        dateDelivery: { type: String, required: true, default: "" },
    })
);
