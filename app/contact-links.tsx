import { ArrowUpRight, Mail } from "lucide-react";

export const contact = {
  email: "Etdeen519@gmail.com",
  linkedin: "https://www.linkedin.com/in/elijah-t-deen/",
};

export default function ContactLinks() {
  return <div className="contact-links" aria-label="Contact Elijah">
    <a href={`mailto:${contact.email}`}><Mail size={17} aria-hidden="true"/> Email</a>
    {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true"/></a>}
  </div>;
}
