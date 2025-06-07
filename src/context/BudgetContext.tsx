import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, BudgetItem } from '../types/types';

interface BudgetContextType {
  budgetItems: BudgetItem[];
  addToBudget: (product: Product) => void;
  removeFromBudget: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearBudget: () => void;
  getTotalBudget: () => number;
  isInBudget: (productId: string) => boolean;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);

  useEffect(() => {
    const storedBudget = localStorage.getItem('budget');
    if (storedBudget) {
      setBudgetItems(JSON.parse(storedBudget));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budgetItems));
  }, [budgetItems]);

  const addToBudget = (product: Product) => {
    setBudgetItems((prevItems: BudgetItem[]) => {
      const existingItemIndex = prevItems.findIndex(
        (item: BudgetItem) => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromBudget = (productId: string) => {
    setBudgetItems((prevItems: BudgetItem[]) => 
      prevItems.filter((item: BudgetItem) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setBudgetItems((prevItems: BudgetItem[]) => {
      if (quantity < 1) {
        return prevItems.filter((item: BudgetItem) => item.product.id !== productId);
      }
      return prevItems.map((item: BudgetItem) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearBudget = () => {
    setBudgetItems([]);
  };

  const getTotalBudget = () => {
    return budgetItems.reduce(
      (total: number, item: BudgetItem) => total + item.product.price * item.quantity,
      0
    );
  };

  const isInBudget = (productId: string) => {
    return budgetItems.some((item: BudgetItem) => item.product.id === productId);
  };

  const value = {
    budgetItems,
    addToBudget,
    removeFromBudget,
    updateQuantity,
    clearBudget,
    getTotalBudget,
    isInBudget,
  };

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
};