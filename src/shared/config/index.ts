import { env } from 'node:process';

export const BASE_URL = env.BASE_URL ?? 'http://localhost:3000';
