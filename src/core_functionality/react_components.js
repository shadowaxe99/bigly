```javascript
import React from 'react';
import { connect } from 'react-redux';
import { understandInstruction, generateCode, decomposeTask } from '../ai_assistant.js';

class InstructionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { instruction: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ instruction: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = understandInstruction(this.state.instruction);
    const subTasks = decomposeTask(task);
    const code = generateCode(subTasks);
    this.props.dispatch({ type: 'GENERATE_CODE', code });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Instruction:
          <input type="text" value={this.state.instruction} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect()(InstructionInput);
```