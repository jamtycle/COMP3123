import './App.css';
import React from 'react';
import Student from './components/student/Student';
import Faculty from './components/faculty/Faculty';

function App() {
    
    const c = {
        fnm: "Bruno",
        lnm: "Ramirez"
    };


    return (
        <React.Fragment>
            <Student fnm="Bruno" lnm="Ramirez" />
            <Faculty f={c} />
        </React.Fragment>
    );
}

export default App;
