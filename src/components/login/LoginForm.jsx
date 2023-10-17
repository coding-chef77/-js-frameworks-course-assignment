import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import { Form } from "react-bootstrap";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function login(event) {
    event.preventDefault();

    setSubmitting(true);
    setLoginError(null);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        window.location.href = "/admin";
      } else {
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="mt-5">
        <Form onSubmit={login} className="row g-3">
          <span className="text-danger">
            {" "}
            {loginError && <FormError>{loginError}</FormError>}
          </span>
          <fieldset disabled={submitting}>
            <div className="col-md-6" style={{ marginBottom: "20px" }}>
              <input
                name="username"
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="col-md-6" style={{ marginBottom: "20px" }}>
              <input
                name="password"
                placeholder="Password"
                type="password"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary col-md-2">Login</button>
          </fieldset>
        </Form>
      </div>
    </>
  );
}
