import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from 'Layouts/types.tsx'
// import _ from 'lodash';
let isSettProfileCalled = false;

export const setProfileData = (data: []) => {
    return {
        type: 'SET_PROFILE_DATA',
        payload: data,
    }
}

// Get current users profile
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProfile = async (dispatch: any) => {

    try {
        const res = await axios.get('/api/profile/me')
        if (res && res.data instanceof Object) {
            dispatch(setProfileData(res.data))
        } else {
            settProfileToDB(dispatch)
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error fetching profile:', error);
        dispatch({
            type: 'PROFILE_ERROR',
            payload: {
                msg: error.response?.data.msg,
                statusText: error.response?.statusText,
                status: error.response?.status,
            },
        });
        if (!isSettProfileCalled) {
            isSettProfileCalled = true;
            settProfileToDB(dispatch);
        }
    }

};

// Set profile to DB
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const settProfileToDB = async (dispatch: any) => {

    try {
        const res = await axios.post('/api/profile');
        if (res) {
            dispatch(setProfileData(res.data));
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error fetching profile:', error);
        dispatch({
            type: 'PROFILE_ERROR',
            payload: {
                msg: error.response?.data.msg,
                statusText: error.response?.statusText,
                status: 500,
            },
        });
    }

};