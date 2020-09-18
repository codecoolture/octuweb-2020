import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

export type ContactFormProps = {
  onSubmit: (values: { email: string; subject: string; message: string }) => Promise<void>;
};

export function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <Formik
      initialValues={{ email: "", subject: "", message: "" }}
      onSubmit={onSubmit}
      validationSchema={yup.object({
        email: yup.string().email().required("Este campo es obligatorio."),
        message: yup.string().required("Este campo es obligatorio."),
      })}
    >
      {({ errors }) => {
        return (
          <Form>
            <p>{errors.email}</p>
            <label>
              Tu email
              <Field id="email" name="email" />
            </label>

            <label>
              Asunto
              <Field name="subject" />
            </label>

            <p>{errors.message}</p>
            <label>
              Mensaje
              <Field name="message" />
            </label>

            <button type="submit">Enviar</button>
          </Form>
        );
      }}
    </Formik>
  );
}
