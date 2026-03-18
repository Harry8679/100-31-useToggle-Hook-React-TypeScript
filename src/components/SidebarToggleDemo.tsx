import { useToggle } from '../hooks';

export const SidebarToggleDemo = () => {
  const [isOpen, toggle, , close] = useToggle(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Sidebar Toggle
      </h3>

      <div className="space-y-6">
        {/* Demo Area */}
        <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
          {/* Main Content */}
          <div className="h-full p-6 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={toggle}
                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                Page Principale
              </h4>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <p className="text-center">
                Cliquez sur le bouton menu pour ouvrir la sidebar
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`absolute top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-2xl transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold">Menu</h4>
                <button
                  onClick={close}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">
                {['Dashboard', 'Projects', 'Team', 'Calendar', 'Settings'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              onClick={close}
              className="absolute inset-0 bg-black/50 transition-opacity"
            />
          )}
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Cliquez sur le menu hamburger pour ouvrir/fermer la sidebar.
          </p>
        </div>
      </div>
    </div>
  );
};