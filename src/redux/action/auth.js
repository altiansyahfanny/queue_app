import axios from "axios";
import { setLoading } from ".";
import { showMessage, storeData } from "../../utils";

const API_HOST = {
    url: 'http://10.0.2.2:8000/api'
}

export const SignInAction = (dataLogin, navigation) => (dispatch) => {
    axios.post(`${API_HOST.url}/login`, dataLogin)
        .then(res => {
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
            const profile = res.data.data.user

            storeData('token', token)
            storeData('userProfile', profile)

            dispatch(setLoading(false))
            navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
        })
        .catch(err => {
            dispatch(setLoading(false))
            showMessage(err?.response?.data?.data?.message)
        });
}


export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    axios.post(`${API_HOST.url}/register`, dataRegister)
        .then(res => {
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
            const profile = res.data.data.user


            // simpan data token
            storeData('token', { value: token })

            if (photoReducer.isUploadPhoto) {
                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer)

                axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'multipart/from-data',
                    }
                }).then((res) => {
                    console.log(res)
                    profile.profile_photo_url = `http://10.0.2.2:8000/storage/${res.data.data[0]}`

                    // simpan data user
                    storeData('userProfile', profile)

                    navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] })
                }).catch(err => {
                    showMessage('Upload photo failed')
                    navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] })
                })
            } else {
                // simpan data user
                storeData('userProfile', profile)
                navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] })
            }

            dispatch(setLoading(false))
        })
        .catch(err => {
            dispatch(setLoading(false))
            showMessage(err?.response?.data?.data?.message)
        });
}