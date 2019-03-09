# Docker - NodeJS app with Redis

<ul>
    <li>
        Creates two containers - Redis and NodeJS app container
    </li>
    <li>
        Displays number of times the web app has been visited.
    </li>
</ul>

### Steps to run
```
cd simpleweb

# Gets the images, starts containers in detatched mode
docker-compose up -d 

Navigate to url - localhost:4001
```
### To Stop a container
```
# Stops and Removes the containers
docker-compose down
```