export default function Alerts(props) {
    
    return (
        <section className={props.show ? "flex flex-col gap-3 w-11/12 py-4" : "flex flex-col gap-3 w-11/12 hidden"}>
            <div className="bg-red-50 flex gap-x-2 p-3 rounded-md"><img src="./alert.png" alt="alert circle" /> Password and confirmation do not match</div>
            <div className="bg-yellow-50 flex gap-x-2 p-3 rounded-md"><img src="./alert.png" alt="alert circle" /> Password and confirmation do not match</div>
            <div className="bg-green-50 flex gap-x-2 p-3 rounded-md"><img src="./alert.png" alt="alert circle" /> Password and confirmation do not match</div>
        </section>
    )
}