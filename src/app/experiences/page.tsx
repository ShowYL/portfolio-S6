import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Stage - Développeur Mobile",
    company: "Service de Documentation - Université Paul Sabatier",
    location: "Toulouse, France",
    period: "Stage de 3 mois (BUT 2)",
    description:
      "Conception et développement d'une application mobile innovante pour faciliter l'accès aux ressources documentaires des étudiants.",
    tasks: [
      "Développement d'une application mobile cross-platform avec Flutter",
      "Interfaçage avec des APIs pour la géolocalisation des ouvrages (ISBN/ISSN)",
      "Références des bibliothèques universitaires possédant les ressources recherchées",
      "Respect des contraintes d'ergonomie et d'accessibilité mobile",
    ],
    skills: [
      "Flutter",
      "Dart",
      "API REST",
      "Mobile UX",
      "Git",
      "Github actions",
    ],
  },
  {
    title: "Projets Académiques",
    company: "IUT Informatique - Université Toulouse III",
    location: "Toulouse, France",
    period: "2022 - 2025",
    description:
      "Réalisation de nombreux projets en équipe simulant des contextes réels (SAÉ).",
    tasks: [
      "Développement Web Fullstack (PHP, JS, Frameworks)",
      "Programmation Système et Réseau (C, Bash, Docker)",
      "Gestion de base de données relationnelles et NoSQL",
      "Gestion de projet Agile (SCRUM) et versionning (Git/GitLab)",
    ],
    skills: [
      "Java",
      "Python",
      "SQL",
      "Docker",
      "Agile",
      "CI/CD",
      "Flutter",
      "dart",
      "Java Springboot",
      "javascript",
      "Scrum",
      "php",
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4">Mon Parcours Professionnel</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Mon cursus en BUT Informatique a été rythmé par l'alternance entre
          apprentissages théoriques et mises en pratique concrètes.
        </p>
      </header>

                  <div className="space-y-12">

                    {experiences.map((exp, index) => (

                      <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-slate-300 dark:before:bg-slate-700">

                        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)]"></div>

                        

                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-md hover:shadow-lg transition-all">

                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">

                            <div>

                              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h2>

                              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>

                            </div>

                            <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 md:items-end">

                              <div className="flex items-center gap-1.5">

                                <Calendar className="w-4 h-4" />

                                <span>{exp.period}</span>

                              </div>

                              <div className="flex items-center gap-1.5">

                                <MapPin className="w-4 h-4" />

                                <span>{exp.location}</span>

                              </div>

                            </div>

                          </div>

            

                          <p className="text-slate-700 dark:text-slate-200 mb-6 font-medium leading-relaxed">

                            {exp.description}

                          </p>

            

                          <ul className="space-y-3 mb-8 pl-1">

                            {exp.tasks.map((task, idx) => (

                              <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm md:text-base">

                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0"></span>

                                <span>{task}</span>

                              </li>

                            ))}

                          </ul>

            

                          <div className="flex flex-wrap gap-2">

                            {exp.skills.map((skill, idx) => (

                              <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">

                                {skill}

                              </span>

                            ))}

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

            

      
    </div>
  );
}

