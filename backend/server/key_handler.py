import redis
import os

# Expects to be run in a railway context
class RedisHandler:
    def __init__(self) -> None:
        self.redis_connection: redis.Redis = redis.Redis(os.environ['REDISHOST'], int(os.environ['REDISPORT']), 0, os.environ['REDISPASSWORD'])
    
    def validate_key(self, key: str) -> bool:
        return self.redis_connection.get(key) is not None

    def delete_key(self, key: str) -> None:
        self.redis_connection.delete(key)

    def set_key(self, key: str) -> None:
        self.redis_connection.set(key, 1)
