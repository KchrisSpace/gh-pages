import React from 'react';
class Head extends React.Component {
   refresh=()=> {
        let button = document.getElementById('refresh')
        button.addEventListener('click', () => {
        window.location.reload()    
        })
        
    }
    render() {
        return (
            <div>
                <button id="refresh" onClick={this.refresh}>换一换</button>
                <p id='head'> Lets pick your favirite Color!</p>
            </div>
        )
    }
}
export default Head;