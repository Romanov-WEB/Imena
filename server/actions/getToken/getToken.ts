import axios from 'axios';

export async function getToken(token: any): Promise<boolean> {
    try {
        const dataClient = await axios.get('http://localhost:3009/clients');
        const answerToken = dataClient.data.filter((clietn: any) => clietn.token === token);
        return answerToken.length === 1 ? true : false;
    } catch (e) {
        console.log(e);
        return false;
    }
}
