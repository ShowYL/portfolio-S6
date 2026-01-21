import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects, competences } from "@/data/portfolio";

export default function RealisationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Mes Réalisations</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Une sélection de mes projets académiques et professionnels illustrant ma polyvalence technique, 
          du développement mobile aux architectures distribuées.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col shadow-md hover:shadow-xl transition-all duration-300">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                  <project.icon className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold rounded-full text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto space-y-2">
                {project.linkedSkills.slice(0, 3).map((skillSlug) => {
                  const skill = competences.find(c => c.slug === skillSlug);
                  if (!skill) return null;
                  return (
                    <Link 
                      key={skillSlug}
                      href={`/competences/${skillSlug}`}
                      className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors uppercase tracking-widest mr-4 mb-1"
                    >
                      {skill.title}
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="px-6 py-4 bg-slate-50/50 dark:bg-white/5 border-t border-slate-200 dark:border-slate-800 rounded-b-3xl flex items-center gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                Code Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}