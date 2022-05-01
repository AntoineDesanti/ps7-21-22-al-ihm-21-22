Build image
docker build -t nestjs-back .

Run with limitations
docker run -p 3000:3000 --cpus=0.25 nestjs-back
