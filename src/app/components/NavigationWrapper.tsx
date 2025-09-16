'use client';
import React from 'react';
import LoadingScreen from './LoadingScreen';
import { usePageTransition } from '../hooks/usePageTransition';

interface NavigationWrapperProps {
    children: React.ReactNode;
}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({ children }) => {
    const { isLoading, completeTransition } = usePageTransition();

    return (
        <>
            <LoadingScreen isLoading={isLoading} onComplete={completeTransition} />
            {children}
        </>
    );
};

export default NavigationWrapper;

export const useTransitionLink = () => {
    const { navigateWithTransition } = usePageTransition();

    const TransitionLink = ({ href, children, className, onClick, ...props }: {
        href: string;
        children: React.ReactNode;
        className?: string;
        onClick?: () => void;
        [key: string]: any;
    }) => {
        const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            if (onClick) onClick();
            navigateWithTransition(href);
        };

        return (
            <a href={href} onClick={handleClick} className={className} {...props}>
                {children}
            </a>
        );
    };

    return { TransitionLink, navigateWithTransition };
};