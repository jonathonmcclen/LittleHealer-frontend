import React from 'react'

class Contact extends React.Component{
    state = {
        name: "",
        email: "",
        message: "",
    }

    submit = (e) => {
        e.preventDefault();
        this.props.createPlayer(this.state);
        this.setState({
          name: "",
          email: "",
          message: "",
        });
        this.props.history.push("/players");
    };

    render(){
        return(
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={this.submit}>
                Name:{" "}
                <input
                onChange={(e) => this.setState({ name: e.target.value })}
                type="text"
                value={this.state.name}
                />
                <br />
                Email:{" "}
                <input
                onChange={(e) => this.setState({ email: e.target.value })}
                type="text"
                value={this.state.email}
                />
                <br />
                Message:{" "}
                <input
                onChange={(e) => this.setState({ message: e.target.value })}
                value={this.state.message}
                type="text"
                />
                <br />
                <input type="submit" value="Create Player" />
            </form>
        </div>
        )
    }
}

export default Contact;