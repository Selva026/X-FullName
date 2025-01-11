import "./nameform.module.css";
import React, { useState } from "react";

function NameForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.trim() !== "" && lastName.trim() !== "") {
            setFullName(`Full Name: ${firstName} ${lastName}`);
        }
    };

    return (
        <section className="name-form">
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        required // Enforces the required field behavior
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        required // Enforces the required field behavior
                    />
                </div>
                <button className="submitBtn" type="submit">
                    Submit
                </button>
            </form>
            {fullName && <p>{fullName}</p>}
        </section>
    );
}

export default NameForm;
