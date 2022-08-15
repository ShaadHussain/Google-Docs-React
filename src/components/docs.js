import React, { useState } from 'react'
import Modal from './Modal'
import { addDoc, collection, onSnapshot} from 'firebase/firestore';


export default function Docs({database}) {
  const [open, setOpen] = React.useState(false);
  // const [docsData, setDocsData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState('')
  const collectionRef = collection(database, 'docsData')


  const addData = () => {
    addDoc(collectionRef, {
      title: title
    })
    .then(() => {
      alert('Data Added')
      handleClose()
    })
    .catch(() => {
      alert('Cannot add data') 
      console.log(console.trace())
    })
  }

  // const getData = () => {
  //   onSnapshot
  // }
  return (
    <div className='docs-main'>
        <h1>Docs Clone</h1>

        <button 
          className='add-docs'
          onClick={handleOpen}
          >
          Add a Document
        </button>

        <Modal
          open={open}
          setOpen={setOpen}
          title={title}
          setTitle={setTitle}
          addData={addData}
        />
    </div>
  )
}