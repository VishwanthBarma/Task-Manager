import { PrismaClient } from '@prisma/client'
import prisma from '../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export type Context = {
  prisma: PrismaClient
}
export async function createContext({ req, res }: {req:any, res:any}): Promise<Context> {
  return {
    prisma,
  }
}

