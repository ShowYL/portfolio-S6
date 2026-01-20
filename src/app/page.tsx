import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="px-4 pt-20 pb-10 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block text-slate-900 dark:text-white">
            Bienvenue sur mon
          </span>
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Portfolio de Compétences
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Étudiant en BUT Informatique, je vous présente ici mon parcours,
          l'évolution de mes compétences et mes réalisations professionnelles.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/competences"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Découvrir mes compétences
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Consulter mon CV
          </Link>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Parcours & Évolution</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Découvrez comment mes compétences ont évolué depuis le BUT 1
              jusqu'à mon stage de fin d'études.
            </p>
            <Link
              href="/competences"
              className="text-blue-600 font-semibold flex items-center hover:underline"
            >
              En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expériences</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Mon stage et mes expériences universitaire qui ont forgé mon
              profil de développeur.
            </p>
            <Link
              href="/experiences"
              className="text-indigo-600 font-semibold flex items-center hover:underline"
            >
              Voir mes expériences <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <FileText className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Curriculum Vitae</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Mon CV.</p>
            <Link
              href="/cv"
              className="text-purple-600 font-semibold flex items-center hover:underline"
            >
              Mon CV <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

