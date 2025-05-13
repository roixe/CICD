FROM nginx

WORKDIR /App/

COPY ./frontend/public /usr/share/nginx/html
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
