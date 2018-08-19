import { FETCH_EXPERIENCE, FETCH_HOMEDATA, FETCH_PROJECTS } from './types';
import Api from '../services/api-request';
const ROOT_URL = `https://apikarkiritish.000webhostapp.com/wp-json/wp/v2`;

export function fetchHomeData() {
    const url = `${ROOT_URL}/pages/70`;
    return {
        type: FETCH_HOMEDATA,
        url
    }
}

export function fetchProjects(){
    const url = `${ROOT_URL}/projects`;
    return {
        type: FETCH_PROJECTS,
        url
    }
}

export function fetchExperience(){
    const url = `${ROOT_URL}/experiences`;

    const experiences = Api.get(url).then(data =>{
        return data.body;
    });

    return {
        type: FETCH_EXPERIENCE,
        payload: experiences
    }
}