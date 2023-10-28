const Divider = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            {children}
        </div>
    );
};

export default Divider;