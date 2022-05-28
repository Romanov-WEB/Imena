import React from 'react';
import { NextPage } from 'next';
import LayoutUser from '@components/LayoutUser';
import MenuClient from '@components/MenuClient';
import SettingClient from '@components/SettingClient';

const Page: NextPage = () => {
    return (
        <>
            <LayoutUser>
                <>
                    <MenuClient />
                    <SettingClient />
                </>
            </LayoutUser>
        </>
    );
};

export default Page;
