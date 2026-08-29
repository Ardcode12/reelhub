import { createContext, useContext, useState } from 'react';

const WhatsAppContext = createContext(null);

export function WhatsAppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openWhatsAppModal = (msg = '') => {
    setMessage(msg);
    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppContext.Provider value={{ isOpen, message, openWhatsAppModal, closeWhatsAppModal }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
}
