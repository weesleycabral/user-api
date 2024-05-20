import { User } from "@prisma/client";

export abstract class UsersRepository {
    abstract getUsers(): Promise<User[]>;
    abstract create(name: string, userFunction: string): Promise<void>;
}