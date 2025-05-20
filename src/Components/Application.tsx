import React, { useState } from "react";

function Application() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [state, setState] = useState<boolean>(false);

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setState(true);
  };
  return (
    <>
      <form onSubmit={(e: any) => handelSubmit(e)}>
        <h1>Full Name Display</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="first_name"
          required
          value={firstName}
          onChange={(e: any) => {
            setFirstName(e.target.value);
            setState(false);
          }}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="last_name"
          required
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
            setState(false);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {state && (
        <div>
          <h4>
            Full Name: {firstName} {lastName}
          </h4>
        </div>
      )}
    </>
  );
}

export default Application;
