import Counter from "components/Counter";
import { Fragment } from "react";
export default function Section({ title}) {
    return (
        <Fragment><p>{ title }</p>
        <Counter /></Fragment>
        
    )
}