import React, { useContext } from 'react';
import ClientContext from '../context/clientContext/ClientContex';

const ClientCounter = () => {
  const {clients} = useContext(ClientContext);
  const allInvited = clients.length;
  const attending = clients.filter(client => client.isconfirmed);
  const allAttending = attending.length;
  const invitedByDiet = (type) => clients.filter(client => client.dietary === type).length;
  const attendingByDiet = (type) => attending.filter(client => client.dietary === type).length;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Client</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{invitedByDiet("Non-Veg")}</td>
            <td>{attendingByDiet("Non-Veg")}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{invitedByDiet("Vegan")}</td>
            <td>{attendingByDiet("vegan")}</td>
          </tr><tr>
            <th>Pescatarians</th>
            <td>{invitedByDiet("Pascatarian")}</td>
            <td>{attendingByDiet("Pascatarian")}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{allInvited}</td>
            <td>{allAttending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ClientCounter;
