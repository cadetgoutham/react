const ShowData = ({ Datas }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>School Name</th>
            <th>College Name</th>
          </tr>
        </thead>
        <tbody>
          {Datas.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.Age}</td>
                <td>{data.school}</td>
                <td>{data.College}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default ShowData;
  