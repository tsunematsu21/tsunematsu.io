FROM node:12.13.1-buster

ENV DEBIAN_FRONTEND=noninteractive

# Install debian packages
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    apt-utils \
    dialog \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
