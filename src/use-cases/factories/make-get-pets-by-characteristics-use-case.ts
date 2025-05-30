import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { GetPetsByCharacteristicsUseCase } from '../get-pets-by-characteristics'

export function makeGetPetsByCharacteristicsUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new GetPetsByCharacteristicsUseCase(petsRepository)

  return useCase
}
