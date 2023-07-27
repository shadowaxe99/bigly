```python
import os
import yaml

class DocumentationGenerator:
    def __init__(self):
        self.documentation_path = "documentation.yaml"

    def update_documentation(self, filename, function_name, description):
        if not os.path.exists(self.documentation_path):
            with open(self.documentation_path, 'w') as file:
                docs = {filename: {function_name: description}}
                yaml.dump(docs, file)
        else:
            with open(self.documentation_path, 'r') as file:
                docs = yaml.safe_load(file)
                if filename in docs:
                    docs[filename][function_name] = description
                else:
                    docs[filename] = {function_name: description}
            with open(self.documentation_path, 'w') as file:
                yaml.dump(docs, file)

    def generate_readme(self):
        with open(self.documentation_path, 'r') as file:
            docs = yaml.safe_load(file)
        with open("README.md", 'w') as file:
            for filename, functions in docs.items():
                file.write(f"# {filename}\n")
                for function_name, description in functions.items():
                    file.write(f"## {function_name}\n")
                    file.write(f"{description}\n")
                file.write("\n")

documentation_generator = DocumentationGenerator()
```
This Python script creates a class `DocumentationGenerator` that can update a YAML file with function descriptions and generate a README.md file from it. The `update_documentation` method takes a filename, function name, and description as arguments and updates the YAML file accordingly. The `generate_readme` method reads the YAML file and generates a README.md file with the function descriptions.