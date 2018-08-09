import Api from '../services/api-request';
import { resolve } from 'url';
import { merge } from 'rxjs/operators';
const ROOT_URL = `https://apikarkiritish.000webhostapp.com/wp-json/wp/v2`;

export const FETCH_HOMEDATA = 'FETCH_HOMEDATA';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_EXPERIENCE ='FETCH_EXPERIENCE';

export function fetchHomeData() {
    const url = `${ROOT_URL}/pages/70`;

    const homeData = Api.get(url).then(data =>{
        return data.body;
    });

    const imgData = homeData.then(data =>{
        return Api.get(data._links['wp:featuredmedia'][0].href);
    }).then(data =>{
        return data.body.guid;
    }).then((guid)=>{
        let merged =Object.assign(homeData, guid);
        console.log(merged, guid);
       return merged;
    });

    const payload = Promise.all([homeData, imgData])
                    .then(([homeData, imgData]) => {
                        return {homeData, imgData}
                    });
    return {
        type: FETCH_HOMEDATA,
        payload: payload
    }
}

export function fetchProjects(){
    const url = `${ROOT_URL}/projects`;

    const projects = Api.get(url).then(data =>{
        return data.body;
    });

    const projectImages = projects.then(datas =>{

    });

    return {
        type: FETCH_PROJECTS,
        payload: projects
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