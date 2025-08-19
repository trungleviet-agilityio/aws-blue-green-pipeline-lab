#!/bin/bash
# Validate the application is running
curl -f http://localhost:80 || exit 1
