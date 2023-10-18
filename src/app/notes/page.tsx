import Hero from "@/components/hero/hero";
import { Fragment } from "react";

const Notes = () => {
    return (
        <Fragment>
            <Hero className="min-h-screen bg-base-300">
                <h1 className="text-center text-base-content font-semibold text-2xl lg:text-4xl">There are currently <span className="text-error">no</span> notes!</h1>
            </Hero>
        </Fragment>
    )
};

export default Notes;