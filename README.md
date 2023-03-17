# IPEDS-to-datasette
Tools to get, prepare, and present IPEDS data in datasette

## Currently:

- IPEDS/scripts/
    - download_ipeds.sh 
        - downloads only IPEDS files specified, for years specified. (does not automatically scrape for everything)
    - prepare_datasette_metadata.py 
        - Generates a draft datasette metadata file, adding column titles as descriptions (the medium titles not the loong descriptions)  
