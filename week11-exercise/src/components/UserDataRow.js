import { Component, Fragment } from "react";

export default class UserDataRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div key={this.props.user.id} className="flex gap-5">
                    <img className="rounded-full" src={this.props.user.avatar} alt={this.props.user.first_name} />
                    <div className="flex flex-col justify-center text-left">
                        {/* <h2>{this.props.user.id}</h2> */}
                        <h2 className="text-2xl font-semibold">{this.props.user.first_name} {this.props.user.last_name} <span className="text-transparent underline hover:text-white">{this.props.user.id}</span></h2>
                        <h2 className="text-lg">{this.props.user.email}</h2>
                        <a className="underline text-lg text-blue-400 hover:text-blue-200 active:text-blue-950" target="_blank" href={`https://reqres.in/api/users/${this.props.user.id}`}>more...</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}