import { ContactView } from "~/modules/contact/ui/views/contact-view";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Contact Us - Get a Quote | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Get in touch with Hiyana World Logistics for competitive freight forwarding rates. 26 branches across India, 30-45 days free storage. Contact us for air, sea, and road transport solutions.",
    },
  ];
}

export default function Contact() {
  return <ContactView />;
}
