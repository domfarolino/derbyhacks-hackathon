def strip_unitag(input_email):
    unitag = input_email.split('@')[1]
    return unitag
    
print strip_unitag("hooverk@berea.edu")