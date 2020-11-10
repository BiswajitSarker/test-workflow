FROM nginx:1.19.4-alpine
ARG VERSION
ENV REACT_APP_VERSION=$VERSION
COPY ./build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]