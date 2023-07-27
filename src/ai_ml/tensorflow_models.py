```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

def trainTensorFlowModels(data, labels):
    model = keras.Sequential([
        layers.Dense(64, activation='relu', input_shape=[len(data.keys())]),
        layers.Dense(64, activation='relu'),
        layers.Dense(1)
    ])

    optimizer = tf.keras.optimizers.RMSprop(0.001)

    model.compile(loss='mse',
                  optimizer=optimizer,
                  metrics=['mae', 'mse'])

    model.fit(data, labels, epochs=10)

    return model
```