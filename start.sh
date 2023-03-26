#!/bin/bash
#Keeping it simple and old school

datasette database/IPEDS.db -m templates/metadata.json --template-dir=templates/ --static assets:templates/static_files/ -o