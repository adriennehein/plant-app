import React from 'react';

class GreenhousePicker extends React.Component {
    myInput = React.createRef();

    // set function as property so that 'this' is accessible and doesn't need to be bound 
    goToGreenhouse = event => {
        // stop form from submitting
        event.preventDefault();
        // save input value        
        const greenhouseName = this.myInput.current.value;
        // change page
        this.props.history.push(`/greenhouse/${greenhouseName}`);
    }
    render() {
        return (
        <form class="greenhouse-picker" onSubmit={this.goToGreenhouse}>
        
            <h2>Name Your Greenhouse</h2>
            <label htmlFor="greenhouse-title">Title</label>
            <input 
                type="text" 
                ref={this.myInput}
                aria-label="Greenhouse Title"
                aria-required="true"
                id="greenhouse-title" 
                name="greenhouse-title" 
                defaultValue=""></input>
            <button type="submit">Enter Greenhouse</button>
        </form>
            )
    }

}

export default GreenhousePicker;