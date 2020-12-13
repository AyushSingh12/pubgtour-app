FROM openjdk:8-jre-alpine
WORKDIR usr/src
ENV MYSQL_DATABASE=sundb
ENV MYSQL_USER=app_root
ENV MYSQL_PASSWORD=root
ENV MYSQL_CI_URL=jdbc:mysql://localhost:3306/sundb
ADD ./target/userservice-0.0.1-SNAPSHOT.jar /usr/src/userservice-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","userservice-0.0.1-SNAPSHOT.jar"]
