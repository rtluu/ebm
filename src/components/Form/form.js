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
                handleServerResponse(true, "Thanks!", form);
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
                        <label className="required" for="occasion">Occasion</label>
                        <input type="occasion" name="occasion" className="form-control" id="occasion" aria-describedby="occasion" required="required" />
                    </div>
                    <div className="form-group">
                        <label for="venue">Venue</label>
                        <input type="text" name="venue" className="form-control" id="venue" />
                    </div>
                    <div className="form-group short">
                        <label for="date">Event date</label>
                        <input type="text" name="date" className="form-control" id="date" />
                    </div>
                    <div className="form-group">
                        <label className="required" for="Name">Full name</label>
                        <input type="text" name="Name" className="form-control" id="Name" required="required" />
                    </div>
                    <div className="form-group">
                        <label className="required" for="email">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="email" required="required" />
                    </div>
                    <div className="form-group short">
                        <label for="phone">Phone number</label>
                        <input type="text" name="phone" className="form-control" id="phone" />
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