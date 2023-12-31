import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, DataType, AutoIncrement, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'LOGIN_ATTEMPTS', timestamps: true })
export class LoginAttempt extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({field: 'attempt_id', type: DataType.INTEGER})
  attemptId!: number;

  @CreatedAt
  @Column({field: 'login_date', type: DataType.DATE})
  loginDate!: Date;

  @UpdatedAt
  updated!: Date;

  @Column({field: 'login_status', type: DataType.STRING})
  loginStatus!: string;

  @Column({field: 'login_ip', type: DataType.STRING})
  loginIp!: string;

  @Column
  token!: string;

  @ForeignKey(() => User)
  @Column({field: 'user_id', type: DataType.INTEGER})
  userId!: number;

  @BelongsTo(() => User)
  user!: User;


}