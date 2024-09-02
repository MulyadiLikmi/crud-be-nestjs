// src/customer/customer.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find({
      order: {
        no: 'ASC', // Sort customers by 'no' ascending
      },
    });
  }

  findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOneBy({ no: id });
  }

  create(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async update(id: number, customer: Partial<Customer>): Promise<Customer> {
    await this.customerRepository.update(id, customer);
    return this.customerRepository.findOneBy({ no: id });
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
