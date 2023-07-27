```python
import tensorflow as tf
from tensorflow import keras
import torch
import openai
import chromadb

# OpenAI API key
openai.api_key = 'your-api-key'

def runPythonScripts():
    print("Running Python scripts...")

def trainTensorFlowModels():
    print("Training TensorFlow models...")
    # Create a simple model
    model = keras.Sequential([
        keras.layers.Dense(64, activation='relu'),
        keras.layers.Dense(64, activation='relu'),
        keras.layers.Dense(10)
    ])
    # Compile the model
    model.compile(optimizer=tf.keras.optimizers.Adam(),
                  loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                  metrics=['accuracy'])
    print("Model compiled successfully.")

def trainPyTorchModels():
    print("Training PyTorch models...")
    # Create a simple model
    model = torch.nn.Sequential(
        torch.nn.Linear(64, 64),
        torch.nn.ReLU(),
        torch.nn.Linear(64, 10)
    )
    print("Model created successfully.")

def callOpenAIApi():
    print("Calling OpenAI API...")
    # Call the OpenAI API
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="Translate the following English text to French: '{}'",
        max_tokens=60
    )
    print(response.choices[0].text.strip())

def queryChromaDB():
    print("Querying ChromaDB...")
    # Query ChromaDB
    db = chromadb.ChromaDB()
    result = db.query("SELECT * FROM table")
    print(result)
```