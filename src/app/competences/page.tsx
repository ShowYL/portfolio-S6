import { TrendingUp, CheckCircle2, Link as LinkIcon, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { competences, projects } from "@/data/portfolio";

export default function CompetencesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Mon Bilan de Compétences</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Voici l'analyse détaillée de ma progression sur les 6 compétences essentielles du BUT Informatique, 
          avec un focus particulier sur le parcours <strong>"Réalisation d'applications" (RAPP)</strong>.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {competences.map((comp, index) => {
          const linkedProjects = projects.filter((p) => p.linkedSkills.includes(comp.slug));
          
          return (
            <section key={index} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 md:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="flex-1">
                    <Link href={`/competences/${comp.slug}`} className="group block">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 group-hover:scale-110 transition-transform">
                          <comp.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                            {comp.title}
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                          </h2>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{comp.description}</p>
                        </div>
                      </div>
                    </Link>

                    <div className="space-y-6">
                      <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-inner">
                        <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400 font-bold uppercase text-xs tracking-wider">
                          <TrendingUp className="w-4 h-4" />
                          <span>Aperçu de la progression</span>
                        </div>
                        <div className="space-y-3">
                          {comp.levels.slice(0, 1).map((level, lvlIdx) => (
                            <div key={lvlIdx} className="relative pl-6">
                              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500"></div>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base line-clamp-2">
                                {level}
                                <Link href={`/competences/${comp.slug}`} className="text-blue-600 hover:underline ml-1 text-sm font-semibold">
                                  ...Voir le détail
                                </Link>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pl-1">
                        {comp.points.slice(0, 3).map((point, idx) => (
                          <span key={idx} className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            {point}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Link 
                          href={`/competences/${comp.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
                        >
                          Consulter le détail
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {linkedProjects.length > 0 && (
                    <div className="lg:w-72 space-y-4 pt-6 lg:pt-0 lg:border-l lg:border-slate-100 dark:lg:border-slate-800 lg:pl-10">
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-widest flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        Réalisations liées
                      </h3>
                      <div className="flex flex-col gap-3">
                        {linkedProjects.slice(0, 3).map((project, idx) => (
                          <Link 
                            key={idx} 
                            href={`/competences/${comp.slug}`} 
                            className="group p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md flex items-center gap-3"
                          >
                            <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              <project.icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                              {project.title}
                            </span>
                            <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                          </Link>
                        ))}
                        {linkedProjects.length > 3 && (
                          <Link 
                            href={`/competences/${comp.slug}`}
                            className="text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline py-2"
                          >
                            ... et {linkedProjects.length - 3} autres
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}