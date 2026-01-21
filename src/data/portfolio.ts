import {
  Code2,
  TrendingUp,
  CheckCircle2,
  Layout,
  Database,
  Server,
  Smartphone,
  MessageSquare,
  Briefcase,
  Settings,
  Users,
  Link as LinkIcon,
  ExternalLink,
  Home,
} from "lucide-react";

export const competences = [
  {
    slug: "realiser",
    title: "Réaliser",
    description:
      "Concevoir, coder, tester et intégrer une solution informatique pour un client.",
    icon: Code2,
    levels: [
      "Niveau 1 : Développer des applications informatiques simples",
      "Niveau 2 : Partir des exigences et aller jusqu’à une application complète",
      "Niveau 3 : Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
    ],
    points: [
      "Architecture applicative (Design Patterns)",
      "Développement mobile (Flutter/Dart)",
      "Qualité logicielle (TDD, tests automatisés)",
    ],
  },
  {
    slug: "optimiser",
    title: "Optimiser",
    description:
      "Proposer des applications informatiques optimisées en fonction de critères spécifiques.",
    icon: TrendingUp,
    levels: [
      "Niveau 1 : Appréhender et construire des algorithmes",
      "Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné",
      "Niveau 3 : Analyser et optimiser des applications",
    ],
    points: [
      "Algorithmique avancée et structures de données",
      "Analyse de complexité",
      "Programmation asynchrone et concurrente",
    ],
  },
  {
    slug: "administrer",
    title: "Administrer",
    description:
      "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures.",
    icon: Settings,
    levels: [
      "Niveau 1 : Installer et configurer un poste de travail",
      "Niveau 2 : Déployer des services dans une architecture réseau",
    ],
    points: [
      "Administration système Linux/Windows",
      "Virtualisation et Conteneurisation (Docker)",
      "Services réseaux de base",
    ],
  },
  {
    slug: "gerer",
    title: "Gérer",
    description:
      "Concevoir, gérer, administrer et exploiter les données de l’entreprise.",
    icon: Database,
    levels: [
      "Niveau 1 : Concevoir et mettre en place une base de données",
      "Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
    ],
    points: [
      "Modélisation (MCD/MLD)",
      "SQL avancé et NoSQL",
      "Intégrité et sécurité des données",
    ],
  },
  {
    slug: "conduire",
    title: "Conduire",
    description:
      "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client.",
    icon: Briefcase,
    levels: [
      "Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs",
      "Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins",
    ],
    points: [
      "Analyse des besoins",
      "Planification et suivi de projet (Agile/Scrum)",
      "Gestion de versions (Git)",
    ],
  },
  {
    slug: "collaborer",
    title: "Collaborer",
    description:
      "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
    icon: Users,
    levels: [
      "Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe",
      "Niveau 2 : Situer son rôle et ses missions au sein d’une équipe informatique",
      "Niveau 3 : Manager une équipe informatique",
    ],
    points: [
      "Méthodes Agiles",
      "Communication professionnelle",
      "Travail en équipe",
    ],
  },
];

