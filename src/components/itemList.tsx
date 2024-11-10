import React from 'react';

interface ItemListProps {
  name: string;
  icon: React.ReactNode;
  estadoToggle: boolean;
}

export function ItemList({ name, icon, estadoToggle}: ItemListProps) {
  const [options, setOptions] = React.useState(estadoToggle);

  return (
        <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
          <div className="flex items-center gap-3">
            {icon}
            <span>{name}</span>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={options}
              onChange={() => setOptions(options)}
              className="sr-only peer"
              id="duo"
            />
            <label className="block w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" htmlFor="duo"></label>
          </div>
        </div>
  );
}