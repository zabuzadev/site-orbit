import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navigationLinks = [
    { href: "/relogios", label: "TODOS OS RELÓGIOS" },
    { href: "/comunidade", label: "COMUNIDADE" },
    { href: "/grupo-exclusivo", label: "GRUPO EXCLUSIVO" },
    { href: "/contatos", label: "CONTATOS" }
  ];

  const homeLinks = [
    { href: "#alta-relojoaria", label: "ALTA RELOJOARIA" },
    { href: "#colecoes", label: "COLEÇÕES" }
  ];

  return (
    <header className="bg-slate-900 shadow-2xl sticky top-0 z-50 border-b border-slate-700/50">
      {/* Top Bar */}
      <div className="bg-slate-800/80 text-slate-300 border-b border-slate-700/30">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-slate-50" />
                <span className="hidden sm:inline">+55 (11) 93474-2550</span>
              
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-slate-50" />
                <span className="hidden sm:inline">contato@orbitwatch.com.br</span>
                <span className="sm:hidden">contato</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-slate-50" />
                <span>FRETE PARA TODO BRASIL</span>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 text-xs">
              <Link to="/contatos" className="hover:text-slate-50 transition-colors">Frete para todo Brasil.</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-slate-900">
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <Link to="/" className="group">
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-4xl font-serif font-bold text-slate-50 tracking-tight group-hover:text-gradient transition-all duration-300">ORBIT</span>
                  <span className="text-sm sm:text-xl font-serif font-light text-slate-300">Watch</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 tracking-[0.15em] sm:tracking-[0.25em] font-light">
                  ALTA RELOJOARIA
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8 lg:space-x-12">
              {isHome && homeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative group py-2 text-slate-300 hover:text-slate-50 font-medium transition-colors duration-300 text-sm tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-50 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative group py-2 text-slate-300 hover:text-slate-50 font-medium transition-colors duration-300 text-sm tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-50 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden text-slate-300 h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="xl:hidden pb-6 border-t border-slate-700/50 pt-6">
              <div className="flex flex-col space-y-4">
                {isHome && homeLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-300 hover:text-slate-50 font-medium transition-colors py-2 text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-slate-300 hover:text-slate-50 font-medium transition-colors py-2 text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
