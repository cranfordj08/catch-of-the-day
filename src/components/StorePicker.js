import React from 'react';
import { getFunName } from "../helpers";
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
    static propTypes = {
        history: PropTypes.object
    };

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();//prevents page from reloading
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render () {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* stuff */}
                <h2>Please Enter a Store</h2>
                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}></input>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;