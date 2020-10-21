
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```

docker run --name nginxZimu -d -p 80:80 -v /root/zimu/zimu/dist:/usr/share/nginx/html:ro -v $PWD/logs:/var/log/nginx -v /root/nginxForZimuFrontEnd/nginx.conf:/etc/nginx/nginx.conf:ro -v /root/nginxForZimuFrontEnd/default.conf:/etc/nginx/conf.d/default.conf nginx
