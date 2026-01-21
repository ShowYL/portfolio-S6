import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, FileText, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="px-4 pt-12 pb-10 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="block text-slate-900 dark:text-white">
              Bonjour, je suis
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Yann Lacaze
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Développeur en fin de cursus informatique, je me spécialise dans la conception et la réalisation d'applications modernes et performantes. 
            Découvrez mon parcours, mes compétences techniques et les projets qui me passionnent.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="/realisations"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
            >
              Voir mes projets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <a href="https://github.com/ShowYL" target="_blank" className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/yann-lacaze-244424296/" target="_blank" className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <Link href="/contact" className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 order-1 md:order-2">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/photo.jpg" 
              alt="Yann Lacaze" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/competences" className="group p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:border-blue-500 transition-all">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Savoir-faire</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              De la programmation système au développement web moderne, explorez mon bagage technique évolutif.
            </p>
            <span className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
              Mes compétences <ArrowRight className="ml-1 w-4 h-4" />
            </span>
          </Link>

          <Link href="/experiences" className="group p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:border-indigo-500 transition-all">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Parcours</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Un aperçu de mes expériences professionnelles en entreprise et de ma formation académique.
            </p>
            <span className="text-indigo-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
              Mes expériences <ArrowRight className="ml-1 w-4 h-4" />
            </span>
          </Link>

          <Link href="/cv" className="group p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:border-purple-500 transition-all">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Profil complet</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Consultez et téléchargez mon Curriculum Vitae à jour pour en savoir plus sur mon profil.
            </p>
            <span className="text-purple-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
              Consulter mon CV <ArrowRight className="ml-1 w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}