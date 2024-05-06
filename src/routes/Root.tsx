import { 
    Outlet, 
    Link
} from "react-router-dom";

export default function Root() {
    return(
        <>
            <div className="text-center bg-sky-600 text-white text-4xl uppercase py-4 mb-4">
                <Link to={"/"}>Quizz Tabuada</Link>
            </div>
            <Outlet />
        </>
    )
  }