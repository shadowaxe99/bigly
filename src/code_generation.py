```python
import openai
from clippy import CodeTemplate
from specialized_minions import CodeWriter

class CodeGenerator:
    def __init__(self):
        self.openai_api_key = "your_openai_api_key"
        openai.api_key = self.openai_api_key
        self.code_writer = CodeWriter()

    def generate_code(self, instruction):
        # Use OpenAI API to understand the instruction
        prompt = f"{instruction}\n\n# Python Code:"
        response = openai.Completion.create(engine="text-davinci-002", prompt=prompt, max_tokens=100)

        # Extract code from the response
        code = response.choices[0].text.strip()

        # Use clippy to generate a code template
        template = CodeTemplate(code)

        # Use specialized_minions to write the code
        generated_code = self.code_writer.write_code(template)

        return generated_code

if __name__ == "__main__":
    code_generator = CodeGenerator()
    instruction = "Write a function in Python that takes a list of numbers and returns the sum of all numbers."
    generated_code = code_generator.generate_code(instruction)
    print(generated_code)
```