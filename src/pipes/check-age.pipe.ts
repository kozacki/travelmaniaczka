import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";


interface CheckAgePipeOptions {
    minAge: number;
}

@Injectable()
export class CheckAgePipe implements PipeTransform {

    constructor(
        private options: CheckAgePipeOptions,
    ) {}

    transform(value: any, metadata: ArgumentMetadata): number {
        
        const age = Number(value);

        if(Number.isNaN(age) || age < this.options.minAge) {
            throw new BadRequestException(`Wiek musi być podany jako liczba i wynosić minimum ${this.options.minAge} lat.`)
        }

        return Number(value);
    }
}