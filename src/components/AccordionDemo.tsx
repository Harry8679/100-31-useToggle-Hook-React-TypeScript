import { useToggle } from '../hooks';
import type { AccordionItem } from '../types';

export const AccordionDemo = () => {
  const items: AccordionItem[] = [
    {
      id: '1',
      title: 'Qu\'est-ce que React ?',
      content: 'React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Elle permet de construire des composants réutilisables et de gérer l\'état de l\'application de manière efficace.',
      icon: '⚛️',
    },
    {
      id: '2',
      title: 'Qu\'est-ce qu\'un Hook ?',
      content: 'Les Hooks sont des fonctions qui permettent d\'utiliser l\'état et d\'autres fonctionnalités de React dans des composants fonctionnels. useState, useEffect, et useToggle sont des exemples de Hooks.',
      icon: '🎣',
    },
    {
      id: '3',
      title: 'Pourquoi TypeScript ?',
      content: 'TypeScript ajoute du typage statique à JavaScript, ce qui permet de détecter les erreurs plus tôt, d\'améliorer l\'autocomplétion dans l\'IDE, et de rendre le code plus maintenable.',
      icon: '📘',
    },
    {
      id: '4',
      title: 'Qu\'est-ce que Tailwind CSS ?',
      content: 'Tailwind CSS est un framework CSS utility-first qui permet de construire rapidement des interfaces modernes sans écrire de CSS personnalisé. Il offre des classes prédéfinies pour tous les styles.',
      icon: '🎨',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Accordion Toggle
      </h3>

      <div className="space-y-3">
        {items.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          💡 Cliquez sur chaque section pour afficher/masquer son contenu.
        </p>
      </div>
    </div>
  );
};

const AccordionItem = ({ item }: { item: AccordionItem }) => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <span className="font-bold text-gray-800 dark:text-white text-left">
            {item.title}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 animate-fade-in">
          <p className="text-gray-700 dark:text-gray-300">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};