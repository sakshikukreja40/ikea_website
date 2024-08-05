import axios from 'axios';
 
export let dataServiceObj2 =
{
    getAllCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer
};
 
 
let url = "http://localhost:4500/customers/";
 
 
function getAllCustomers()
{
    return axios.get(url);
}

function addCustomer(custObj)
{
    return axios.post(url, custObj);
}

function deleteCustomer(username)
{
    return axios.delete(url + username);
}


function updateCustomer(custObj)
{
    return axios.put(url + custObj.username, custObj);
}