FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y docker.io \
    && git config --system safe.directory '*'
USER jenkins

