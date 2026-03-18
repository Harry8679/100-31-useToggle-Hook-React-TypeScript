import { useToggle } from '../hooks';

export const ModalToggleDemo = () => {
  const [isOpen, toggle, , close] = useToggle(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Modal Toggle
      </h3>

      <div className="space-y-6">
        {/* Trigger Button */}
        <div className="text-center">
          <button
            onClick={toggle}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Ouvrir le Modal
          </button>
        </div>

        {/* Status */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              État du modal :
            </span>
            <span className={`px-4 py-2 rounded-full font-bold ${
              isOpen
                ? 'bg-green-500 text-white animate-pulse'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}>
              {isOpen ? 'Ouvert' : 'Fermé'}
            </span>
          </div>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            💡 Le toggle permet de gérer facilement l'ouverture/fermeture des modals.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Modal Title
              </h2>
              <button
                onClick={close}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ceci est un exemple de modal géré avec le hook useToggle. 
              Vous pouvez facilement ouvrir et fermer ce modal.
            </p>

            <div className="flex gap-3">
              <button
                onClick={close}
                className="flex-1 px-4 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={close}
                className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};