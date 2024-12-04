FROM node:current-bookworm-slim

ENV NODE_ENV=production
ENV AUTHOR=paleshchenko
ENV UUID="DF3E7B46-7B84-4DE9-8499-32C97DB7F6E5"

EXPOSE 8000

WORKDIR /opt/brick

RUN addgroup --system brick && adduser --system brick --ingroup brick
RUN chown -R brick:brick /opt/brick

COPY . ./

RUN apt-get update && \
    apt-get install curl=7.88.1-10+deb12u8 -y && \
    apt-get clean && \
    npm install --production && \
    npm cache clean --force

USER brick

CMD ["node", "app.js"]