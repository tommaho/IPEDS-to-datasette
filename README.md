# IPEDS-to-datasette
Tools to get, prepare, and present IPEDS data in datasette

## Currently:

- IPEDS/scripts/
    - download_ipeds.sh 
        - downloads only IPEDS files specified, for years specified. (does not automatically scrape for everything)
    - prepare_datasette_metadata.py 
        - Generates a draft datasette metadata file, adding column titles as descriptions (the medium titles not the loooong descriptions)  
    - create_db_from_csvs.sh
        - creates an sqlite db in ../../database from the csv contents of the ../data directory. Remove or move files out if you don't want them in the database. 
