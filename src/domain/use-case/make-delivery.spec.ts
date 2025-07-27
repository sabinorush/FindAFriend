import { MakePackageDeliveryUseCase } from './make-package-delivery';
import { DeliveryPackageRepository } from '../repositories/package-delivery-repository';
import { Package } from '../entities/package';


const fakeDeliveryRepository: DeliveryPackageRepository = {
  createDelivery: async (packageDelivery: Package) => {
    return;
  }
}

test('create a delivery', async () => {
  const makeDelivery = new MakePackageDeliveryUseCase(fakeDeliveryRepository)

  const packageDelivery = await makeDelivery.execute({
    userId: 'delivery-1',
    destinataryId: 'courier-1',
    status: 'DELIVERED',
  })

  expect(packageDelivery.id).toBeDefined();
})