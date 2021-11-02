curl -X POST 'http://localhost:8080/auth/realms/<YOUR_REALM>/protocol/openid-connect/token' \
 --header 'Content-Type: application/x-www-form-urlencoded' \
 --data-urlencode 'grant_type=password' \
 --data-urlencode 'client_id=<CLIENT_ID>' \
 --data-urlencode 'client_secret=<CLIENT_SECRET>' \
 --data-urlencode 'username=<USERNAME>' \
 --data-urlencode 'password=<SENHA>'