import React, { useState, useEffect } from "react"

const AgeVerificationContext = React.createContext({
    hasEnoughAge: false,
    kickUserFromSite: () => { },
    isVerified: () => { },
});

export const AgeVerificationContextProvider = (props) => {
    const [hasEnoughAge, setHasEnoughAge] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const storedUserIsEnoughAgeInformation = localStorage.getItem('hasEnoughAge');

        if (storedUserIsEnoughAgeInformation === '1') {
            setHasEnoughAge(true);

        };
        setIsLoading(false)
    }, []);

    const ageVerificationHandler = () => {
        localStorage.setItem('hasEnoughAge', '1');
        setHasEnoughAge(true);
    };

    const kickUserFromSite = () => {
        window.location.href = 'https://www.google.com/'
    };

    return (
        <AgeVerificationContext.Provider
            value={{
                userHasEnoughAge: hasEnoughAge,
                isVerified: ageVerificationHandler,
                kickUser: kickUserFromSite,
            }}
        >
            {isLoading ? null : props.children}
        </AgeVerificationContext.Provider >
    );
};

export default AgeVerificationContext;