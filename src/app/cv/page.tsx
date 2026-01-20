import { Download, Eye } from "lucide-react";

export default function CVPage() {
  const cvPath = "/CV Yann Lacaze.pdf";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-[calc(100vh-80px)] flex flex-col">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mon CV</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Consultation et téléchargement de mon Curriculum Vitae.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Ouvrir
          </a>
          <a
            href={cvPath}
            download="CV_Yann_Lacaze.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Télécharger
          </a>
        </div>
      </header>

      <div className="flex-grow bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-sm relative group">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center md:hidden bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm z-10 pointer-events-none group-focus-within:opacity-0 transition-opacity">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            L'affichage du PDF peut être limité sur mobile.
          </p>
          <a
            href={cvPath}
            download="CV_Yann_Lacaze.pdf"
            className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20"
          >
            <Download className="w-5 h-5" />
            Télécharger le CV
          </a>
        </div>
        <iframe
          src={`${cvPath}#toolbar=0`}
          className="w-full h-full border-none"
          title="CV Yann Lacaze"
        />
      </div>
    </div>
  );
}