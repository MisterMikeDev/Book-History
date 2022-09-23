import Card from "../Components/CardBook";
import { ExampleData } from "../ExampleData";
type Props = {
    _id: {
        $oid: string;
    };
    image: string;
    bookName: string;
    studentName: string;
    matricle: string;
    color: string;
};
export default function RequestList() {
    return (
            <div className="flex items-center bg-indigo-100 w-full">
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                        <h1 className="text-center text-3xl lg:text-4xl text-gray-700 font-extrabold">
                            Book Requests
                        </h1>
                    </div>
                    {ExampleData.length === 0
                        ? <h1 className="text-3xl font-bold pt-10 mx-auto">No hay ninguna peticion...</h1>
                        : ExampleData.map(
                              ({
                                  _id,
                                  image,
                                  bookName,
                                  studentName,
                                  matricle,
                                  color,
                              }: Props) => {
                                  return (
                                      <Card
                                          key={_id.$oid}
                                          image={image}
                                          bookName={bookName}
                                          studentName={studentName}
                                          matricle={matricle}
                                          color={color}
                                      />
                                  );
                              }
                          )}
                </div>
            </div>
    );
}

/*

            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Get the header you needed for your awesome website.
                </h1>
                <button className="transition hover:bg-indigo-800 bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
                    Get Started
                </button>
            </div>
*/
