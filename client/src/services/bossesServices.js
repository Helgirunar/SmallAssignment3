import fetch from 'fetch-jsonp';


const bossesService = () =>{
    return{
        getBosses: (format) =>{
            return fetch('http://localhost:4500/api/bosses').then(resp => resp.json()).then(bosses => bosses.map(r => format(r)));
        }
    }
}
export default bossesService();
