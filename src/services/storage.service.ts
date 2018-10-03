import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys";
import { Cart } from "../models/cart";


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

    getCart(): Cart {
        let str = localStorage.getItem(STORAGE_KEYS.cart);
        if (str == null) {
            return null
        }
        return JSON.parse(str);
    }

    setCart(obj: Cart) {
        obj == null ? localStorage.removeItem(STORAGE_KEYS.cart) : 
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
    }
}