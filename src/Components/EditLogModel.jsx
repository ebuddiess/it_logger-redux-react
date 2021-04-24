import React  , {useState , useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import {connect} from 'react-redux'
import {editLogs , clearCurrent} from '../actions/logActions'



const  EditLogModel = ( { current , editLogs , clearCurrent}) => {
    const [message, setMessage] = useState("")
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState("")

    const onSubmit = () => {
        if(message === ''){
            M.toast({html : "No Message"})
        }else {
           const updated = {
              message ,
              tech ,
              id : current.id ,
              attention ,
              date : new Date() 
            }
            editLogs(updated)
            setMessage('')
            setTech('')
            setAttention(false)
            clearCurrent()
        }
    }
    
    useEffect(() => {
      if(current){
        setMessage(current.message)
        setTech(current.tech)
        setAttention(current.attention)
      }
     }, [current])
 
    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Edit System Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
             
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
const mapStatetoProps = state => ({
  current :  state.log.current,
})

export default connect( mapStatetoProps , { editLogs , clearCurrent})(EditLogModel)
