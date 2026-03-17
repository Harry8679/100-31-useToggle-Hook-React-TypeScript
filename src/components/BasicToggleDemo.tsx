import { useToggle } from '../hooks';

export const BasicToggleDemo = () => {
  const [isOn, toggle, setTrue, setFalse] = useToggle(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Toggle Basique
      </h3>

      <div className="space-y-6">
        {/* Toggle Visual */}
        <div className="flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <div className="text-center">
            <div className="text-8xl mb-4">
              {isOn ? '💡' : '🌙'}
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white">
              {isOn ? 'ON' : 'OFF'}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={toggle}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            Toggle
          </button>
          <button
            onClick={setTrue}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            Set ON
          </button>
          <button
            onClick={setFalse}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            Set OFF
          </button>
        </div>

        {/* Status */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              État actuel :
            </span>
            <span className={`px-4 py-2 rounded-full font-bold ${
              isOn
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}>
              {isOn ? 'Activé' : 'Désactivé'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};