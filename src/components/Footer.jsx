import { Building2 } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "/docs/Code_Electoral.pdf", label: "Code Électoral" },
    { href: "/candidats", label: "Candidats" },
    { href: "/infos", label: "Infos Hub" },
    { href: "/trouver-bureau", label: "Mon Bureau de Vote" },
  ];

  const usefulLinks = [
    { href: "https://www.prc.cm/fr", label: "Présidence de la République" },
    {
      href: "https://minat.gov.cm",
      label: "Ministère de l'Administration Territoriale",
    },
    {
      href: "https://constitutional-council.com",
      label: "Cour Constitutionnelle",
    },
    { href: "https://file.elecam.cm", label: "Vérifier son inscription" },
    { href: "https://www.elecam.cm", label: "ELECAM" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="px-6 py-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="p-2 border-2 border-dashed border-white/50 w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-lg">
              <img src="/img/vote.svg" alt="logo" />
            </div>
            <h2 className="text-xl font-bold text-red-900">CamerVote2025</h2>
          </div>

          {/* Navigation Links */}
          <div className="text-center space-y-4 mb-8">
            {navigationLinks.map((link, index) => (
              <div key={index}>
                <a
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Footer Links Grid */}
          <div className="flex flex-col items-center justify-center gap-4 mb-8 text-sm">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/70 pt-6 border-t border-white/20">
            © {new Date().getFullYear()} CamerVote2025 • Tous droits réservés •
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8">
            {/* Logo and Contact Column */}
            <div className="space-y-6">
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="p-2 border-2 border-dashed border-white/50 w-40 h-40 flex items-center justify-center rounded">
                  <img src="/img/vote.svg" alt="logo" />
                </div>
                <div>
                  <h2 className="font-bold text-red-900">CamerVote2025</h2>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
              <div className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Information</h3>
              <div className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-center items-center pt-8 mt-8 border-t border-white/20">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} CamerVote2025 • Tous droits réservés
              •
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
