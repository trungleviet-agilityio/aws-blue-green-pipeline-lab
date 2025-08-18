#!/bin/bash
# Validate the application is running
curl -f http://localhost:3000 || exit 1
