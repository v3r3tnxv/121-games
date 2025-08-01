// @/shared/assets/icons/Dice2.tsx

export const DiceTwo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect x="3" y="3" width="58" height="58" rx="13" stroke="currentColor" stroke-width="6" />
        <circle cx="20" cy="44" r="5.5" fill="currentColor" stroke="currentColor" />
        <circle cx="44" cy="20" r="5.5" fill="currentColor" stroke="currentColor" />
    </svg>
);
