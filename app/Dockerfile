FROM phusion/passenger-nodejs

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Enable nginx + passenger
RUN rm -f /etc/service/nginx/down
ADD webapp.conf /etc/nginx/sites-enabled/webapp.conf
RUN mkdir /home/app/webapp

# Install libs
ADD package.json /home/app/webapp/package.json
ADD bower.json   /home/app/webapp/bower.json

WORKDIR /home/app/webapp
RUN npm config set strict-ssl false
RUN npm install -g bower
RUN npm install
RUN npm rebuild node-sass
RUN bower install --allow-root

RUN chown -R app:app /home/app/

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
