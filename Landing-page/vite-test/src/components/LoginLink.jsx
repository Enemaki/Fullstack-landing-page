export default function LoginLink() {

    return (
        <div className="flex flex-col gap-3 w-11/12">
            <div className="flex items-center">
                <hr className="w-1/3"/>
                <p className="opacity-50 w-1/3 text-center">Or</p>
                <hr className="w-1/3"/>
            </div>
            <button className="border-2 border-grey-300 w-full rounded-md flex p-4 gap-x-2 justify-center
            "><img src="./googleicon.png" alt="google icon" /> Continue with Google</button>
            <button className="border-2 border-grey-300 rounded-md flex p-4 gap-x-2 justify-center
            "><img src="./twitter-icon.png" alt="" /> Continue with Twitter</button>
        </div>
    )
}