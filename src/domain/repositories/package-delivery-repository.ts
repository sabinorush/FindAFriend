import { Package } from "../entities/package";


export interface DeliveryPackageRepository {
  createDelivery(pckg: Package): Promise<void>;
  }