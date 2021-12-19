import axios from "axios";
import { setLoading } from ".";
import { getData, showMessage } from "../../utils";

const API_HOST = {
    url: 'http://10.0.2.2:8000/api'
}

export const getAllService = () => (dispatch) => {
    getData('token').then((resToken) => {
        axios.get(`${API_HOST.url}/service`, {
            headers: {
                Authorization: resToken,
            },
        })
            .then((res) => {
                dispatch({ type: 'SET_SERVICE', value: res.data.data });
            })
            .catch((err) => {
                showMessage(
                    `${err?.response?.data?.message} on Service API` ||
                    'Terjadi Kesalahan di API Service',
                );
            });
    });
};
export const getServiceStatus = (navigation, item, type, service_id) => (dispatch) => {
    getData('token').then((resToken) => {
        getData('userProfile').then((user) => {
            axios.get(`${API_HOST.url}/service/status?user_id=${user.id}&service_id=${service_id}&type=${type}`, {
                headers: {
                    Authorization: resToken,
                },
            })
                .then((res) => {
                    navigation.navigate('DetailService', {
                        item: item,
                        progress: res.data.data
                    })
                    dispatch(setLoading(false))
                    // dispatch({ type: 'SET_SERVICE_STATUS', value: res.data.data });
                })
                .catch((err) => {
                    dispatch(setLoading(false))

                    showMessage(
                        `${err?.response?.data?.message} on Service API` ||
                        'Terjadi Kesalahan di API Service',
                    );
                });
        })
    });
};