interface BurgerMenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenuButton({isOpen, toggleMenu}: BurgerMenuButtonProps) {
    return (
        <div className="flex justify-end md:hidden">
            <button className="text-white" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                    )}
                </svg>
            </button>
        </div>
    );
}