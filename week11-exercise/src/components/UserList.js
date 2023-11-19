import { Component } from "react";
import UserDataRow from "./UserDataRow";
import axios from "axios";
import API from "../api/AxiosAPI";

export default class UserList extends Component {

    #base_url = "https://reqres.in/api/users";

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    getAllUsers = (_page = 1) => {
        axios.get(`${this.#base_url}?page=${_page}`)
            .then((x) => this.setState({ ...this.state, users: x.data.data }))
            .catch((ex) => console.error(ex));
    };

    deleteUserByID = (_id) => {
        axios.delete(`${this.#base_url}/${_id}`)
            .then((x) => console.log(x.data))
            .catch((ex) => console.error(ex));
    };

    updateUser = (_user, _id) => {
        axios.put(`${this.#base_url}/${_id}`, _user)
            .then((x) => console.log(x.data))
            .catch((ex) => console.error(ex));
    };

    createNewUser = (_user) => {
        axios.post(this.#base_url, _user)
            .then((x) => console.log(x.data))
            .catch((ex) => console.error(ex));
    };

    getDataUsingAxiosIntance = async () => {
        const data = await API.get("/users?page=1");
        console.log(data);
    };

    componentDidMount() {
        this.getAllUsers();
    }

    render() {
        return (
            <div className="flex flex-col gap-5 w-5/6 h-5/6 items-center">
                <div className="w-full flex flex-col gap-4">
                    <h2 className="text-5xl">User List</h2>
                    <div className="flex gap-4 justify-center">
                        <button className="p-2 bg-orange-600 px-7 text-xl rounded-xl active:bg-orange-800 hover:bg-orange-400" onClick={this.getAllUsers}>Get Users (Page 1)</button>
                        <button className="p-2 bg-orange-600 px-7 text-xl rounded-xl active:bg-orange-800 hover:bg-orange-400" onClick={() => this.getAllUsers(2)}>Get Users (Page 2)</button>
                    </div>
                </div>
                <hr className="w-full" />
                <div className="max-h-[40rem] w-fit px-56 overflow-auto flex flex-col gap-5">
                    {this.state.users.map((user) =>
                        <UserDataRow key={user.id} user={user} />)}
                </div>
            </div>
        );
    }
}