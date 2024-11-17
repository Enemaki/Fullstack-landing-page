import { Link } from "react-router-dom"
export default function LoginFooter() {
    return (
        <div className="p-4 flex flex-col items-center">
           <p className="text-grey-500 text-sm opacity-60">Already you new here? 
            <Link to="/" className="text-sm text-blue-700 font-semibold px-2">Create Account</Link></p>
        </div>
    )
}