import { MakePackageDeliveryUseCase } from './make-package-delivery'
import { DeliveryPackageRepository } from '../repositories/package-delivery-repository'
import { Package } from '../../enterprise/entities/package'

const fakeDeliveryRepository: DeliveryPackageRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDelivery: async (packageDelivery: Package) => {},
}

test('create a delivery', async () => {
  const makeDelivery = new MakePackageDeliveryUseCase(fakeDeliveryRepository)

  const packageDelivery = await makeDelivery.execute({
    userId: 'delivery-1',
    destinataryId: 'courier-1',
    status: 'DELIVERED',
  })

  expect(packageDelivery.id).toBeDefined()
})
