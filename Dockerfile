FROM ubuntu:15.10
MAINTAINER shri3k
LABEL Description="Single instance of elasticsearch node"

VOLUME ["/data"]

ARG elasticsearch="https://download.elasticsearch.org/elasticsearch/release/org/elasticsearch/distribution/tar/elasticsearch/2.1.0/elasticsearch-2.1.0.tar.gz"
RUN apt-get update && \
		apt-get install curl tar openjdk-8-jdk -y && \
		curl -o /usr/local/bin/elasticsearch.tar.gz $elasticsearch && \
		mkdir /usr/local/bin/elasticsearch/ && \
		tar -zxf /usr/local/bin/elasticsearch.tar.gz -C /usr/local/bin/elasticsearch --strip-components 1 && \
		useradd -ms /bin/bash elasticsearch && \
		chown -R elasticsearch /usr/local/bin/elasticsearch 
EXPOSE 9200 9300
USER elasticsearch
WORKDIR /usr/local/bin/elasticsearch
ENTRYPOINT ./bin/elasticsearch --network.host _non_loopback_


