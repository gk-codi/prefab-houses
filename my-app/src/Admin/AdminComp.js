import React from 'react';

class CompAdmin extends React.Component {
    state = {
        editMode: false
    };

    toggleMode(){
        this.setState ({editMode:!this.state.editMode})
      }

      renderEdit(){
        return(
            
        )
      }
}