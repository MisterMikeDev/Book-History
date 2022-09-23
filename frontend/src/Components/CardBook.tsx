import { ExampleData } from "../ExampleData";
type Props = {
    image: string;
    bookName: string;
    studentName: string;
    matricle: string;
    color: string;
};
export default function CardBook({
    image,
    bookName,
    studentName,
    matricle,
    color,
}: Props) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure className="mb-2">
                    <img src={image} alt={bookName} className="shadow-2xl h-64 ml-auto mr-auto" />
                </figure>
                <div
                    className={`rounded-lg p-4 flex flex-col`}
                    style={{ backgroundColor: `${color}` }}
                >
                    <div>
                        <h5 className="text-white text-2xl font-bold leading-none">
                            {bookName}
                        </h5>
                        <span className="text-xs text-white leading-none">
                            {studentName}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-lg text-white font-bold italic">
                            {matricle}
                        </div>
                        <button className="grid place-content-center rounded-full bg-purple-900 hover:bg-purple-500 hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
