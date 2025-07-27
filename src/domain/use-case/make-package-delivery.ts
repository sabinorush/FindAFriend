import { Package, PackageProps } from "../entities/package";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { DeliveryPackageRepository } from "../repositories/package-delivery-repository";

interface MakeDeliveryUseCaseRequest {
  userId: string;
  destinataryId: string;
  status: 'PENDING' | 'DELIVERED' | 'CANCELED';
}

export class MakePackageDeliveryUseCase {
  constructor(
    private deliveryPackageRepository: DeliveryPackageRepository
  ) {}
 async execute({ userId, destinataryId, status }: MakeDeliveryUseCaseRequest) {
    const packageDelivery = Package.create({
      description: 'Package for delivery',
      status,
      deliveryDate: new Date(),
      destinataryId: new UniqueEntityId(destinataryId),
      userId: new UniqueEntityId(userId),
    })
    await this.deliveryPackageRepository.createDelivery(packageDelivery)
    return packageDelivery;
  }
}