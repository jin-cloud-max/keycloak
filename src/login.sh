curl -X POST 'http://localhost:8080/auth/realms/av-tech/protocol/openid-connect/token' \
 --header 'Content-Type: application/x-www-form-urlencoded' \
 --data-urlencode 'grant_type=password' \
 --data-urlencode 'client_id=teste' \
 --data-urlencode 'client_secret=6593d14c-c7ce-4a99-ba6a-3ecbb921508e' \
 --data-urlencode 'username=admin' \
 --data-urlencode 'password=123456'