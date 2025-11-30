import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
  type: 'medicine' | 'test';
}

export interface Appointment {
  id: string;
  docId: string;
  docName: string;
  dept: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  fee: number;
}

export interface HomeTest {
  id: string;
  testId: string;
  testName: string;
  price: number;
  name: string;
  phone: string;
  address: string;
  date: string;
}

interface CartContextType {
  cart: CartItem[];
  appointments: Appointment[];
  homeTests: HomeTest[];
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  addAppointment: (appointment: Appointment) => void;
  addHomeTest: (test: HomeTest) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [homeTests, setHomeTests] = useState<HomeTest[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('mc_cart');
    const savedAppts = localStorage.getItem('mc_appts');
    const savedTests = localStorage.getItem('mc_tests');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedAppts) setAppointments(JSON.parse(savedAppts));
    if (savedTests) setHomeTests(JSON.parse(savedTests));
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('mc_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('mc_appts', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('mc_tests', JSON.stringify(homeTests));
  }, [homeTests]);

  const addToCart = (item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const clearCart = () => setCart([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
  };

  const addHomeTest = (test: HomeTest) => {
    setHomeTests(prev => [...prev, test]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{
      cart,
      appointments,
      homeTests,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      addAppointment,
      addHomeTest,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
};
