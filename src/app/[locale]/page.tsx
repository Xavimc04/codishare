import { useTranslations } from 'next-intl';
import {Link} from '../../navigation'; 
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Index({
    params: {
        locale
    }
} : {
    params: {
        locale: string;
    };
}) {
    unstable_setRequestLocale(locale);
    
    const t = useTranslations('Dashboard');

    return <div className='text-red-500'>  
        <Link href='/auth/sign-up'>
            { t('sign-up') }
        </Link>
    </div>
}