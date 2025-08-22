import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Airvon Studio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">Nosotros</Link>
          <Link href="#services" className="transition-colors hover:text-primary">Servicios</Link>
          <Link href="#portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary">Testimonios</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contacto</Link>
        </nav>
        <div className="flex items-center justify-end">
           <Button asChild className="primary-gradient text-white font-bold hover:scale-105 hover:shadow-lg transition-transform">
            <a href="https://wa.me/543516247707" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
