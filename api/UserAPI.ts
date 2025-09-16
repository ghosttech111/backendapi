
import axios from "axios";

const URL = " https://ee17de85b5b4.ngrok-free.app/BackendAPI";

const api = axios.create({
  baseURL: URL,
});

export async function getUserById(id: number) {
    return (await api.get(`/UserController/${id}`)).data;
}

export async function deleteUser(id: number) {

    await api.delete("/UserController/" + {id});

}

export async function getUsers() {

    


}

