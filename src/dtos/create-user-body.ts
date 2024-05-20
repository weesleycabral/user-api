import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty({
        message: 'Function is required'
    })
    function: string;
}