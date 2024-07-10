FROM node:20

WORKDIR /home/node/app

RUN corepack enable pnpm && corepack install -g pnpm@latest-9


COPY pnpm-lock.yaml ./

RUN pnpm fetch --prod

ADD . ./

RUN pnpm install -r --offline --prod

EXPOSE 8080
CMD ["pnpm", "run", "build"]