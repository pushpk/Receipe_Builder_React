import React from 'react';

const Cockpit = (props) => 
{
    const styles = {
        backgroundColor: 'lightblue',
        textAlign: 'center',
        padding: '15px',
        borderRadius : '10%',
        fontWeight : 'bold',

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


