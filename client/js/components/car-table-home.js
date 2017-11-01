import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { PaginatedCarTableContainer } from './paginated-car-table';
import { deleteCar as relayDeleteCar } from '../mutations/delete-car';
import { updateCar as relayUpdateCar } from '../mutations/update-car';

export class CarTableHome extends React.Component {


  reactDeleteCar = carId => {
    return relayDeleteCar(
      this.props.relay.environment,
      this.props.viewer.id,
      carId,
    );
  };

  reactUpdateCar = car => {
      return relayUpdateCar(
          this.props.relay.environment,
          this.props.viewer.id,
          car
      );
  };


  render() {
    return <PaginatedCarTableContainer viewer={this.props.viewer}
      onDeleteCar={this.reactDeleteCar}
      onCreateCar={this.props.onCreateCar}
      onUpdateCar ={this.reactUpdateCar}
    />;
  }

}

export const CarTableHomeContainer = createFragmentContainer(CarTableHome, graphql`
  fragment carTableHome_viewer on Viewer {
    id
    ...paginatedCarTable_viewer
  }
`);
