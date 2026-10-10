import { useStore } from '../store/useStore';
import { Receipt, Ticket, PlusCircle } from 'lucide-react';

export const DashboardView = () => {
  const { totalSpent, availableTickets, addSpend } = useStore();

  const SPEND_THRESHOLD = 100;
  const progress = totalSpent % SPEND_THRESHOLD;
  const progressPercent = (progress / SPEND_THRESHOLD) * 100;

  const handleAddSpend = () => {
    addSpend(50);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Ticket Status */}
      <div className="bg-cyber-darker border border-cyber-cyan/30 rounded-xl p-4 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-cyber-cyan font-bold flex items-center gap-2">
            <Ticket className="w-5 h-5" />
            我的抽奖券
          </h2>
          <span className="text-2xl font-black text-cyber-cyan drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
            x {availableTickets}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-cyber-text/70">
            <span>当前累计消费: ¥{totalSpent}</span>
            <span>距下次抽奖还差: ¥{SPEND_THRESHOLD - progress}</span>
          </div>
          <div className="w-full bg-cyber-gray/50 h-3 rounded-full overflow-hidden border border-cyber-gray">
            <div
              className="bg-gradient-to-r from-cyber-cyan/50 to-cyber-cyan h-full rounded-full transition-all duration-500 relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock Receipt */}
      <div className="bg-[#1a1a1a] border border-cyber-gray rounded-lg p-5 font-mono relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-cyan"></div>
        <h3 className="text-center text-cyber-text/80 text-lg border-b border-dashed border-cyber-gray pb-3 mb-3 flex items-center justify-center gap-2">
          <Receipt className="w-5 h-5 text-cyber-pink" />
          当前订单模拟
        </h3>

        <div className="space-y-3 text-sm text-cyber-text/90 mb-6">
          <div className="flex justify-between">
            <span>招牌五花肉 x10</span>
            <span>¥ 30.00</span>
          </div>
          <div className="flex justify-between">
            <span>夺命大乌苏 x2</span>
            <span>¥ 20.00</span>
          </div>
        </div>

        <div className="border-t border-dashed border-cyber-gray pt-3 flex justify-between items-end">
          <span className="text-cyber-text/70 text-sm">总计 (本次)</span>
          <span className="text-2xl font-bold text-cyber-pink drop-shadow-[0_0_8px_rgba(255,0,255,0.4)]">
            ¥ 50.00
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAddSpend}
          className="w-full mt-6 bg-cyber-dark border border-cyber-pink/50 text-cyber-pink py-3 rounded flex items-center justify-center gap-2 hover:bg-cyber-pink/10 transition-colors active:scale-95"
        >
          <PlusCircle className="w-5 h-5" />
          <span className="font-bold tracking-wider">模拟买单 (¥50)</span>
        </button>
      </div>
    </div>
  );
};
