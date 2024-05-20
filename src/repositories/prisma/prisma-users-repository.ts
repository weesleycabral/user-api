import { PrismaService } from "src/database/prisma.service";
import { UsersRepository } from "../user-repository";
import { randomUUID } from 'node:crypto';
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
    constructor(
        private prisma: PrismaService
    ) { }

    async getUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async create(name: string, userFunction: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                id: randomUUID(),
                name,
                function: userFunction
            }
        })
    }
}