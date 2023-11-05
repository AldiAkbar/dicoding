import React, { useEffect, useState} from 'react';
import Navbar from './Navbar';
import ButtonAlert from './ButtonAlert';

function HookApp() {
    const rumah = 'Rumah Paling Nyaman';
    const [janji, setJanji] = useState(0);
    const [namaSaya, setNamaSaya] = useState('');

    const pencet = () => {
        return alert('awww di pencet')
    }

    useEffect (() => {
        if ( janji >= 3 && janji <= 10 ) {
            setNamaSaya('Aldi')
        } else {
            setNamaSaya('Akbar')
        }
    }, [janji])

  return (
    <div>
        <Navbar text={rumah}/>
        <h2>nama saya : {namaSaya}</h2>
        <h1>saya ada janji: {janji}</h1>
        <button onClick={() => setJanji((prev) => prev + 1 )}>Tambah</button>
        <button onClick={() => setJanji((prev) => Math.max(prev - 1, 0 ))}>Kurang</button>
        <ButtonAlert pencet={pencet}/>
    </div>
  )
}

export default HookApp;
