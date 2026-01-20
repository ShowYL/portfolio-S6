import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-900 dark:text-white font-semibold mb-1">Yann Lacaze</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Portfolio BUT Informatique. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/yann-lacaze-244424296/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/ShowYL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:yannlacaze31@gmail.com" 
              className="text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}