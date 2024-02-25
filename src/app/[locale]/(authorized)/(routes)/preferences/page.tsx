import Details from "@/components/layouts/preferences/elements/details/details";
import Selector from "@/components/layouts/preferences/elements/selector";
import { Fragment } from "react";

export default function Page() {
    return <Fragment>
        <Selector
            route="/preferences"
        />

        <Details />
    </Fragment>
}