import { Link } from "@/navigation";
import { ChevronLeftOutlined, RocketLaunchOutlined } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function Actions() {
    const t = useTranslations('Modules.Preferences')

    return <section className="flex items-center flex-wrap gap-5 justify-between w-full">
        <Link 
            href="/"
            className="p-2 w-full md:w-auto flex items-center gap-3 rounded-lg bg-white dark:bg-zinc-950 border dark:text-zinc-400 dark:border-zinc-900 transition-all"
        >
            <ChevronLeftOutlined />

            { t('header.back') }
        </Link>

        <button className="p-2 flex w-full md:w-auto items-center gap-3 rounded-lg border bg-white transition-all dark:text-zinc-400 dark:bg-zinc-950 dark:border-zinc-900">
            <RocketLaunchOutlined />

            { t('header.view_profile') }
        </button> 
    </section>
}