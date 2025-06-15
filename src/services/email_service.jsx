import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID, // ✅ Correct way in Vite
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      (res) => {
        console.log(res);
        alert("Email sent!");
      },
      (error) => {
        alert("Failed to send email: " + error.text);
      }
    );

  e.target.reset();
};

export default sendEmail;
