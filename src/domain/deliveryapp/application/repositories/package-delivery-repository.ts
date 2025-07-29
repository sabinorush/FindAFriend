import { Package } from '../../enterprise/entities/package'

export interface DeliveryPackageRepository {
  createDelivery(pckg: Package): Promise<void>
}
