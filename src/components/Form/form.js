import React, { useState } from "react"
import axios from "axios";
import "./form.scss";


const Form = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/c71599a0-dade-4f89-908f-0041de93b6dc",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks for your inquiry, you'll hear from us shortly!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <div className="form-holder">
            <div className="form">
                <form onSubmit={handleOnSubmit} autocomplete="off">
                    <div className="form-group">
                        <label className="required" for="Name">Your name</label>
                        <input type="text" name="Name" className="form-control" id="Name" required="required" placeholder="Kelly Jane" />
                    </div>
                    <div className="form-group">
                        <label className="required" for="email">Your email</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="email" required="required" placeholder="kjane@gmail.com" />
                    </div>
                    <div className="form-group short">
                        <label for="phone">Your phone number</label>
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="202-555-2255" />
                    </div>
                    <div className="form-group">
                        <label className="required" for="occasion">What type of event are you planning?</label>
                        <input type="occasion" name="occasion" className="form-control" id="occasion" aria-describedby="occasion" required="required" placeholder="Wedding, party, etc." />
                    </div>
                    <div className="form-group">
                        <label for="venue">Have you booked venue?</label>
                        <input type="text" name="venue" className="form-control" id="venue" placeholder="'The W' or 'Not yet'" />
                    </div>
                    <div className="form-group">
                        <label for="date">Have you set a date?</label>
                        <input type="text" name="date" className="form-control" id="date" placeholder="'May 12th' or 'Not yet'" />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={serverState.submitting}>
                        Submit
                    </button>
                    {serverState.status && (
                        <p className={!serverState.status.ok ? "errorMsg" : ""}>
                            {serverState.status.msg}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Form;