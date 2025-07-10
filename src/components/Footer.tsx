import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "API", href: "/api" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "/status" },
      { label: "Community", href: "/community" },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook />, href: "https://facebook.com", label: "Facebook" },
  { icon: <Twitter />, href: "https://twitter.com", label: "Twitter" },
  { icon: <LinkedIn />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Instagram />, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-100 mt-auto relative overflow-hidden border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Company Info */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/vecteezy_education-school-logo-element-vector_29100343.svg"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
              <h2 className="font-extrabold text-2xl tracking-wider text-white">
                Anywhere Platform
              </h2>
            </div>
            <p className="mb-4 opacity-90 max-w-xs leading-relaxed text-zinc-200">
              Empowering businesses worldwide with innovative solutions that
              drive growth and success.
            </p>
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <Email fontSize="small" />
                <span className="text-sm">contact@anywhere.com</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Phone fontSize="small" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <LocationOn fontSize="small" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 hover:scale-110"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Footer Links */}
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-2 text-lg tracking-wide text-zinc-100">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-zinc-800 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-3">
          <span className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Anywhere Platform. All rights
            reserved.
          </span>
          <div className="flex gap-4 text-zinc-400">
            <a
              href="/privacy"
              className="hover:text-white text-sm transition duration-200 hover:translate-x-1 "
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white text-sm transition duration-200 hover:translate-x-1 "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
