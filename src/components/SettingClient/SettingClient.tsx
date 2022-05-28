import React from 'react';
import css from './SettingClient.module.scss';
import SettingInput from '@components/SettingInput';

export function SettingClient() {
    return (
        <div className={css.blockSetting}>
            <div className={css.settingContainer}>
                <div className={css.infoContain}>
                    <h2>Личная информация</h2>
                    <SettingInput label={'Имя и фамилия'} text={'Ксения Соловьёва'} name={'name'} />
                    <SettingInput label={'Телефон'} text={'+7 (987) 654-32-10'} name={'phone'} />
                    <SettingInput label={'Email'} text={'abc@xyz.com'} name={'email'} />
                    <SettingInput label={'Аккаунт во ВКонтакте'} text={'https://vk.com/'} name={'vk'} />
                    <SettingInput label={'Аккаунт в Telegram'} text={'Выходной'} name={'Telegram'} />
                </div>
                <div className={css.passwordContain}>
                    <h2>Сменить пароль</h2>
                    <SettingInput label={'Старый пароль'} text={''} password />
                    <SettingInput label={'Новый пароль'} text={''} password />
                    <SettingInput label={'Повторите новый пароль'} name={'password'} text={''} password />
                </div>
            </div>
            <br />
            <br />
            <button className={css.btnSetting}>Сохранить изменения</button>
        </div>
    );
}
