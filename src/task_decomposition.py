```python
from babyagi import TaskDecomposer

class TaskDecomposition:
    def __init__(self):
        self.decomposer = TaskDecomposer()

    def decompose_task(self, instruction):
        tasks = self.decomposer.decompose(instruction)
        return tasks

task_decomposition = TaskDecomposition()
```