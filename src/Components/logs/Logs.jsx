import React ,  {useEffect} from 'react'
import {connect} from 'react-redux'
import {getLogs} from '../../actions/logActions'

import LogItem from './LogItem'
import Preloader from '../Layouts/Preloader'

const Logs = ({ logs, loading , getLogs }) => {
   
    useEffect(() => {
    getLogs()
    // eslint-disable-next-line
    }, [])

    if(loading || logs ===null){
        return <Preloader />
    }

    return (
   <div>
         <ul className="collection with-header">
         <li className="collection-header"> 
             <h4 className="center">SYSTEM LOGS</h4>  
             </li>
             { !loading && logs.length === 0 ? (
                 <p className="center">NO LOGS</p>
             ) : logs.map(log => <LogItem key={log.id} log={log} /> 
                )  
              } 
     </ul>
   </div>
    )
}

const mapStatetoProps = state => ({
    logs :  state.log.logs ,
    loading : state.log.loading
})

export default connect( mapStatetoProps , { getLogs })(Logs)
