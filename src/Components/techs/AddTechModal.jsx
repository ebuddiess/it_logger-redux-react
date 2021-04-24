import React  , {useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min'

const  AddTechModal = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html : "Name missing"})
        }else {
            console.log("ok");
        }
    }

    return (
        <div id='add-tech-modal' className='modal' style={{padding : '20px'}}>
        <div className='modal-content'>
          <h4>ADD TECHNICIAN</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='firstname'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor='firstName' className='active'>
                First Name
              </label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='lastname'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor='lastname' className='active'>
                Last Name
              </label>
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


export default AddTechModal