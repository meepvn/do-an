const AddApi = (link, data) => {
    var Option = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`http://localhost:3100/api/${link}`, Option);
};
const getData = async () => {
    const res = await fetch(`http://localhost:3100/api/product`);
    const reponse = await res.json();
    return reponse;
};
const deleteApi = (link, id) => {
    const Option = {
        method: 'DELETE',
    };
    return fetch(`http://localhost:3100/api/${link}/${id}`, Option);
};
const updateApi = (link, id, data) => {
    var Option = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
    console.log('test', id, data);
    return fetch(`http://localhost:3100/api/${link}/${id}`, Option);
};
const addProduct = (link, FormData) => {
    var Option = {
        method: 'POST',
        body: FormData,
    };
    return fetch(`http://localhost:3100/api/${link}`, Option);
};

export { getData, AddApi, deleteApi, updateApi, addProduct };
