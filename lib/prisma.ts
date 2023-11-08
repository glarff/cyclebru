import { PrismaClient } from '@prisma/client';

declare const global: Global & { prisma?: PrismaClient };

export let prisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env['NODE_ENV'] === 'production') {
    prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
      });
    }
    prisma = global.prisma;
  }
}