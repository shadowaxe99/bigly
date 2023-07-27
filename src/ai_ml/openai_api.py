```python
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def understand_instruction(instruction):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=instruction,
        temperature=0.5,
        max_tokens=100
    )
    return response.choices[0].text.strip()
```