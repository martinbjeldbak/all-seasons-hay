FROM phusion/passenger-nodejs

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Enable nginx + passenger
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD webapp.conf /etc/nginx/sites-enabled/webapp.conf
RUN sed -i "s/WEBPORT/3000/" /etc/nginx/sites-enabled/webapp.conf

# Install libs effeciently
# (see: http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/)
ADD package.json /tmp/package.json
ADD bower.json /tmp/bower.json
WORKDIR /tmp
RUN npm config set strict-ssl false
RUN npm install -g bower && npm install && bower install --allow-root

RUN mkdir -p /home/app/webapp/tmp && cp -a /tmp/node_modules /home/app/webapp

# Copy src over
WORKDIR /home/app/webapp
ADD . /home/app/webapp

RUN chown -R app:app /home/app/

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
