import { Home, Gift, Briefcase } from 'lucide-react';

export type TabType = 'dashboard' | 'game' | 'inventory';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const tabs = [
    { id: 'dashboard' as TabType, label: '首页', icon: Home },
    { id: 'game' as TabType, label: '活动', icon: Gift },
    { id: 'inventory' as TabType, label: '背包', icon: Briefcase },
  ];

  return (
    <div className="absolute bottom-0 w-full h-16 bg-cyber-darker border-t border-cyber-gray flex justify-around items-center px-2 pb-safe">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`flex flex-col items-center justify-center w-20 h-full transition-colors duration-200 ${
              isActive ? 'text-cyber-cyan' : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            <Icon
              className={`w-6 h-6 mb-1 ${
                isActive ? 'drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]' : ''
              }`}
            />
            <span className="text-[10px] font-medium tracking-wider">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
