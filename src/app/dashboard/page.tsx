import Hero from "@/components/hero"
import Image from "next/image";
import { Fragment } from "react";

const Dashboard = () => {
    return (
        <Fragment>
            <Hero>
                <Image
                    alt="some picture"
                    src="/milan.jpg"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">About</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </Hero>
            <Hero colour="bg-accent">
                <div>
                    <h1 className="text-5xl font-bold">Maybe a bit about the university</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <Image
                    alt="some picture"
                    src="/milan.jpg"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl"
                />
            </Hero>
        </Fragment>
    );
};

export default Dashboard;