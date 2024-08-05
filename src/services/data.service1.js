import axios from 'axios';
 
export let dataServiceObj1 =
{
    getAllUsers,
};
 
 
let url = "http://localhost:4500/users/";
 
 
function getAllUsers()
{
    return axios.get(url);
}