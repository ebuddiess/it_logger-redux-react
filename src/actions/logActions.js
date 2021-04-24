import Types from '../Types'

export const getLogs = () => async (dispatch) =>  {

        try {
            
            setLoading()

            const res = await fetch("/logs")
            const data = await  res.json()
            dispatch({
                type : Types.GET_LOGS ,
                payload : data
            })
        

        } catch (error) {

            dispatch({
                type : Types.LOGS_ERROR ,
                payload : error.response.data
            })

        }
       
}

export const setLoading = () => (dispatch) => {
   dispatch({
    type : Types.SET_LOADING
})
}

export const addLogs = (log) => async (dispatch) =>  {

    try {
        
        setLoading()

        const res = await fetch("/logs", {
            method : "POST",
            body : JSON.stringify(log) ,
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        const data = await  res.json()

        dispatch({
            type : Types.ADD_LOG,
            payload : data
        })
    

    } catch (error) {

        dispatch({
            type : Types.LOGS_ERROR ,
            payload : error.response.data
        })

    }
   
}

export const deleteLogs = (log_id) => async (dispatch) =>  {

    try {
        
        await fetch("/logs/"+log_id, {
            method : "DELETE", 
        })


        dispatch({
            type : Types.DELETE_LOG,
            payload : log_id
        })
    

    } catch (error) {

        dispatch({
            type : Types.LOGS_ERROR ,
            payload : error.response.data
        })

    }
   
}

export const editLogs = (log) => async (dispatch) =>  {

    try {
        
        const res = await fetch("/logs/"+log.id, {
            method : "PUT", 
            body : JSON.stringify(log) ,
            headers : {
                'Content-Type' : 'application/json'
            }
        })



        const data = await  res.json()
        console.log(data)
        dispatch({
            type : Types.UPDATE_LOG,
            payload : data
        })
    

    } catch (error) {

        dispatch({
            type : Types.LOGS_ERROR ,
            payload : error.response.data
        })

    }
   
}

export const setCurrent = (log)  =>  {
        return {
            type : Types.SET_CURRENT,
            payload : log
        }
}

export const clearCurrent = ()  =>  {
    return {
        type : Types.CLEAR_CURRENT,
    }

}