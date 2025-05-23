import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { CreatePetRegisterUseCase } from './create-pet-register'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'

let orgsRepository: InMemoryOrgsRepository
let petsRepository: InMemoryPetsRepository
let sut: CreatePetRegisterUseCase

describe('Create Pet Register Use Case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository()
    orgsRepository = new InMemoryOrgsRepository()
    sut = new CreatePetRegisterUseCase(petsRepository, orgsRepository)

    await orgsRepository.create({
      id: 'org-1',
      name: 'Cãonil da Seda',
      email: 'caonildaseda@gmail.com',
      zip_code: '05885600',
      address: 'Rua da Seda, 32',
      city: 'São Paulo',
      state: 'SP',
      whatsapp: '11948275951',
      password_hash: '12345678',
    })
  })

  it('should be able to create pet register', async () => {
    const { pet } = await sut.execute({
      name: 'Charlie',
      about: '',
      age: 'PUPPY',
      size: 'SMALL',
      energyLevel: 'MEDIUM',
      independenceLevel: 'MEDIUM',
      spaceSize: 'SMALL',
      imagesUrls: ['img1.png', 'img2.png', 'img3.png'],
      adoptionRequirements: ['be careful', 'be friendly'],
      orgId: 'org-1',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
