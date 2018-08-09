import { combineReducers } from 'redux';
import HomeReducer from './reducer_homepage';
import ProjectsReducer from './reducer_projects';
import ExperienceReducer from './reducer_experience';
const rootReducer = combineReducers({
    homeDatas: HomeReducer,
    projectsData: ProjectsReducer,
    experienceData: ExperienceReducer
});

export default rootReducer;