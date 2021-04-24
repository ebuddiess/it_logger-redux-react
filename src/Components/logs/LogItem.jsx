import React  from 'react'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {deleteLogs, setCurrent} from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min'


const LogItem = ({log , deleteLogs , setCurrent}) => {

    const Ondelete = () => {
        M.toast({html : "DELETED LOG FOR "+log.tech})
      deleteLogs(log.id)
    }

   

    return (
            <div>
                <li className="collection-item"><div><a onClick={() => setCurrent(log)} href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'} `}>{log.attention ? (<strong>{log.message}</strong>) : (<span>{log.message} </span>)}</a></div>
            <br/> <span className="grey-text"><span className="black-text">ID #{log.id} </span> last updated by <span className="black-text"><i>{log.tech}</i></span> on </span>
             <Moment format="Do MMMM YYYY , h:mm:ss a">{log.date}</Moment>
             <a href="#!" onClick={Ondelete} className="secondary-content"><i className="material-icons grey-text">delete</i></a>
            </li>
            </div>
           )
}


export default connect( null , { deleteLogs , setCurrent })(LogItem)
