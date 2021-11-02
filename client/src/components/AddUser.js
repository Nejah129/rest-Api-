import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, getUsers } from '../redux/actions';
import Modal from 'react-modal';
const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch()
    let handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(addUser(name,email,number))
        dispatch(getUsers())
        closeModal()
        setNumber("")
        setName("")
        setEmail("")
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
            <button onClick={openModal}> Add</button>
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

export default AddUser
