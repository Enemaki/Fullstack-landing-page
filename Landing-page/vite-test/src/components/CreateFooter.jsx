import { Link } from "react-router-dom"
export default function CreateFooter() {
    return (
        <div className="p-4 flex flex-col items-center w-11/12 gap-3">
            <div className="flex items-center">
                <hr className="w-1/3"/>
                <p className="opacity-50 w-1/3 text-center">Or</p>
                <hr className="w-1/3"/>
            </div>
           <p>Already here? <Link to="/login" className="text-sm text-blue-500 font-semibold">Login</Link> </p>
        </div>
    )
}