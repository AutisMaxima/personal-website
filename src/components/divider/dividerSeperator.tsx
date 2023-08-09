const DividerSeperator = ({
    text = ""
}: {
    text: string
}) => {
    return (
        <div className="divider lg:divider-horizontal">{text}</div>
    );
};

export default DividerSeperator;