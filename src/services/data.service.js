import axios from 'axios';

export let dataServiceObj = 
{
    getAllProducts,
    getProdById,
    addProd,
    updateProd,
    deleteProd
};





let url = "http://localhost:4500/products/";

function getAllProducts()
{
    return axios.get(url);
}


function addProd(prodObj)
{
    return axios.post(url, prodObj);
}

function deleteProd(id)
{
    return axios.delete(url + id);
}


function getProdById(id)
{
    return axios.get(url + id);
}

function updateProd(prodObj)
{
    alert(prodObj.id);
    return axios.put(url + prodObj.id,prodObj);
}
