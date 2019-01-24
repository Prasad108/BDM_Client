import {Center} from './Center';
import {Role} from './Role';

export class User {
        id: number;
        center: Center | number;
        roles: Role | number;
        name: string;
        counceller: string;
        email: string;
        mob: string;
        username: string;
        pwd: string;


    constructor($id?: number, $center?: Center |number , $roles?: Role |number ,
         $name?: string, $counceller?: string, $email?: string,
         $mob?: string, $username?: string, $pwd?: string) {
        this.id = $id;
        this.center = $center;
        this.roles = $roles;
        this.name = $name;
        this.counceller = $counceller;
        this.email = $email;
        this.mob = $mob;
        this.username = $username;
        this.pwd = $pwd;
    }

}
