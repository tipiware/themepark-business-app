// npm
import { useState } from "react";

// files
import data from "../../data/contact.json";
import InputField from "../InputField";
import useFirebase from "../../hooks/useFirebase";

export default function ContactForm() {
  // local state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // properties
  const { addContact } = useFirebase();

  // methods
  async function handleSubmit(event) {
    event.preventDefault();
    const data = { name, email, message };
    await addContact("contacts", data);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <InputField setup={data.name} state={[name, setName]} />
      <InputField setup={data.email} state={[email, setEmail]} />
      <InputField setup={data.message} state={[message, setMessage]} />
      <button className="btn">submit</button>
    </form>
  );
}
