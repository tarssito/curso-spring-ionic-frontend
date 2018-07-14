import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys";


@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null
        }
        return JSON.parse(user);
    }

    setLocalUser(obj: LocalUser) {
        obj == null ? localStorage.removeItem(STORAGE_KEYS.localUser) : 
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
}