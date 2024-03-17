import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const noto = Noto_Sans({ 
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--noto-sans-font',
});

export const centuryGothic = localFont({
    src: [
        {
            path: '../assets/fonts/centurygothic_bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--century-gothic-font',
});