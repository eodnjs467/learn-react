import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
        'https://react-meetup-15869-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json',
          }
        }
    ).then((res)=> {
      if(res.status === 200){
        history.replace('/');
      }
    }).catch(err => console.error(err));
  }

  return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
  )
}

export default NewMeetupPage;
