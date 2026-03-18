import { useToggle } from '../hooks';

export const FeatureTogglesDemo = () => {
  const [notifications, toggleNotifications] = useToggle(true);
  const [darkMode, toggleDarkMode] = useToggle(false);
  const [autoSave, toggleAutoSave] = useToggle(true);
  const [analytics, toggleAnalytics] = useToggle(false);

  const features = [
    {
      name: 'Notifications',
      description: 'Recevoir des notifications push',
      enabled: notifications,
      toggle: toggleNotifications,
      icon: '🔔',
    },
    {
      name: 'Mode Sombre',
      description: 'Interface en mode sombre',
      enabled: darkMode,
      toggle: toggleDarkMode,
      icon: '🌙',
    },
    {
      name: 'Sauvegarde Auto',
      description: 'Sauvegarder automatiquement',
      enabled: autoSave,
      toggle: toggleAutoSave,
      icon: '💾',
    },
    {
      name: 'Analytiques',
      description: 'Partager des données d\'usage',
      enabled: analytics,
      toggle: toggleAnalytics,
      icon: '📊',
    },
  ];

  const enabledCount = features.filter((f) => f.enabled).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Feature Toggles
      </h3>

      <div className="space-y-6">
        {/* Summary */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Fonctionnalités activées :
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {enabledCount}/{features.length}
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {feature.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={feature.toggle}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  feature.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                    feature.enabled ? 'translate-x-7' : ''
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            💡 Les feature toggles permettent d'activer/désactiver facilement des fonctionnalités.
          </p>
        </div>
      </div>
    </div>
  );
};