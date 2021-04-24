import React  , {useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import {connect} from 'react-redux'
import {addLogs} from '../actions/logActions'


const  AddLogModel = ({addLogs}) => {
    const [message, setMessage] = useState("")
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState("")

    const onSubmit = () => {
        if(message === ''){
            M.toast({html : "No Message"})
        }else {
            addLogs({message,attention,tech , date: new Date()})

        }
        M.toast({html : `Log added by ${tech}`})
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Enter System Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor='message' className='active'>
                Log Message
              </label>
            </div>
          </div>
  
          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={tech}
                className='browser-default'
                onChange={e => setTech(e.target.value)}
              >
                <option value='' disabled>
                  Select Technician
                </option>
                <option value="" disabled> SELECT TECHNICIAN</option>
                            <option value=" JOHN DOE" > JOHN DOE</option>
                            <option value=" LUKKHA MALIK" > LUKKHA MALIK</option>
                            <option value="APTE MUSKA " > APTE MUSKA</option>
              </select>
            </div>
          </div>
  
          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    checked={attention}
                    value={attention}
                    onChange={e => setAttention(!attention)}
                  />
                  <span>Needs Attention</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className='modal-footer' style={{padding : "20px"}}>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'
          >
            Enter
          </a>
        </div>
      </div>
        )
}

const modalStyle = {
   padding : "20px"
}



export default connect( null , { addLogs})(AddLogModel)
