import { productGetAll, productCreate, productDelete } from './../../../services/product.service'
import { START, SUCCESS, ERROR } from './product.const';

//funciones puras y sincronas, llaman a redux para hacer el cambio de estado
const productActionStart = () => ({
    type: START,
    payload: null
})
const productActionSuccess = (data) => ({
    type: SUCCESS,
    payload: data
})
const productActionError = (data) => ({
    type: ERROR,
    payload: data
})

export const productAsyncCreatorGetAll = () => {
    return (dispatch) => {
        dispatch(productActionStart());

        productGetAll().then(res => {
            dispatch(productActionSuccess(res.data.data));
        }).catch(error => {
            dispatch(productActionError(error.data.data))
        })

    }
}
export const productAsyncCreatorCreate = (data) => {
    return (dispatch) => {
        dispatch(productActionStart());
        productCreate(data).then(res => {

            dispatch(productActionSuccess());
        }).catch(error => {
            dispatch(productActionError(error.data));
        });
    }
}

export const productAsyncCreatorDelete = (data) => { 
    return (dispatch)=>{
       dispatch(productActionStart());
       productDelete(data).then(res=>{
         dispatch(productActionSuccess(res.data.data));  
     }).catch(error=>{
         dispatch(productActionError(error));
     });
   }
}



