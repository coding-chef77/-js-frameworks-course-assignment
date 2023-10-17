import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Your first name must be at least three characters.")
    .required("Please enter your first name"),
  lastName: yup
    .string()
    .min(4, "Your last name must be at least four characters.")
    .required("Please enter your last name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  subject: yup.string().required(),
  message: yup
    .string()
    .min(10, "The message must be at least 10 characters")
    .required("Please enter your message"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  return (
    <div className="mt-5">
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="row g-3"
      >
        <div className="col-md-6">
          <input
            {...register("firstName")}
            placeholder="First Name"
            className="form-control"
          />
          {errors.firstName && (
            <span className="text-danger">{errors.firstName.message}</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="form-control"
          />
          {errors.lastName && (
            <span className="text-danger">{errors.lastName.message}</span>
          )}
        </div>
        <div className="col-md-8">
          <input
            {...register("email")}
            placeholder="Email"
            className="form-control"
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>
        <div className="col-md-4">
          <select {...register("subject")} className="form-control">
            <option value="">Select a subject</option>
            <option value="general">General Inquiry 1</option>
            <option value="general">General Inquiry 2</option>
          </select>
          {errors.subject && (
            <span className="text-danger">{errors.subject.message}</span>
          )}
        </div>
        <div className="col-md-12">
          <textarea
            {...register("message")}
            rows="3"
            placeholder="Your message..."
            className="form-control"
          />
          {errors.message && (
            <span className="text-danger">{errors.message.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary col-md-4 mx-auto">
          Submit
        </button>
      </Form>
    </div>
  );
}
