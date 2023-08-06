
import axios from 'axios';

export const getServicios = async () => {
 const res =   await axios.get("http://localhost:3000/servicios")
 console.log(res.data)
 return res.data

}