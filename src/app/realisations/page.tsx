import {
  Code2,
  Github,
  ExternalLink,
  Database,
  Server,
  Smartphone,
  Layout,
  MessageSquare,
  Lock,
} from "lucide-react";

const realisations = [
  {
    title: "Easy Loc - Application BU",
    category: "Mobile & Stage",
    description:
      "Application mobile développée pour le Service de Documentation de Paul Sabatier. Elle permet aux étudiants de localiser les bibliothèques universitaires possédant un livre spécifique via son ISBN/ISSN.",
    icon: Smartphone,
    tags: ["Flutter", "Dart", "API REST", "Mobile"],
    link: null,
    github: "https://github.com/scd-appli/easy_loc",
  },
  {
    title: "Architecture Distribuée & Auth",
    category: "Web & Architecture",
    description:
      "Ecosystème complet d'applications interconnectées (R4.01). Séparation des responsabilités entre un service d'authentification, une API métier et un frontend Svelte.",
    icon: Layout,
    tags: ["Svelte", "PHP", "API REST", "Sécurité"],
    link: null,
    github: "https://github.com/ShowYL/r401-App",
  },
  {
    title: "Gestion Immobilière (Spring)",
    category: "Développement Avancé",
    description:
      "Application de gestion de biens immobiliers basée sur le framework Spring. Utilisation de concepts avancés : Inversion de contrôle, Injection de dépendances.",
    icon: Code2,
    tags: ["Java", "Spring Boot", "MVC", "JPA"],
    link: null,
    github: "https://github.com/ShowYL/javaspringTP",
  },
  {
    title: "Chat Temps Réel",
    category: "Web Fullstack",
    description:
      "Application de messagerie instantanée permettant des échanges en temps réel entre utilisateurs. Gestion des sessions et des bases de données relationnelles.",
    icon: MessageSquare,
    tags: ["PHP", "JavaScript", "MySQL", "AJAX"],
    link: null,
    github: "https://github.com/ShowYL/Chat_r4a10",
  },
  {
    title: "Gestion de Fromagerie",
    category: "Application Desktop",
    description:
      "Logiciel de gestion de stock et de vente pour une fromagerie. Premier projet d'envergure en Java avec interface graphique et persistance des données.",
    icon: Database,
    tags: ["Java", "Swing/AWT", "SQLite", "JDBC"],
    link: null,
    github: "https://github.com/ShowYL/S2.01-JAVA",
  },
  {
    title: "Les Titans de Sète",
    category: "Web Fullstack",
    description:
      "Application web complète de gestion d'une équipe de rugby à 7 fictive. Comprend un système de chat en temps réel et une interface d'administration.",
    icon: Code2,
    tags: ["PHP", "JavaScript", "MySQL", "Web"],
    link: null,
    github: "https://github.com/ShowYL/LES-TITANS-DE-SETE",
  },
  {
    title: "Proxy FTP & Analyse Réseau",
    category: "Système & Réseau",
    description:
      "Mise en place d'un proxy FTP et outils d'analyse de classes IP. Projet technique bas niveau mettant en œuvre la programmation système.",
    icon: Server,
    tags: ["C", "Makefile", "Réseau", "FTP"],
    link: null,
    github: "https://github.com/ShowYL/PROXY-C",
  },
];

export default function RealisationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4">Mes Réalisations</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Une sélection de mes projets académiques et professionnels illustrant
          ma polyvalence technique, du développement mobile à la programmation
          système en passant par les architectures web modernes.
        </p>
      </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {realisations.map((project, index) => (

                <div key={index} className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col shadow-md hover:shadow-xl transition-all duration-300">

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

                    

                    <div className="flex flex-wrap gap-2 mt-auto">

                      {project.tags.map((tag, idx) => (

                        <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">

                          {tag}

                        </span>

                      ))}

                    </div>

                  </div>

                  

                  {(project.github || project.link) && (

                    <div className="px-6 py-4 bg-slate-50/50 dark:bg-white/5 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl flex items-center gap-4">

      
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code Source
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
