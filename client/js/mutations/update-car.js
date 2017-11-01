import {commitMutation, graphql} from "react-relay";

const mutation = graphql `
    mutation updateCarMutation($input: UpdateCarInput!) {
      updateCar(input: $input) {
        viewer {
          id
        }
        car {
          id
          make
        }
        
        clientMutationId
      }
    }
`;

const getOptimisticResponse = (car) => ({
    updateCar: {car}
});

let clientMutationId = 0;

export const updateCar = (environment, viewerId, car) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation,

            variables: {
                input: {
                    car,
                    clientMutationId: String(clientMutationId++),
                }
            },

            optimisticResponse: getOptimisticResponse(car),

            // the success function when mutation is successful
            onCompleted: (results, errors) => {
                if (errors) {
                    reject(errors);
                }
                resolve(results);
            },

            // the error function when the mutation is unsuccessful
            onError: errors => reject(errors),

        });
    });
};