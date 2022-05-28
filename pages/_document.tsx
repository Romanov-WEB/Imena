import { Head, Html, Main, NextScript } from 'next/document';

const urlIcon: string = './icons/';

export default function MyDocument(): JSX.Element {
    return (
        <Html lang='ru'>
            <Head>
                <meta name='description' content='Generated by create next app' />
                <link type='image/png' href={urlIcon + 'favicon.png'} rel='icon' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
