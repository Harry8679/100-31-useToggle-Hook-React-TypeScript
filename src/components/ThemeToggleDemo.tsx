import { useToggle } from '../hooks';

export const ThemeToggleDemo = () => {
  const [isDark, toggleTheme] = useToggle(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Theme Toggle
      </h3>

      <div className="space-y-6">
        {/* Theme Preview */}
        <div
          className={`p-8 rounded-xl transition-all duration-300 ${
            isDark
              ? 'bg-gray-900 text-white'
              : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">
              {isDark ? '🌙' : '☀️'}
            </div>
            <h4 className="text-2xl font-bold mb-2">
              {isDark ? 'Mode Sombre' : 'Mode Clair'}
            </h4>
            <p className={isDark ? 'text-gray-400' : 'text-gray-700'}>
              Basculez entre les thèmes pour une meilleure expérience utilisateur
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            ☀️ Clair
          </span>
          <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full transition-colors ${
              isDark ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                isDark ? 'translate-x-8' : ''
              }`}
            />
          </button>
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            🌙 Sombre
          </span>
        </div>

        {/* Sample Content */}
        <div
          className={`p-6 rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-white border-2 border-gray-200'
          }`}
        >
          <h5 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Exemple de contenu
          </h5>
          <p className={isDark ? 'text-gray-400' : 'text-gray-700'}>
            Ce texte s'adapte automatiquement au thème sélectionné pour une meilleure lisibilité.
          </p>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            💡 Le toggle permet de basculer facilement entre thème clair et sombre.
          </p>
        </div>
      </div>
    </div>
  );
};