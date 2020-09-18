import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <main>
      <ContactForm
        onSubmit={async ({ email, subject, message }) => {
          const response = await fetch("/api/contact", {
            body: JSON.stringify({ email, subject, message }),
            headers: { "content-type": "application/json" },
            method: "post",
          });

          if (response.ok) {
            window.location.href = "/contact/success";
          }
        }}
      />
    </main>
  );
}
