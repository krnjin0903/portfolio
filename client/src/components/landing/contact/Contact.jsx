import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import mailServices from "../../../services/mailService";
import "./contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().required("Please write a message"),
  });
  const onSubmit = (values) => {
    mailServices
      .sendMail(values)
      .then(onSendMailSuccess)
      .catch(onSendMailError);
  };

  const onSendMailSuccess = (response) => {
    Swal.fire("Message Sent!", "Thank you for reaching out!", "success");
  };

  const onSendMailError = (error) => {
    console.log(error);
    Swal.fire("Oops...", "Something went wrong! Please try again", "error");
  };
  return (
    <React.Fragment>
      <section className="contact" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <h2>Get In Touch</h2>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form>
                  <div className="row">
                    <div className="col">
                      <div className="form-label">Name</div>
                      <Field className="form-control" type="text" name="name" />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="col">
                      <div className="form-label">Email</div>
                      <Field
                        className="form-control"
                        type="email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-label">Message</div>
                      <Field
                        className="form-control"
                        rows="6"
                        as="textarea"
                        name="message"
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <button type="submit">
                    <span>Submit</span>
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
