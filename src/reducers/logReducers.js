import Types from '../Types'


const initialState = {
    logs : null ,
    current : null ,
    loading : false  ,
    error : null  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  ( state = initialState , action ) => {

    switch(action.type) {
       case Types.SET_LOADING : return { ...state , loading:true} ;
       case Types.LOGS_ERROR : console.log(action.payload) ; return { ...state , error : action.payload} ;
       case Types.GET_LOGS :   console.log(action.payload) ; return { ...state , logs : action.payload , loading : false} ;
       case Types.ADD_LOG :    console.log(action.payload) ; return { ...state , logs : [ ...state.logs , action.payload] , loading : false} ;
       case Types.DELETE_LOG : console.log(action.payload) ; return { ...state , logs : state.logs.filter(log => log.id !== action.payload)} ;
       case Types.SET_CURRENT : console.log(action.payload) ; return { ...state , current : action.payload } ;
       case Types.CLEAR_CURRENT : return { ...state , current : null } ;
       case Types.UPDATE_LOG : return { ...state , logs : state.logs.map( log => log.id === action.payload.id ? action.payload : log ) } ;



        default :
         return state ;

    }
    
}