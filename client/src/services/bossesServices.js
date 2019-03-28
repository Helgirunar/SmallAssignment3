import fetch from 'fetch-jsonp';

const getBosses = 'http://localhost:4500/api/bosses';
const bossesService = () =>{
    return{
        getBosses: (format) =>{
            return fetch(getBosses).then(resp => resp.json()).then(bosses => bosses.map(r => format(r)));
        }
    }
}
export default bossesService();
