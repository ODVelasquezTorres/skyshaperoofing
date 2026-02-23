import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [isTextModalOpen, setIsTextModalOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const openTextModal = () => {
        setIsEmailModalOpen(false);
        setIsTextModalOpen(true);
    };

    const openEmailModal = () => {
        setIsTextModalOpen(false);
        setIsEmailModalOpen(true);
    };

    const closeAllModals = () => {
        setIsTextModalOpen(false);
        setIsEmailModalOpen(false);
    };

    const toggleTextModal = () => {
        setIsEmailModalOpen(false);
        setIsTextModalOpen(!isTextModalOpen);
    };

    const toggleEmailModal = () => {
        setIsTextModalOpen(false);
        setIsEmailModalOpen(!isEmailModalOpen);
    };

    return (
        <ContactContext.Provider value={{
            isTextModalOpen,
            isEmailModalOpen,
            openTextModal,
            openEmailModal,
            closeAllModals,
            toggleTextModal,
            toggleEmailModal,
            setIsTextModalOpen,
            setIsEmailModalOpen
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};
