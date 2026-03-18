import { useState } from 'react';
import { useToggle } from '../hooks';

export const PasswordToggleDemo = () => {
  const [password, setPassword] = useState('');
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Password Visibility Toggle
      </h3>

      <div className="space-y-6">
        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Mot de passe
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-3 pr-12 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
            />
            <button
              onClick={toggleShowPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              type="button"
            >
              {showPassword ? (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">
              Visibilité
            </div>
            <div className="text-xl font-bold text-blue-600 dark:text-blue-300">
              {showPassword ? 'Visible' : 'Masqué'}
            </div>
          </div>

          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <div className="text-sm text-purple-700 dark:text-purple-400 mb-1">
              Longueur
            </div>
            <div className="text-xl font-bold text-purple-600 dark:text-purple-300">
              {password.length} caractères
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Mot de passe saisi :
          </div>
          <div className="font-mono text-lg text-gray-800 dark:text-white">
            {showPassword ? password || '(vide)' : '•'.repeat(password.length) || '(vide)'}
          </div>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Cliquez sur l'icône œil pour basculer la visibilité du mot de passe.
          </p>
        </div>
      </div>
    </div>
  );
};