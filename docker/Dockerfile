FROM node:23.8.0 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:1.27.4-bookworm AS runner
COPY --from=build /app/out /var/www/out
