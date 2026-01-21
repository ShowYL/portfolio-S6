import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Github, ExternalLink, ArrowRight } from "lucide-react";
import { competences, projects } from "@/data/portfolio";

// Type needed for the params prop in Next.js 15
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return competences.map((comp) => ({
    slug: comp.slug,
  }));
}

export default async function CompetenceDetailPage(props: { params: Params }) {
  const params = await props.params;
  const competence = competences.find((c) => c.slug === params.slug);

  if (!competence) {
    notFound();
  }

  const linkedProjects = projects.filter((p) => p.linkedSkills.includes(competence.slug));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/competences" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Retour aux compétences
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
            <competence.icon className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            {competence.title}
          </h1>
        </div>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {competence.description}
        </p>
      </header>

      <div className="space-y-12">
        {/* Details & Levels Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6 text-blue-700 dark:text-blue-400 font-bold uppercase text-xs tracking-wider">
              <TrendingUp className="w-5 h-5" />
              <h2>Niveaux de Maîtrise</h2>
            </div>
            <div className="space-y-6">
              {competence.levels.map((level, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 pb-2 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 dark:border-blue-400"></div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-slate-100 dark:border-slate-700/50 p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Savoir-faire clés</h3>
            <div className="flex flex-col gap-3">
              {competence.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300 font-medium text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Linked Projects Section - Now Under Main Content */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
              <ExternalLink className="w-4 h-4" />
            </div>
            Projets Associés
          </h3>
          
          {linkedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedProjects.map((project, idx) => (
                <div key={idx} className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-all hover:border-blue-500 dark:hover:border-blue-500 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold rounded text-slate-600 dark:text-slate-400">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{project.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Voir le code source
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500 dark:text-slate-400 italic">
              Aucun projet spécifiquement lié à cette compétence pour le moment.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
