'use client'

import { useState } from "react";
import { Link } from "@/navigation"; 
import { validate } from "@/services/validation/forms/sign-up";
import { useNotifications } from "@/components/hooks/useNotifications";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';

export default function Form({
    steps,
    buttonTranslations
} : {
    steps: React.ReactNode[][],
    buttonTranslations: {
        next: string,
        previous: string,
        start: string,
        alreadyHaveAccount: string,
        finish: string
    }
}) {
    const addNotification = useNotifications(); 
    const [step, setStep] = useState(0)

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setStep((step + 1) > (steps.length - 1) ? step : step + 1)
    }

    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setStep((step - 1) < 0 ? step : step - 1)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget);

        const isValid = validate(data); 

        if(isValid !== true) addNotification({
            type: "ERROR", 
            icon: <PriorityHighOutlinedIcon />,
            message: isValid
        })
    }

    return <form onSubmit={ handleSubmit } className="flex flex-col gap-3 mt-7">
        {
            steps[step].map((step) => {
                return step
            })
        }

        <section className="flex mt-3 w-full gap-4">
            {
                step == 0 && <Link className="bg-indigo-500 text-center dark:bg-indigo-600/40 dark:border-[1px] dark:border-indigo-700 text-sm text-semibold flex-1 text-white rounded-full py-3 hover:bg-indigo-700 hover:scale-95 transition" href='/'>
                    { buttonTranslations.alreadyHaveAccount }
                </Link>
            }

            {
                step != 0 && <button onClick={ handlePrevious } className="bg-indigo-500 dark:bg-indigo-600/40 dark:border-[1px] dark:border-indigo-700 text-sm text-semibold flex-1 text-white rounded-full py-3 hover:bg-indigo-700 hover:scale-95 transition">
                    { buttonTranslations.previous }
                </button>
            }

            {
                step == (steps.length - 1) ? <button type="submit" className="border border-inset border-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600/40 text-indigo-500 hover:text-white text-sm flex-1 rounded-full py-3 hover:scale-95 transition-all">
                    { buttonTranslations.finish }
                </button> : <button onClick={ handleNext } className="border border-inset border-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600/40 text-indigo-500 hover:text-white text-sm flex-1 rounded-full py-3 hover:scale-95 transition-all">
                    { 
                        step == 0 ? 
                            buttonTranslations.start 
                        : buttonTranslations.next 
                    }
                </button> 
            }
        </section>
    </form> 
}