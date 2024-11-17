import { useState, useEffect } from "react"
import axios from 'axios';
import Alerts from "./Alerts";

export default function CreateForm() {
    const [details, setDetails] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [show, setShow] = useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }
    useEffect(() => {
        submitViaAPI()
    }, [])
    function handleSubmit(event) {
        event.preventDefault()
        if (details.password === details.confirmPassword) {
            submitViaAPI()
            setShow(false)
        }
        else {
            setShow(true)
        }
    }
    
    function submitViaAPI() {
        axios({
            method: 'post',
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json",
            },
            url: 'http://127.0.0.1:8000/register',
            data: {
                username: details.email,
                password: details.password,
                password2: details.confirmPassword
            }
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
    }
    return (
        <form className="w-11/12 flex flex-col gap-3" id="create-form">
            <section>
                <label htmlFor="email" className="text-sm font-bold font-semibold leading-5">EMAIL ADDRESS</label>
                <input type="email" className="w-full md:w-98 border-grey-300 border p-4 rounded-md" 
                    name="email" 
                    id="email" 
                    placeholder="Enter Email"
                    value={details.email}
                    onChange={handleChange}
                />
            </section>
            <section>
                <label htmlFor="password" className="text-sm font-bold font-semibold leading-5">PASSWORD</label>
                <input type="password" className="w-full border-grey-300 border p-4 rounded-md" 
                    name="password" 
                    id="password" 
                    placeholder="Enter Password"
                    value={details.password}
                    onChange={handleChange}
                />
            </section>
            <section>
                <label htmlFor="confirmpassword" className="text-sm font-bold font-semibold leading-5">Confirm Password</label>
                <input type="password" className="w-full border-grey-300 border p-4 rounded-md" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="Enter Password" 
                    value={details.confirmPassword}
                    onChange={handleChange}
                />
            </section>
            <section className="py-3">
                <button onClick={handleSubmit} 
                    className="bg-blue-700 rounded-lg py-4 px-6 leading-6 w-full 
                    text-white">Create an account
                </button>
            </section>
            <Alerts show={show}/>
        </form>
    )
}