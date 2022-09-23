import { Schema, model, AnyArray } from "mongoose";
import { UserInformation } from "../Interfaces";
export default model(
    "UserInformationSchema",
    new Schema<UserInformation>({
        Username: { type: String, required: true, default: "" },
        Password: { type: String, required: true, default: "" },
        ControlNumber: { type: Number, required: true, default: 0 },
        FullName: { type: String, required: true, default: "" },
        SocialNumber: { type: Number, required: true, default: 0 },
        Address: { type: String, required: true, default: "" },
        Email: { type: String, required: true, default: "" },
        Escolarity: { type: Array, required: true, default: [] },
        Titles: { type: Array, required: true, default: [] },
        IngressDate: { type: String, required: true, default: "" },
        PhoneNumber: { type: Number, required: true, default: 0 },
        Workstation: { type: String, required: true, default: "Empleado" },
        Timetable: { type: Object, required: true, default: {} },
        EmergencyContact: { type: String, required: true, default: "" },
    })
);
