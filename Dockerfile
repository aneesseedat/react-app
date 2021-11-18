# pul official base image
FROM node:16.13-alpine

# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# installing dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm config set strict-ssl false
RUN npm install
RUN npm install react-scripts@4.0.3

# add app
COPY . ./

CMD ["npm", "start"]