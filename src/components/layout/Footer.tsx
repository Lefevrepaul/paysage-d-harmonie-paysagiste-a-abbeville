import { siteConfig } from "@/config/site.config";

function LeafMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M20.5 3.5c-6.2.6-11 3.1-13.7 7.5-2.6 4.2-2.5 8.2-2.5 8.2s3.9.3 8.2-2.2c4.6-2.7 7.2-7.7 7.8-13.5Z"
        fill="currentColor"
      />
      <path
        d="M7 18.5c2.2-4.8 6.3-8.2 11.4-10.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity=".75"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-3 text-[#1a2f1c]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5e9]">
                <LeafMark />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium tracking-tight text-gray-900">
                  {siteConfig.company.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-[#7cb342]">
                  {siteConfig.company.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              {siteConfig.company.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#7cb342]">
              Services
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600">
              <li>Conception paysagère</li>
              <li>Création de jardins</li>
              <li>Entretien annuel</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#7cb342]">
              Contact
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="transition hover:text-gray-900"
                  aria-label={`Appeler le ${siteConfig.contact.phoneDisplay}`}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                Intervention : {siteConfig.location.region} (+
                {siteConfig.location.radiusKm}km)
              </li>
              <li>Devis gratuit sous 48h</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-50"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-50"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-50"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.company.name}. Tous droits
            réservés.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-gray-900">
              Mentions légales
            </a>
            <a href="#" className="transition hover:text-gray-900">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.6 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H8v2.8h2.2V21h3.4Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z"
      />
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"
      />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 7.2A1.7 1.7 0 1 1 6.5 3.8a1.7 1.7 0 0 1 0 3.4ZM5 21V9h3v12H5Zm6 0V9h2.9v1.7h.1c.4-.8 1.5-2 3.3-2 3 0 3.7 2 3.7 5v7.3h-3v-6.5c0-1.6 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-3Z"
      />
    </svg>
  );
}

