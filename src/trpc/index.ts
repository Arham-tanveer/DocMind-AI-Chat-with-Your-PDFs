import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {
  privateProcedure,
  publicProcedure,
  router,
} from './trpc'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'


export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user?.id || !user?.email)
      throw new TRPCError({code: 'UNAUTHORIZED'})
    // check if the user in the database exists, if not create a new user
    return { success: true }
  }),
  
  createStripeSession: privateProcedure.mutation(
    async ({ ctx }) => {

    }
  ),

  getFileMessages: privateProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        fileId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { fileId, cursor } = input

      
      })

    })

export type AppRouter = typeof appRouter
