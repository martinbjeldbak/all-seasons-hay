FROM phusion/passenger-nodejs

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Enable nginx + passenger
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD webapp.conf /etc/nginx/sites-enabled/webapp.conf

# Install libs effeciently
# (see: http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/)
# Copy src over
ADD . /home/app/webapp

RUN chown -R app:app /home/app/

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
