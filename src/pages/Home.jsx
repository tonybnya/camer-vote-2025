import { FileText, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const actionButtons = [
    {
      icon: FileText,
      text: "Consulter le Code Électoral",
      href: "/docs/Code_Electoral.pdf",
      external: true,
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
      hoverColor: "hover:bg-blue-50",
    },
    {
      icon: Users,
      text: "Voir tous les Candidats",
      href: "/candidats",
      external: false,
      borderColor: "border-green-500",
      textColor: "text-green-600",
      hoverColor: "hover:bg-green-50",
    },
    {
      icon: MapPin,
      text: "Trouver Mon Bureau de Vote",
      href: "/trouver-bureau",
      external: false,
      borderColor: "border-gray-500",
      textColor: "text-gray-700",
      hoverColor: "hover:bg-gray-50",
    },
  ];

  const renderButton = (button, isMobile = false) => {
    const IconComponent = button.icon;
    const baseClasses = `bg-white border-2 ${button.borderColor} ${button.textColor} ${
      isMobile ? "py-4 px-6" : "py-8 px-6"
    } rounded-lg flex ${isMobile ? "flex-row space-x-2 justify-center" : "flex-col items-center space-y-3"} ${
      button.hoverColor
    } transition-colors group w-full`;

    const content = (
      <div className={baseClasses}>
        <IconComponent
          size={isMobile ? 20 : 32}
          className={
            isMobile ? "" : "group-hover:scale-110 transition-transform"
          }
        />
        <span
          className={`${isMobile ? "font-medium" : "font-medium text-lg text-center"}`}
        >
          {button.text}
        </span>
      </div>
    );

    return button.external ? (
      <a
        href={button.href}
        target="_blank"
        rel="noopener noreferrer"
        key={button.text}
        className="block"
      >
        {content}
      </a>
    ) : (
      <Link to={button.href} key={button.text} className="block">
        {content}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg text-white p-8 mb-8 text-center">
            <h1 className="text-2xl font-bold leading-tight">
              <span className="text-red-900 pb-4">CamerVote2025</span>
              <br />
              Plateforme d'information civique pour les élections
              présidentielles de 2025 au Cameroun.
            </h1>
          </div>

          {/* Action Buttons - Mobile Stack */}
          <div className="space-y-4">
            {actionButtons.map((button) => renderButton(button, true))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg text-white p-12 mb-12 text-center">
            <h1 className="text-4xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="text-red-900">CamerVote2025</span>
              <br />
              Plateforme d'information civique pour les élections
              présidentielles de 2025 au Cameroun.
            </h1>
          </div>

          {/* Action Buttons - Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionButtons.map((button) => renderButton(button))}
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Rejoignez la formation de scrutateur
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participez à la transparence électorale en devenant scrutateur
            formé. Contribuez à des élections justes et transparentes au
            Cameroun.
          </p>
          <a
            href="https://protegetonvote.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">
              Protège Ton Vote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
