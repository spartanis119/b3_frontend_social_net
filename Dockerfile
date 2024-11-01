FROM alpine:3.20.3

RUN apk update && \
    apk add nodejs npm git && \
    mkdir -p /opt/data


