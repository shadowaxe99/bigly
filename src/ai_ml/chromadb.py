```python
import chromadb

class ChromaDBManager:
    def __init__(self):
        self.db = chromadb.ChromaDB()

    def query(self, query):
        return self.db.query(query)

    def insert(self, data):
        self.db.insert(data)

    def update(self, query, data):
        self.db.update(query, data)

    def delete(self, query):
        self.db.delete(query)

chroma_db_manager = ChromaDBManager()
```