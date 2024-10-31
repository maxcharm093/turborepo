import { Base } from '@/common/core/entities';
import { _hashPassword } from '@/common/utils';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({
    nullable: false,
    type: 'varchar',
  })
  firstName: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  middleName: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  lastName: string;

  @Column({
    nullable: false,
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @Column({
    nullable: false,
    type: 'varchar',
    default: true,
  })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await _hashPassword(this.password);
  }
}
