/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';




@Injectable()
export class CarsService {

    private cars: Car[] = [

        {
            id: uuid(),
            brand: 'toyota',
            model: 'corolla'
        },


    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`car whith id '${id}'not found`);


        return car;
    }


    create(createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);


        return car;
    }

    update(id: string, UpdateCarDto: UpdateCarDto) {

        let carDB = this.findOneById(id);

        if (UpdateCarDto.id && UpdateCarDto.id !== id)
            throw new BadRequestException(`car id i nos valid inside body`)

        this.cars = this.cars.map(car => {

            if (car.id === id) {
                carDB = { ...carDB, ...UpdateCarDto, id, }
                return carDB;
            }


            return car;

        })


        return carDB;
    }


    delete(id: string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }

}
