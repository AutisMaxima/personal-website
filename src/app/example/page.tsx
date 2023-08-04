import TextReveal from "./text-reveal";
import { Fragment } from "react";
const Example = () => {

    return (
            <div className="flex h-screen justify-center items-center">
                <div className="text-center">
                    <TextReveal text="Welcome Back!" />
                </div>
            </div>
    );
};

export default Example;