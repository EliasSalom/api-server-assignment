FROM node:latest
WORKDIR ./
COPY /package*.json ./

COPY ./ ./

ARG PORT=3000
ARG JWT_SECRET="test"
ARG DATABASE_URL="mongodb+srv://test:123@cluster0.id10m.mongodb.net/test"

ENV PORT=$PORT
ENV JWT_SECRET=$JWT_SECRET
ENV DATABASE_URL=$DATABASE_URL

RUN npm install
RUN npm install --save-dev @types/node

RUN npx prisma generate
RUN npm run build

EXPOSE ${PORT}:${PORT}

CMD ["npm", "run", "start"]

# docker build -t server -f docker/server.dockerfile .
# docker run -p 3000:3000 -t server