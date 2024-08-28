FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci --immutable
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production --immutable
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
USER node
CMD ["npm", "start"] 