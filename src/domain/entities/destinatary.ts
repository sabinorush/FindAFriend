import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/types/optional";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface DestinataryProps {
  address: string;
  email: string;
  phone: string;
  observations: string;
  createdAt: Date;
  updatedAt?: Date;
  deletetAt?: Date;
}
export class Destinatary extends Entity<DestinataryProps> {
  
  public get address() {
    return this.props.address
  }
    public get email() {
    return this.props.email
  }
    public get phone() {
    return this.props.phone
  }
    public get observations() {
    return this.props.observations
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

  static create(
    props: Optional<DestinataryProps, 'createdAt'>,
    id?: UniqueEntityId
  ) {
    const destinatary = new Destinatary({
      ...props,
      createdAt: new Date(),
    }, id)
    return destinatary;
  }
}