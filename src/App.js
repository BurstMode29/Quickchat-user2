import './App.css';
import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from './firebase';
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';

function App() {
  const [messages, updateMessages] = useState([]);
  const [messages2, updateMessages2] = useState([]);
  const [text, setText] = useState('');

  // Read Data
  const readData = async () => {
    await getDocs(collection(db, "messages"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id}));
        updateMessages(newData);
      })
  }

  useEffect(() => {
    readData();
  }, [])

  const sendData = async () => {
    await getDocs(collection(db, "user-2"))
      .then((querySnapshot) => {
        const sentData = querySnapshot.docs
         .map((doc) => ({...doc.data(), id:doc.id}));
        updateMessages2(sentData);
      })
  }

  useEffect(() => {
    sendData();
  })

  // Write Data
  const addText = async (e) => {
    e.preventDefault(e)

    if(text === '' ) {
      alert('please complete fields')
      return
    }

    await addDoc(collection(db, 'user-2'),  {
      text: text,
    })
    setText('');
    window.location.reload(false);
  }

  // Delete Data
  const deleteMessage = (id) => {
      console.log(id);
      console.log();
    deleteDoc(doc(db, "user-2", id))
    .then(() => {
      // alert("Message Deleted");
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <div className='block'>
        <div className='messages'>
          {messages?.map((data, i) =>(
            <div className='user-1' key={i}>
              {/* <a className='deleteMessage' key={data.id} onClick={() => deleteMessage(data.id)} href="#">X</a> */}
              {data.text}
            </div>
          ))}

          {messages2?.map((data, i) =>(
            <div className='user-2' key={i}>
              <a className='deleteMessage' key={data.id} onClick={() => deleteMessage(data.id)} href="#">X</a>
              {data.text}
            </div>
          ))}
          
        </div>
        <div className='typeArea'>
          <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='type'></input>
          <button onClick={addText} type='submit'>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default App;
