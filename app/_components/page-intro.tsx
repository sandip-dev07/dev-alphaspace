import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageIntroProps = {
  label: string;
  title: string;
  accent: string;
  description: string;
};

export default function PageIntro({ label, title, accent, description }: PageIntroProps) {
  return (
    <section className="page-intro shell" aria-labelledby="page-title">
      <Link href="/" className="page-back"><ArrowLeft size={14} /> Back to home</Link>
      <div className="eyebrow">{label}</div>
      <h1 id="page-title">{title}<br />{" "}<span className="serif">{accent}</span></h1>
      <p>{description}</p>
    </section>
  );
}
