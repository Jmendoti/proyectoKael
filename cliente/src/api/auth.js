import axios from './axios'


export const registerRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const updateProfileRequest = (id, user) => 
axios.put(`/profile/${id}`, user )

export const getProfileRequest = (id) => axios.get(`/profile/${id}`);

export const verifyTokenRequest = () => axios.get('/verify')