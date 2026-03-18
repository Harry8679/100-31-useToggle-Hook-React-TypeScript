import { BasicToggleDemo } from './BasicToggleDemo';
import { ThemeToggleDemo } from './ThemeToggleDemo';
import { SidebarToggleDemo } from './SidebarToggleDemo';
import { ModalToggleDemo } from './ModalToggleDemo';
import { AccordionDemo } from './AccordionDemo';
import { PasswordToggleDemo } from './PasswordToggleDemo';
import { FeatureTogglesDemo } from './FeatureTogglesDemo';

export const ToggleDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🎮 useToggle Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 31/100 • Toggle Pattern
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Gestion simple et élégante des états booléens
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicToggleDemo />
            <ThemeToggleDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SidebarToggleDemo />
            <ModalToggleDemo />
          </div>

          {/* Row 3 */}
          <AccordionDemo />

          {/* Row 4 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <PasswordToggleDemo />
            <FeatureTogglesDemo />
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Simple</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    API intuitive et facile
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Toggle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Basculer entre états
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Set True/False</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contrôle explicite
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Mémorisé</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    useCallback pour performance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Réutilisable</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hook custom universel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useToggle } from './hooks';

const [isOn, toggle] = useToggle(false);

return (
  <button onClick={toggle}>
    {isOn ? 'ON' : 'OFF'}
  </button>
);`}
                </pre>
              </div>

              {/* With all functions */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Avec toutes les fonctions :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isOpen, toggle, setTrue, setFalse] = useToggle(false);

// Toggle
<button onClick={toggle}>Toggle</button>

// Ouvrir explicitement
<button onClick={setTrue}>Ouvrir</button>

// Fermer explicitement
<button onClick={setFalse}>Fermer</button>`}
                </pre>
              </div>

              {/* Modal example */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Exemple : Modal :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isModalOpen, toggleModal, openModal, closeModal] = useToggle();

return (
  <>
    <button onClick={openModal}>Ouvrir Modal</button>
    
    {isModalOpen && (
      <Modal onClose={closeModal}>
        <h2>Titre du Modal</h2>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    )}
  </>
);`}
                </pre>
              </div>

              {/* Sidebar example */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Exemple : Sidebar :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isSidebarOpen, toggleSidebar, , closeSidebar] = useToggle();

return (
  <>
    <button onClick={toggleSidebar}>☰</button>
    
    <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
      {/* Contenu de la sidebar */}
    </Sidebar>
  </>
);`}
                </pre>
              </div>

              {/* Feature flags */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Exemple : Feature Flags :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [notifications, toggleNotifications] = useToggle(true);
const [darkMode, toggleDarkMode] = useToggle(false);
const [analytics, toggleAnalytics] = useToggle(false);

return (
  <Settings>
    <Toggle enabled={notifications} onChange={toggleNotifications}>
      Notifications
    </Toggle>
    <Toggle enabled={darkMode} onChange={toggleDarkMode}>
      Mode Sombre
    </Toggle>
    <Toggle enabled={analytics} onChange={toggleAnalytics}>
      Analytiques
    </Toggle>
  </Settings>
);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎨</span> Interface
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Modals et dialogues</li>
                  <li>• Sidebars et drawers</li>
                  <li>• Dropdowns et menus</li>
                  <li>• Accordions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>⚙️</span> Fonctionnalités
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Feature flags</li>
                  <li>• Theme switching</li>
                  <li>• Password visibility</li>
                  <li>• Notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📝</span> Formulaires
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Checkboxes</li>
                  <li>• Switch toggles</li>
                  <li>• Field visibility</li>
                  <li>• Advanced options</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎮</span> État
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Loading states</li>
                  <li>• Edit mode</li>
                  <li>• Expand/Collapse</li>
                  <li>• Active/Inactive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};