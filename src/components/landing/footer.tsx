import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-black text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Airvon Studio</p>
          <p className="text-sm text-gray-400">© 2025 Airvon Studio. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
           <div className="flex space-x-4">
            <a href="mailto:Airvonstudio@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
               <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-gray-500">Airvonstudio@gmail.com | @airvonstudio</p>
        </div>
      </div>
    </footer>
  );
}
