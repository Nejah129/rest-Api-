import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editeUser, getUsers } from '../redux/actions';

const EditeUser = ({el}) => {
    const [name, setName] = useState(el.name);
    const [email, setEmail] = useState(el.email);
    const [number, setNumber] = useState(el.number);
    const dispatch = useDispatch()
    let handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(editeUser(el._id,name,email,number))
        dispatch(getUsers())
        closeModal()
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <button onClick={openModal}> edit</button>
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

          <form onSubmit={handelSubmit}>
              <label > name</label>
              <input type="text" onChange={e=>setName(e.target.value)} value={name} />
              <label > email</label>
              <input type="text"onChange={e=>setEmail(e.target.value)} value={email} />
              <label > number</label>
              <input type="text" onChange={e=>setNumber(e.target.value)}  value={number}/>
              <button type={'submit'}>Confirme</button>
              <button onClick={closeModal}>Cancel</button>
          </form>
      </Modal>
        </div>
    )
}

export default EditeUser
