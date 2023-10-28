const DividerItem = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            {children}
        </div>
    );
}

export default DividerItem