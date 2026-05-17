import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMapCard } from "@/components/contact/ContactMapCard";

export { metadata } from "./metadata";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMapCard />
    </>
  );
}
