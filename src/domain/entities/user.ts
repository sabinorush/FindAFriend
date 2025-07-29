import { Entity } from '@/core/entities/entity'
import { Optional } from '@/core/types/optional'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface UserProps {
  name: string
  cpf: string
  password: string
  email: string
  phone: string
  createdAt: Date
  updatedAt?: Date
  deletetAt?: Date
  role: 'admin' | 'courier'
}
export class User extends Entity<UserProps> {
  public get name() {
    return this.props.name
  }

  public get cpf() {
    return this.props.cpf
  }

  public get password() {
    return this.props.password
  }

  public get email() {
    return this.props.email
  }

  public get phone() {
    return this.props.phone
  }

  public get createdAt() {
    return this.props.createdAt
  }

  public get updatedAt() {
    return this.props.updatedAt
  }

  public get deletetAt() {
    return this.props.deletetAt
  }

  public get role() {
    return this.props.role
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityId) {
    const user = new User(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
    return user
  }
}
