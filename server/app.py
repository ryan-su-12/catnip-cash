from flask import Flask, request, jsonify
import plaid
import os
from dotenv import load_dotenv
from plaid.api import plaid_api
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.accounts_get_request import AccountsGetRequest
from plaid.model.country_code import CountryCode
from plaid.model.products import Products

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Plaid client configuration
PLAID_CLIENT_ID = os.getenv('PLAID_CLIENT_ID')
PLAID_SECRET = os.getenv('PLAID_SECRET')
PLAID_ENV = os.getenv('PLAID_ENV', 'sandbox')  # Default to 'sandbox' if not set

configuration = plaid.Configuration(
    host=plaid.Environment.Sandbox if PLAID_ENV == 'sandbox' else plaid.Environment.Development if PLAID_ENV == 'development' else plaid.Environment.Production,
    api_key={
        'clientId': PLAID_CLIENT_ID,
        'secret': PLAID_SECRET,
    }
)
api_client = plaid.ApiClient(configuration)
client = plaid_api.PlaidApi(api_client)

@app.route('/get_access_token', methods=['POST'])
def get_access_token():
    public_token = request.json.get('public_token')
    request = ItemPublicTokenExchangeRequest(public_token=public_token)
    response = client.item_public_token_exchange(request)
    access_token = response['access_token']
    return jsonify({'access_token': access_token})

@app.route('/accounts', methods=['POST'])
def get_accounts():
    access_token = request.json.get('access_token')
    request = AccountsGetRequest(access_token=access_token)
    response = client.accounts_get(request)
    return jsonify(response.to_dict())

if __name__ == '__main__':
    app.run(debug=True)