import {ADD_BOSS} from '../constants';

export const addBoss = boss =>{
  console.log(boss);
    return{
        type: ADD_BOSS,
        payload: boss
    };
};
