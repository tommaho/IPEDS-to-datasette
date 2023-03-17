path = "../dictionaries/"

import os, pandas as pd, re
import json, sys

def getfiles():
    """Get all the xlsx files in the specified path, expecting IPEDS dictionaries only"""

    dicts = pd.DataFrame(columns=['varYear', 'tableName', 'varname', 'varTitle', 'longDescription'])

    with os.scandir(path) as it:
        for entry in it:
            if not entry.name.startswith('.') and entry.is_file() and entry.name.endswith(".xlsx"):
                filename = os.path.splitext(entry.name)[0]
                varlist = pd.read_excel(path + entry.name, sheet_name='varlist')
                descriptions = pd.read_excel(path + entry.name, sheet_name='Description')
                merged = pd.merge(varlist, descriptions, on='varname')
                merged['tableName'] = filename
                merged['varYear'] = re.findall(r'\d\d\d\d', filename)[0]
                dicts = dicts.append(merged[['varYear', 'tableName', 'varname', 'varTitle', 'longDescription']], ignore_index=True)
    return dicts

dictionary = getfiles()

data = {
    "databases": {
        "IPEDS": {
            "tables": {}
        }
    }
}

for _, row in dictionary.iterrows():
    table_name = row['tableName']
    col_name = row['varname']
    col_desc = row['varTitle']
    
    if table_name not in data['databases']['IPEDS']['tables']:
        data['databases']['IPEDS']['tables'][table_name] = {
            "columns": {}
        }
    data['databases']['IPEDS']['tables'][table_name]['columns'][col_name] = col_desc

with open('../datasette_metadata_draft/metadata-DRAFT.json', 'w') as f:
    json.dump(data, f, indent=4)

print("Complete! Review output in ../datasette_metadata_draft")