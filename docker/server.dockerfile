FROM node:latest
WORKDIR ./
COPY /package*.json ./

COPY ./ ./

ARG PORT=3000
ENV PORT=$PORT

RUN npm install
RUN npm install --save-dev @types/node

RUN npx prisma generate
RUN npm run build

EXPOSE ${PORT}:${PORT}

CMD ["npm", "run", "start"]

# docker build -t server -f docker/server.dockerfile .
# docker run -p 3000:3000 -t server