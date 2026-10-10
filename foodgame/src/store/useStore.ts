import { create } from 'zustand';

export type VoucherItem = {
  id: string;
  name: string;
  value: number;
  type: 'voucher';
};

export type DishItem = {
  id: string;
  name: string;
  type: 'dish';
};

export type FragmentItem = {
  id: string;
  name: string;
  count: number;
  totalRequired: number;
  type: 'fragment';
};

export type InventoryItem = VoucherItem | DishItem | FragmentItem;

interface StoreState {
  totalSpent: number;
  availableTickets: number;
  inventory: {
    vouchers: VoucherItem[];
    dishes: DishItem[];
    fragments: FragmentItem[];
  };
  addSpend: (amount: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  totalSpent: 250,
  availableTickets: 2,
  inventory: {
    vouchers: [
      { id: 'v1', name: '免单大奖', value: 666, type: 'voucher' },
      { id: 'v2', name: '通关奖励', value: 50, type: 'voucher' },
      { id: 'v3', name: '基础代金券', value: 5, type: 'voucher' },
    ],
    dishes: [
      { id: 'd1', name: '烤鱼', type: 'dish' },
      { id: 'd2', name: '招牌五花肉', type: 'dish' },
    ],
    fragments: [
      { id: 'f1', name: '烤羊腿', count: 2, totalRequired: 3, type: 'fragment' },
      { id: 'f2', name: '掌中宝', count: 8, totalRequired: 10, type: 'fragment' },
    ],
  },
  addSpend: (amount: number) =>
    set((state) => {
      const newTotal = state.totalSpent + amount;
      const newTickets = Math.floor(newTotal / 100);
      return {
        totalSpent: newTotal,
        availableTickets: newTickets,
      };
    }),
}));
