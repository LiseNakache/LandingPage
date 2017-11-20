import React from 'react';
import axios from 'axios'

class EmailComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { emailAdress: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/', {
            emailAdress: this.state.emailAdress
        })
            .then((response) => {
                console.log(response.data)
                // ENVOYER EMAIL A USER EMAIL
                this.setState = { emailAdress: '' }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <div className="email">
                <h3>Hurry Up, write down your email, to be the first to use the app!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs input-group">
                        <input className="form-control" id="emailAdress" type="email" required="true" placeholder="Your Email" value={this.state.emailAdress} onChange={this.handleChange}/>
                        <span className="input-group-btn">
                        <button className="btn btn-default">Submit</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}


export default EmailComponent;