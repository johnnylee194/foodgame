import { useState } from 'react';
import { useStore } from '../store/useStore';
import type { VoucherItem, DishItem, FragmentItem } from '../store/useStore';
import { TicketPercent, UtensilsCrossed, Puzzle } from 'lucide-react';

type FilterType = 'voucher' | 'dish' | 'fragment';

export const InventoryView = () => {
  const { inventory } = useStore();
  const [activeFilter, setActiveFilter] = useState<FilterType>('voucher');

  const filters = [
    { id: 'voucher' as FilterType, label: '代金券', icon: TicketPercent },
    { id: 'dish' as FilterType, label: '完整菜品', icon: UtensilsCrossed },
    { id: 'fragment' as FilterType, label: '碎片', icon: Puzzle },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Segmented Control */}
      <div className="p-4 pb-2">
        <div className="flex bg-cyber-darker p-1 rounded-lg border border-cyber-gray">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm transition-all ${
                  isActive
                    ? 'bg-cyber-gray text-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.2)]'
                    : 'text-cyber-text/60 hover:text-cyber-text'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyber-cyan' : ''}`} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto p-4 pt-2 space-y-3">
        {activeFilter === 'voucher' && inventory.vouchers.map((item: VoucherItem) => (
          <div key={item.id} className="bg-gradient-to-r from-cyber-dark to-[#2a1a2a] border border-cyber-pink/30 rounded-xl p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-cyber-pink/20 p-2 rounded-lg">
                <TicketPercent className="w-6 h-6 text-cyber-pink" />
              </div>
              <span className="font-medium text-cyber-text">{item.name}</span>
            </div>
            <span className="text-xl font-bold text-cyber-pink drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
              ¥{item.value}
            </span>
          </div>
        ))}

        {activeFilter === 'dish' && inventory.dishes.map((item: DishItem) => (
          <div key={item.id} className="bg-cyber-darker border border-cyber-cyan/30 rounded-xl p-4 flex items-center gap-3 shadow-lg">
            <div className="bg-cyber-cyan/20 p-2 rounded-lg">
              <UtensilsCrossed className="w-6 h-6 text-cyber-cyan" />
            </div>
            <span className="font-medium text-cyber-text">{item.name}</span>
          </div>
        ))}

        {activeFilter === 'fragment' && inventory.fragments.map((item: FragmentItem) => {
          const progressPercent = (item.count / item.totalRequired) * 100;
          const isReady = item.count >= item.totalRequired;

          return (
            <div key={item.id} className="bg-cyber-darker border border-cyber-gray rounded-xl p-4 shadow-lg flex flex-col gap-3 relative overflow-hidden">
              {isReady && <div className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan shadow-neon-cyan"></div>}

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isReady ? 'bg-cyber-cyan/20' : 'bg-gray-800'}`}>
                    <Puzzle className={`w-5 h-5 ${isReady ? 'text-cyber-cyan' : 'text-gray-400'}`} />
                  </div>
                  <span className="font-medium">{item.name} 碎片</span>
                </div>
                <span className={`text-sm font-mono ${isReady ? 'text-cyber-cyan font-bold' : 'text-cyber-text/60'}`}>
                  {item.count} / {item.totalRequired}
                </span>
              </div>

              <div className="w-full bg-cyber-dark h-2.5 rounded-full overflow-hidden border border-cyber-gray/50">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${isReady ? 'bg-cyber-cyan shadow-neon-cyan' : 'bg-cyber-pink/70'}`}
                  style={{ width: `${Math.min(progressPercent, 100)}%` }}
                ></div>
              </div>

              {isReady && (
                <button className="mt-2 w-full bg-cyber-cyan/10 hover:bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan rounded py-1.5 text-sm font-bold tracking-wider transition-colors">
                  立即合成
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
