import Link from "next/link";

export default function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Dev Alphaspace home">
      <svg viewBox="-3 -3 46 46" aria-hidden="true">
        <path fill="currentColor" d="M0 0h20a20 20 0 0 1 0 40H0Z" />
        <path fill="#fff" d="m10 12-5 5h17v17l5-5V12Z" />
      </svg>
      <span>
        DevAlphaspace<span className="brand-period">.</span>
      </span>
    </Link>
  );
}
