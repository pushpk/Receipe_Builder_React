import React from 'react';

const Cockpit = (props) => 
{
    const styles = {
        backgroundColor: 'green',
        textAlign: 'center',
        padding: '5px',
        ':hover': { backgroundColor: 'lightgray' }
      }

    return(
        <div>
            <header className="App-header">
             <h1>React App - Hello</h1>
            </header>
            <button style={styles} onClick={props.ClickHandler}> Swtich Person</button>
        </div>
    );
}

export default Cockpit;


