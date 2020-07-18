export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    db.collection('cars')
      .get()
      .then(snapshot => {
        const cars = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          cars.push(data)
        })
        //console.log(cars);
        this.setState({ cars: cars })
      })
      .catch(error => console.log(error))
  }
};