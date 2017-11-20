import React from 'react';

class EmailComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { emailAdress: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault();

        // AXIOS.POST
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <div className="email">
                <h1>I'm the EMAIL component !!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <input className="input" id="emailAdress" type="email" required="true" placeholder="Your Email" value={this.state.emailAdress} onChange={this.handleChange} />
                        <button className="btn">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EmailComponent;


{/* <input
            className="input"
            type="text"
            id="title"
            required="true"
            value={this.state.title}
            placeholder="Event Name"
            onChange={this.handleChange} /> */}