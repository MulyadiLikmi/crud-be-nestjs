// src/customer/customer.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ nullable: true }) // Allow null values for nama
  nama?: string;

  @Column({ nullable: true }) // Allow null values for alamat
  alamat?: string;

  @Column({ nullable: true }) // Allow null values for kota
  kota?: string;
}
