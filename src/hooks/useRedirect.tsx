import Router from 'next/router';
import useLocalStorage from './useLocalStorage';

export default function useRedirect(redirectTo: string, localStoreToken: string): boolean | Promise<boolean> {
    const [token, setToken] = useLocalStorage(localStoreToken);
    if (Boolean(token)) {
        return Router.push(redirectTo);
    } else {
        return token;
    }
}
