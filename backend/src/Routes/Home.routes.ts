import { Route } from "../Interfaces";
export const route: Route = {
    path: "/",
    method: "get",
    run: (_req, res) => {
        const defaultImageUrl =
            "https://media.istockphoto.com/vectors/question-mark-icon-flat-vector-illustration-design-vector-id1162198273?k=20&m=1162198273&s=612x612&w=0&h=s_5DDSXgMDkGq0sVqYpgD2AL1CuB9oK5UtmvMq6XBo8=";
        res.json({
            name: "Book History",
            developer: "https://www.github.com/MisterMikeDev",
            version: "0.0.1",
            stack: "MERN (MongoDB, Express, React, NodeJS)",
            school: "Colegio de Bachilleres del Estado de Jalisco Plantel 7°",
            devThings: [
                "HTML5",
                "CSS3",
                "SASS",
                "JavaScript",
                "TypeScript",
                "ReactJS",
                "Express",
                "MongoDB",
                "Vite",
                "Yarn",
            ],
            teamMembers: [
                {
                    name: "Diego Emmanuel Rodriguez Ruvalcaba",
                    matricule: "P007192106",
                    imageURL: process.env.photoDiego || defaultImageUrl,
                    age: 18,
                },
                {
                    name: "Noe Yahir Perez Miranda",
                    matricule: "P007202113",
                    imageURL: process.env.photoNoe || defaultImageUrl,
                    age: 18,
                },
                {
                    name: "Williams Jair Cherres Rueda",
                    matricule: "G007212032",
                    imageURL: process.env.photoWilliams || defaultImageUrl,
                    age: 17,
                },
                {
                    name: "Fernando Perez Godinez",
                    matricle: "P007202084",
                    imageURL: process.env.photoFernando || defaultImageUrl,
                    age: 17,
                }
            ],
        });
    },
};
