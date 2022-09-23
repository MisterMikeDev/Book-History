import { Route, BookRequest } from "../Interfaces";
import BookRequestSchema from "../Models/BookRequest";
export const route: Route = {
    path: "/book/new",
    method: "post",
    run: async (req, res) => {
        const request = req.body;
        if (!request) {
            res.json({
                Error: "No se ha proporcionado informacion para la solicitud.",
            });
        }
        const {
            bookAuthor,
            bookName,
            gradeAnGroup,
            matricle,
            studentName,
            bookCode,
            dateToRequest,
            dateDelivery,
            image,
        } = request as BookRequest;
        if (
            !bookAuthor ||
            !bookName ||
            !gradeAnGroup ||
            !matricle ||
            !studentName ||
            !dateToRequest ||
            !dateDelivery ||
            !image
        ) {
            res.json({
                Error: "No se han enviado todas las caracteristicas necesarias para hacer la solicitud",
            });
            return;
        }
        const ColorPalette = [
            "#4f46e5",
            "#5d46d3",
            "#6b46c1",
            "#7650cb",
            "#805ad5",
            "#6f63aa",
            "#5e6b7f",
            "#546074",
            "#4a5568",
        ];
        const randomColor = Math.floor(Math.random() * ColorPalette.length);

        const StudentRequest = (await BookRequestSchema.findOne({
            matricle,
        })) as BookRequest;
        if (StudentRequest) {
            res.json({
                Error: `Este alumno ya tiene el libro "${bookName}" desde el dia "${StudentRequest.dateToRequest}"`,
            });
            return;
        } else {
            await new BookRequestSchema({
                bookAuthor,
                bookName,
                dateDelivery,
                gradeAnGroup,
                matricle,
                studentName,
                bookCode,
                dateToRequest,
                color: ColorPalette[randomColor],
                image: "",
            }).save();
            res.json({
                Success: `Se ha registrado una nueva solicitud del libro "${bookName}" de parte del alumno "${studentName}"`,
            });
        }
    },
};
