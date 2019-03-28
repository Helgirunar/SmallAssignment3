import {ADD_BOSS} from '../constants';

export const addBoss = boss =>{
    return{
        type: ADD_BOSS,
        payload: boss
    }
}