import { Optional } from '@/core/types/optional'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Entity } from '@/core/entities/entity'

export interface PackageProps {
  description: string
  status: 'PENDING' | 'DELIVERED' | 'CANCELED'
  destinataryId: UniqueEntityId
  userId: UniqueEntityId
  deliveredAt?: Date
  deliveryDate: Date
  deliveryPickUpAt?: Date
  createdAt: Date
  updatedAt?: Date
  deletetAt?: Date
}
export class Package extends Entity<PackageProps> {
  get status() {
    return this.props.status
  }

  get description() {
    return this.props.description
  }

  get destinataryId() {
    return this.props.destinataryId
  }

  get userId() {
    return this.props.userId
  }

  get deliveredAt() {
    return this.props.deliveredAt
  }

  get deliveryDate() {
    return this.props.deliveryDate
  }

  get deliveryPickUpAt() {
    return this.props.deliveryPickUpAt
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.status
  }

  get deletetAt() {
    return this.props.deletetAt
  }

  get isDelivered() {
    if (this.props.status === 'DELIVERED' && this.props.deliveredAt) {
      return true
    } else throw new Error('Package is not delivered')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set status(newStatus: 'PENDING' | 'DELIVERED' | 'CANCELED') {
    this.props.status = newStatus

    this.touch()
  }

  static create(
    props: Optional<PackageProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const pckg = new Package(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
    return pckg
  }
}
