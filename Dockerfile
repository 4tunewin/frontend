FROM node:9.10.1

# Prepare app directory
RUN mkdir -p /opt/frontend
ADD . /opt/frontend

# Install yarn package manager
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Install dependencies
WORKDIR /opt/frontend

# RUN npm install
RUN ~/.yarn/bin/yarn install

# Build the app
RUN ~/.yarn/bin/yarn run build

# Install static server to serve files
RUN ~/.yarn/bin/yarn global add serve

# Expose the app port
EXPOSE 80

# Start the app
CMD serve -l 80 -s build