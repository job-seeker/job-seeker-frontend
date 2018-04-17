import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class EventSelector extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Event Type"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Informational Interview" />
          <MenuItem value={2} primaryText="Phone Interview" />
          <MenuItem value={3} primaryText="Round 2 Interview" />
          <MenuItem value={4} primaryText="In-Person Interview" />
          <MenuItem value={5} primaryText="Offer" />
        </SelectField>
      </div>
    )
  }
}