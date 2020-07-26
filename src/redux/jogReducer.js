import {jogAPI} from "../API/jogAPI";

const START_SESSION = 'jog_reducer/START_SESSION';
const GET_JOGS = 'jog_reducer/GET_JOGS';
const CREATE_NEW_JOG = 'jog_reducer/CREATE_NEW_JOG';
const JOG = 'jog_reducer/JOG';

const initState = {
    isSession: false,
    jogs: [
        {
            id: 935,
            user_id: "3",
            distance: 4,
            time: 90,
            date: 1593475200
        },
    ]
};

export const jogReducer = (state = initState, action) => {
    switch (action.type) {
        case START_SESSION: return {
            ...state,
            isSession: true
        };
        case GET_JOGS: {
            let jogsArr = state.jogs;
            jogsArr.unshift(...action.jogs);
            return {
                ...state,
                jogs: jogsArr
            }
        }
        case CREATE_NEW_JOG: {
            let jogsArr = state.jogs;
            jogsArr.push(action.newJog);
            return {
                ...state,
                jogs: jogsArr
            }
        }
        case JOG: return {

        };
        default: return state
    }
};

export const startSession = () => ({type: START_SESSION});
const getJogs = (jogs) => ({type: GET_JOGS, jogs});
const createNewJog = (date, distance, speed, time) => ({type: CREATE_NEW_JOG, date, distance, speed, time});

export const logInUser = () => (
    async (dispatch) => {
        let result = await jogAPI.logInUser();
        if (result.status === 201) {
            let dataBundle = {
                accessToken: result.data.response.access_token,
                expires: result.data.response.expires_in,
                date: result.data.response.created_at
            };
            localStorage.setItem('accessToken', JSON.stringify(dataBundle));
            dispatch(startSession())
        }
    }
);
export const fetchJogs = () => (
    async (dispatch) => {
        let result = await jogAPI.getJogs();
        let jogsArr = result.data.response.jogs;
        let jogsChunk = jogsArr.slice(jogsArr.length - 10, jogsArr.length);
        dispatch(getJogs(jogsChunk))
    }
);
export const submitNewJog = (jogData) =>
    async (dispatch) => {
    dispatch(createNewJog(jogData.date, jogData.distance, jogData.speed, jogData.time))
};