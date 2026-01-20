import {
  Code2,
  TrendingUp,
  CheckCircle2,
  Database,
  Settings,
  Users,
  Briefcase,
  Layout,
} from "lucide-react";

const competences = [
  {
    title: "Réaliser",
    shortDescription: "Développer des solutions informatiques",
    description:
      "Concevoir, coder, tester et intégrer une solution informatique pour un client.",
    icon: Code2,
    evolution: [
      "Niveau 1 : Développer des applications informatiques simples",
      "Niveau 2 : Partir des exigences et aller jusqu’à une application complète",
      "Niveau 3 : Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
    ],
    details: [
      "Maîtrise des langages (Java, C, Python, TS)",
      "Développement Web & Mobile (Next.js, Flutter)",
      "Qualité logicielle et Tests (TDD, CI/CD)",
    ],
  },
  {
    title: "Optimiser",
    shortDescription: "Améliorer les performances",
    description:
      "Proposer des applications informatiques optimisées en fonction de critères spécifiques (temps, ressources, précision).",
    icon: TrendingUp,
    evolution: [
      "Niveau 1 : Appréhender et construire des algorithmes",
      "Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné",
      "Niveau 3 : Analyser et optimiser des applications",
    ],
    details: [
      "Algorithmique avancée et structures de données",
      "Analyse de complexité",
      "Programmation asynchrone et concurrente",
    ],
  },
  {
    title: "Collaborer",
    shortDescription: "Travailler en équipe informatique",
    description:
      "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
    icon: Users,
    evolution: [
      "Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe",
      "Niveau 2 : Situer son rôle et ses missions au sein d’une équipe informatique",
      "Niveau 3 : Manager une équipe informatique",
    ],
    details: [
      "Méthodes Agiles (Scrum)",
      "Communication professionnelle",
      "Gestion de conflits et leadership",
    ],
  },
  {
    title: "Administrer",
    shortDescription: "Gérer des infrastructures",
    description:
      "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures et réseaux.",
    icon: Settings,
    evolution: [
      "Niveau 1 : Installer et configurer un poste de travail",
      "Niveau 2 : Déployer des services dans une architecture réseau",
    ],
    details: [
      "Administration Linux/Windows",
      "Virtualisation et Conteneurisation (Docker)",
      "Services réseaux de base",
    ],
  },
  {
    title: "Gérer",
    shortDescription: "Exploiter les données",
    description:
      "Concevoir, gérer, administrer et exploiter les données de l’entreprise.",
    icon: Database,
    evolution: [
      "Niveau 1 : Concevoir et mettre en place une base de données",
      "Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
    ],
    details: [
      "Modélisation (MCD/MLD)",
      "SQL avancé et NoSQL",
      "Intégrité et sécurité des données",
    ],
  },
  {
    title: "Conduire",
    shortDescription: "Gérer des projets",
    description:
      "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client.",
    icon: Briefcase,
    evolution: [
      "Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs",
      "Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins",
    ],
    details: [
      "Analyse des besoins",
      "Planification et suivi de projet",
      "Droit du numérique et gestion",
    ],
  },
];

export default function CompetencesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4">
          Mon Bilan de Compétences (Parcours RAPP)
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Conformément au Programme National du BUT Informatique, voici ma
          progression sur les 6 compétences essentielles, avec un focus sur le
          parcours
          <strong>
            {" "}
            "Réalisation d'applications : conception, développement, validation"
          </strong>
          .
        </p>
      </header>

      <div className="space-y-12">
                {competences.map((comp, index) => (
                  <section key={index} className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-sm transition-all hover:shadow-md">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-lg w-fit">
                              <comp.icon className="text-blue-600 w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">{comp.title}</h2>
                            <span className="px-3 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-xs font-medium rounded-full text-blue-700 dark:text-blue-300 w-fit">
                              {comp.shortDescription}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 mb-6 italic pl-1">
                            {comp.description}
                          </p>
                          
                          <div className="bg-white/50 dark:bg-slate-800/30 p-5 md:p-6 rounded-xl mb-6 border border-white/20 dark:border-white/5">
        
                    <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400 font-semibold">
                      <TrendingUp className="w-5 h-5" />
                      <h3>Évolution par niveau (BUT 1 à 3)</h3>
                    </div>
                    <div className="space-y-4">
                      {comp.evolution.map((level, idx) => (
                        <div
                          key={idx}
                          className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400 dark:before:bg-blue-600"
                        >
                          <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                            {level}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                      <Layout className="w-4 h-4" />
                      Savoir-faire associés
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {comp.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
