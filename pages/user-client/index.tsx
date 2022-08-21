import React, { useMemo } from 'react';
import { NextPage } from 'next';
import LayoutUser from '@components/LayoutUser';
import MenuClient from '@components/MenuClient';
import SettingClient from '@components/SettingClient';
import CardMaster from '@components/CardMaster';
import css from 'styles/UserClient.module.scss';
import { observer } from 'mobx-react';
import mockData from 'src/mock/serverMock/data.json';
import menuClientIndex from '@store/MenuClientStore';

const Page: NextPage = () => {
    const { loveMaster } = mockData.userClient;
    const TabMaster: JSX.Element = (
        <div className={css.wrapperCardMaster}>
            {loveMaster.map((master, index) => (
                <CardMaster name={master.name} phone={master.phone} email={master.email} key={index} />
            ))}
        </div>
    );
    const TabContents: JSX.Element[] = useMemo(() => [<SettingClient />, TabMaster], []);
    return (
        <LayoutUser>
            <>
                <MenuClient menuClientIndex={menuClientIndex} />
                <div className={css.content}>{TabContents[menuClientIndex.index]}</div>
            </>
        </LayoutUser>
    );
};

export default observer(Page);