export const projects = [
  {
    title: "Outfitter - Social Wardrobe",
    category: "Web Fullstack",
    description:
      "Plateforme de gestion de garde-robe et réseau social de partage d'outfits. Application complète avec algorithmes de recommandation et déploiement conteneurisé.",
    icon: Layout,
    tags: ["SvelteKit", "PostgreSQL", "Docker", "TailwindCSS"],
    github: "https://github.com/Outfitter-s/Web",
    linkedSkills: [
      "realiser",
      "optimiser",
      "administrer",
      "gerer",
      "conduire",
      "collaborer",
    ],
  },
  {
    title: "Easy Loc - Application BU",
    category: "Mobile & Stage",
    description:
      "Application mobile développée pour le Service de Documentation de Paul Sabatier. Elle permet aux étudiants de localiser les bibliothèques universitaires possédant un livre spécifique via son ISBN/ISSN.",
    icon: Smartphone,
    tags: ["Flutter", "Dart", "API REST", "Mobile"],
    github: "https://github.com/scd-appli/easy_loc",
    linkedSkills: [
      "realiser",
      "optimiser",
      "administrer",
      "gerer",
      "conduire",
      "collaborer",
    ],
  },
  {
    title: "Architecture Distribuée & Auth",
    category: "Web & Architecture",
    description:
      "Ecosystème complet d'applications interconnectées (R4.01). Séparation des responsabilités entre un service d'authentification, une API métier et un frontend Svelte.",
    icon: Layout,
    tags: ["Svelte", "PHP", "API REST", "Sécurité"],
    github: "https://github.com/ShowYL/r401-App",
    linkedSkills: ["collaborer", "realiser", "gerer"],
  },
  {
    title: "Gestion Immobilière",
    category: "Application Desktop",
    description:
      "Application complète de gestion locative pour propriétaires privés : gestion des locataires, régularisation des charges, déclaration d'impôts, suivi des travaux.",
    icon: Home,
    tags: ["Java", "MVC", "JDBC", "Gestion de projet"],
    github: "https://github.com/ShowYL/S3-01",
    linkedSkills: ["gerer", "realiser", "conduire", "collaborer"],
  },
  {
    title: "Projet Spring Boot",
    category: "Développement Backend",
    description:
      "Mise en pratique du framework Spring Boot. Configuration de base de données, injection de dépendances et création de services web.",
    icon: Code2,
    tags: ["Java", "Spring Boot", "Maven", "API"],
    github: "https://github.com/ShowYL/javaspringTP",
    linkedSkills: ["realiser", "optimiser"],
  },
  {
    title: "Chat Temps Réel",
    category: "Web Fullstack",
    description:
      "Application de messagerie instantanée permettant des échanges en temps réel entre utilisateurs. Gestion des sessions et des bases de données relationnelles.",
    icon: MessageSquare,
    tags: ["PHP", "JavaScript", "MySQL", "AJAX"],
    github: "https://github.com/ShowYL/Chat_r4a10",
    linkedSkills: ["gerer", "realiser"],
  },
  {
    title: "Gestion de Fromagerie",
    category: "Application Desktop",
    description:
      "Logiciel de gestion de stock et de vente pour une fromagerie. Premier projet d'envergure en Java avec interface graphique et persistance des données.",
    icon: Database,
    tags: ["Java", "Swing/AWT", "SQLite", "JDBC"],
    github: "https://github.com/ShowYL/S2.01-JAVA",
    linkedSkills: ["realiser", "optimiser", "gerer"],
  },
  {
    title: "Les Titans de Sète",
    category: "Web Fullstack",
    description:
      "Application web complète de gestion d'une équipe de rugby à 7 fictive. Comprend un système de chat en temps réel et une interface d'administration.",
    icon: Code2,
    tags: ["PHP", "JavaScript", "MySQL", "Web"],
    github: "https://github.com/ShowYL/LES-TITANS-DE-SETE",
    linkedSkills: ["collaborer", "realiser"],
  },
  {
    title: "Proxy FTP & Analyse Réseau",
    category: "Système & Réseau",
    description:
      "Mise en place d'un proxy FTP et outils d'analyse de classes IP. Projet technique bas niveau mettant en œuvre la programmation système.",
    icon: Server,
    tags: ["C", "Makefile", "Réseau", "FTP"],
    github: "https://github.com/ShowYL/PROXY-C",
    linkedSkills: ["administrer", "optimiser"],
  },
  {
    title: "Revue de Code & TDD",
    category: "Qualité Logicielle",
    description:
      "Ateliers pratiques sur le Test Driven Development (TDD) et la revue de code pour améliorer la qualité et la maintenabilité des applications Node.js.",
    icon: Code2,
    tags: ["TypeScript", "Jest", "TDD", "Node.js"],
    github: "https://github.com/ShowYL/ADVANCED-TDD-WITH-NODEJS",
    linkedSkills: ["optimiser", "realiser"],
  },
];
