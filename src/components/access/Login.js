import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigation, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "./Access.css";

export default function Login() {
    const navigation = useNavigation();
    const { login } = useContext(UserProfileContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => navigation.push("/myPantry"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <>
            <Form onSubmit={loginSubmit} className="">
                <fieldset id="" className="">
                    <FormGroup className="">
                        <Label for="email">Email</Label>
                        <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="">
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup id="" className="">
                        <Button id="btn">Login</Button>
                    </FormGroup>
                    <em className="pt">
                        <div className="jcc">Are you new here? Let's get you</div>
                        <Link to="register" className="">Registered!</Link>
                    </em>
                </fieldset>
            </Form>
        </>
    );
}