import { useApi } from "../Hooks/useApi";
import LoadingComponent from "./LoadingComponent";
export default function App() {
    const { response, isLoading } = useApi();
    return (
        <>
            {isLoading ? (
                <LoadingComponent />
            ) : (
                <pre>{JSON.stringify(response)}</pre>
            )}
        </>
    );
}
