import React, { createContext, useCallback, useContext, useState } from 'react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 999, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {toasts.map(t => (
                    <div key={t.id} style={{
                        background: t.type === 'success' ? '#28a745' : '#dc3545',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: 4,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        animation: 'fadeIn 0.3s ease',
                        minWidth: 220,
                    }}>
                        {t.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);