from pocketbase import PocketBase
from pocketbase.client import FileUpload
import json

client = PocketBase("https://budgetly.pockethost.io")

def login(email, password):
  user_data = client.collection("users").auth_with_password(username_or_email=email, password=password)

  if user_data.is_valid == False:
    return json.dumps({"error":400, "message": "user not found"})
  else:
    return json.dumps(user_data)
  
def createAccount(email, username, password):
  result = client.collection("users").create({
    email,
    password, 
  })

  print(result)