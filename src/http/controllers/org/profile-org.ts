import { makeGetOrgProfileUseCase } from '@/use-cases/factories/make-get-org-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profileOrg(request: FastifyRequest, reply: FastifyReply) {
  const getOrgProfile = makeGetOrgProfileUseCase()

  const { org } = await getOrgProfile.execute({
    orgId: request.user.sub,
  })

  return reply.status(200).send({
    org: {
      ...org,
      password_hash: undefined,
    },
  })
}
