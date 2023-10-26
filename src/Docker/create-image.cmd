docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 1/app ../..
