'use client'

import Information from "./information"; 
import Privacy from "./privacy";
import Theme from "./theme";

export default function Details() {
    return <section className="w-full bg-white dark:bg-zinc-900 dark:border-zinc-900 dark:text-zinc-400 py-5 px-7 flex flex-col divide-y dark:divide-zinc-950 border rounded"> 
        <Information />
        
        <Privacy />
        
        <Theme /> 
    </section>
}