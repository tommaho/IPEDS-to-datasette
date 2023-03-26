# IPEDS-to-datasette
Tools to get, prepare, and present IPEDS data in datasette.

Uses custom metadata file, a customized table header, and provides custom css and js entry points. 

## Currently:

- IPEDS/scripts/
    - download_ipeds.sh 
        - downloads only IPEDS files specified, for years specified. (does not automatically scrape for everything)
    - prepare_datasette_metadata.py 
        - Generates a draft datasette metadata file, adding column titles as descriptions (the medium titles not the loooong descriptions)  
        - You need to manually configure and add this to your datasette metadata file.
    - create_db_from_csvs.sh
        - creates an sqlite db in ../../database from the csv contents of the ../data directory. Remove or move files out if you don't want them in the database. 
    
- start.sh
    - launches datasette on database/IPEDS.db. Includes flags and path to your custom metatadata, customized templates, and static css and js files.


## To Do:

- Download and build lookup tables, associate to base IPEDs tables. 