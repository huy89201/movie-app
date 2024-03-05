const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_READ_ACCESS_TOKEN}`
    }
};

export default options