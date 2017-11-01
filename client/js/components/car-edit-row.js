import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

export class CarEditRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.car;
    }

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.type === 'number'
                ? Number(e.target.value)
                : e.target.value,
        });
    }

    render() {
        return <tr>
                <td><input type="text" name="make" value={this.state.make} onChange={this.onChange}/></td>
                <td><input type="text" name="model" value={this.state.model} onChange={this.onChange}/></td>
                <td><input type="text" name="year" value={this.state.year} onChange={this.onChange}/></td>
                <td><input type="text" name="color" value={this.state.color} onChange={this.onChange}/></td>
                <td><input type="text" name="price" value={this.state.price} onChange={this.onChange}/></td>
            <td>
                <button type="button" onClick={() =>
                    this.props.onSubmitCar(this.state)}>Submit</button>
            </td>
            <td>
                <button type="button" onClick={() =>
                    this.props.onCancelCar(this.props.car.id)}>Cancel</button>
            </td>
        </tr>;
    }
}

export const CarEditRowContainer = createFragmentContainer(CarEditRow, graphql`
  fragment carEditRow_car on Car {
    id
    make
    model
    year
    color
    price
  }
`);
