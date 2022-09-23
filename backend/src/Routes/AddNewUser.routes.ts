import { ErrorJSON } from "../Functions";
import {
    Route,
    UserInformation as UserInformationInterface,
} from "../Interfaces";
import UserInformation from "../Models/UserInformation";
export const route: Route = {
    path: "/user/new",
    method: "post",
    run: async (req, res) => {
        const request = req.body;
        if (!request)
            res.json(
                ErrorJSON(
                    "No se ha mandado informacion para la solicitud de un nuevo usuario."
                )
            );

        const {
            Username,
            Password,
            ControlNumber,
            FullName,
            SocialNumber,
            Address,
            Email,
            Escolarity,
            Titles,
            IngressDate,
            PhoneNumber,
            Workstation,
            Timetable,
            EmergencyContact,
        } = req.body as UserInformationInterface;
        if (
            !Username ||
            !Password ||
            !ControlNumber ||
            !FullName ||
            !SocialNumber ||
            !Address ||
            !Email ||
            !Escolarity ||
            !Titles ||
            !IngressDate ||
            !PhoneNumber ||
            !Workstation ||
            !Timetable ||
            !EmergencyContact
        )
            res.json(
                ErrorJSON(
                    "Alguna de las opciones requeridas no han sido proporcionadas."
                )
            );

        if (await UserInformation.findOne({ FullName }))
            res.json(ErrorJSON("El nombre ingresado ya ha sido registrado."));
        if (await UserInformation.findOne({ ControlNumber }))
            res.json(ErrorJSON("El numero de control ya ha sido registrado."));
        if (await UserInformation.findOne({ SocialNumber }))
            res.json(ErrorJSON("El numero de serguro social ya ha sido registrado."));
        if (await UserInformation.findOne({ Email }))
            res.json(ErrorJSON("El correo electronico ya ha sido registrado."));

        res.json({
            Data: "Fergod",
        });
    },
};
