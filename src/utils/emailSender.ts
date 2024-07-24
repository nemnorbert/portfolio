import contactJson from "~/config/contact.json";
const recipient = contactJson.email || '';

export default function emailSender() {
  const subject = "NN Portfolio";
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
}