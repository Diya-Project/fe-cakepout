import api from "./http";

const ApiPtk = {
    getAllPtk :()=>{
        return api.get('/ptk')
    }
}

export default ApiPtk;