import React, { useState } from "react"
import { navigate } from 'gatsby-link'
import "./form.scss";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}


const Form = () => {

    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    return (
        <div className="form-holder">
            <div className="form">
                <form autoComplete="off" action="/weddings/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                        <label className="required" >Occasion</label>
                        <input type="text" name="occasion" className="form-control" id="occasion" aria-describedby="occasion" required="required" />
                    </div>
                    <div className="form-group">
                        <label >Venue</label>
                        <input type="text" name="venue" className="form-control" id="venue" />
                    </div>
                    <div className="form-group short">
                        <label >Event date</label>
                        <input type="text" name="date" className="form-control" id="date" />
                    </div>
                    <div className="form-group">
                        <label className="required" >Full name</label>
                        <input type="text" name="Name" className="form-control" id="Name" required="required" />
                    </div>
                    <div className="form-group">
                        <label className="required" >Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="email" required="required" />
                    </div>
                    <div className="form-group short">
                        <label >Phone number</label>
                        <input type="text" name="phone" className="form-control" id="phone" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;