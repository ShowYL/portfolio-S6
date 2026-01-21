"use client";

import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a service like Formspree
    window.location.href = `mailto:yannlacaze31@gmail.com?subject=Contact de ${formState.name}&body=${formState.message}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Me Contacter</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Vous avez un projet, une opportunité ou souhaitez simplement échanger ? 
          N'hésitez pas à me contacter via le formulaire ci-dessous ou sur mes réseaux.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
            <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Email</p>
                  <p className="font-medium">yannlacaze31@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Localisation</p>
                  <p className="font-medium">Toulouse, France</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Téléphone</p>
                  <p className="font-medium">07 67 38 21 01</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Suivez-moi</h4>
              <div className="flex gap-4">
                <a href="https://github.com/ShowYL" target="_blank" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yann-lacaze-244424296/" target="_blank" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="order-1 lg:order-2">
          <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Nom Complet</label>
              <input
                required
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Adresse Email</label>
              <input
                required
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Message</label>
              <textarea
                required
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              <Send className="w-5 h-5" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
