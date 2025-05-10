export type PlateType = "normal" | "full";

export type PlateProps = {
    className?: string;
    children: React.ReactNode;
    rounded?: PlateType;
};
