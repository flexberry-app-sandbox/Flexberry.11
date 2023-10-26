docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 1-java/app ../../..
