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
import ServicesCard from '@components/ServicesCard';
import { getToken } from '../../server/actions/getToken/getToken';

const Page: NextPage = () => {
    const { loveMaster, service } = mockData.userClient;

    const TabMaster: JSX.Element = (
        <div className={css.wrapperContent}>
            {loveMaster.map((master, index) => (
                <CardMaster name={master.name} phone={master.phone} email={master.email} key={index} />
            ))}
        </div>
    );

    const TabService = (
        <div className={css.wrapperContent}>
            {service.map((item, i) => (
                <ServicesCard
                    key={i}
                    phone={item.phone}
                    email={item.email}
                    name={item.name}
                    data={item.data}
                    address={item.address}
                    price={item.price}
                    status={item.status}
                    topic={item.topic}
                />
            ))}
        </div>
    );

    const TabContents: JSX.Element[] = useMemo(() => [TabService, TabMaster, <></>, <SettingClient />], []);

    return (
        <LayoutUser>
            <>
                <MenuClient />
                <div className={css.content}>{TabContents[menuClientIndex.index]}</div>
            </>
        </LayoutUser>
    );
};

export default observer(Page);
