# IPEDS-to-datasette
Tools to get, prepare, and present IPEDS data in datasette.


## Customizations on default datasette:

- metadata file defines css and js entry points.

- metadata with table-column descriptions automatically generated from IPEDS dictionary files. Requires manual merge into actual metadata file, since these can vary so widely. 

- The table-column descriptions, defined in the custom metadata dictionary, are collapsed into an html summary / details block in the table.html template. This is to save space over the default behaviour that would list all (pages of) descriptions.  

- Custom table scroll buttons at the top of the table, in the _table.html template:
    - |< << < > >> >|
    - these are jittery and hacky at the moment but it does the job.


## Currently a collection of utilities:

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
- a primary control script

- Download and build lookup tables, associate to base IPEDs tables. 