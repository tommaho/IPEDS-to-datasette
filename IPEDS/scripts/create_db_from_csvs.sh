#!/bin/bash
#Keeping it simple and old school

db_path="../../database/"
csv_path="../data/"

csvs-to-sqlite ${csv_path}*.csv ${db_path}IPEDS.db
