import axios from "axios";
import { setLoading } from ".";
import { getData, showMessage } from "../../utils";

const API_HOST = {
    url: 'http://10.0.2.2:8000/api'
}

export const makeQueue = (dataQueue, navigation) => (dispatch) => {
    getData('token').then((resToken) => {
        axios.post(`${API_HOST.url}/queue`, dataQueue, {
            headers: {
                Authorization: resToken,
            },
        }).then((res) => {
            dispatch(setLoading(false))
            showMessage(res.data.meta.message, 'success');
            navigation.replace('MainApp', { screen: 'Queue' })
        }).catch((err) => {
            dispatch(setLoading(false))
            showMessage(
                `${err?.response?.data?.data?.message}` ||
                'Gagal membuat antrian!!',
            );
        });
    });
};

export const getQueueByUserID = (queueStatusID) => (dispatch) => {
    getData('userProfile').then((user) => {
        axios.get(`${API_HOST.url}/queue?user_id=${user.id}&queue_status_id=${queueStatusID}`)
            .then((res) => {
                if (queueStatusID === '1') {
                    dispatch({ type: 'SET_IN_PROGRESS', value: res.data.data });
                }
                if (queueStatusID === '2') {
                    dispatch({ type: 'SET_PAST', value: res.data.data });
                }

            })
            .catch((err) => {
                showMessage(
                    `${err?.response?.data?.message} on Queue API` ||
                    'Terjadi kesalahan di API Queue',
                );
            });
    });
};